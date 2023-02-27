const multer = require(`multer`);
const fs = require(`fs`);
const path = require(`path`);

/* 
图片上传：
接收一个option对象作为参数，包含三个属性
参数说明：
path:图片上传路径
key：与前端formdata.append(`file`, files[0])第一个参数field那么匹配，即“file”
size：图片最大限制，单位kb
 
 */
function uploadfiles(options = {}) {
	//解构options并赋给默认值
	const {
		path = `./public/temp`, key = `file`, size = 1000
	} = options;
	//设置multer参数，配置diskStorage来控制文件存储的位置即文件名等
	const storage = multer.diskStorage({
		//确定图片存储位置
		destination: function(req, file, cb) {
			//目录不存在自动创建目录
			try {
				fs.accessSync(path)
			} catch (e) {
				//TODO handle the exception
				fs.mkdirSync(path)
			}
			cb(null, path);
		},
		//确定文件存储时名字，如果使用原名，可能造成再次上传同一张照片时发生冲突
		filename: function(req, file, cb) {
			var changename = new Date().getTime() + `-` + file.originalname;
			cb(null, changename);
		}
	})
	const limits = {
		//限制文件大小100kb
		filesize: 1024 * size,
		//限制文件数量5个
		files: 5
	}
	//生成专门用于处理上传的一个工具，可以传入storage，limits等配置
	const upload = multer({
		storage,
		limits
	});
	//返回多文件上传配置信息，同样适用于但文件上传
	return upload.array(key);
}

/* 
复制文件
接收一个option对象作为参数，包含三个属性
参数说明：
frompath：源文件路径
topath：复制过去新路径
filename：文件名
 */

function copyfiles(options = {}) {
	const {
		frompath = `./public/temp`, topath = `./public/img`, filename
	} = options;
	let sourcefile = path.join(frompath, filename);
	let destpath = path.join(topath, filename);
	try {
		fs.accessSync(topath)
	} catch (e) {
		//TODO handle the exception
		fs.mkdirSync(topath)
	}
}

/* 
移动文件
接收一个option对象作为参数，包含三个属性
参数说明：
 frompath：源文件路径
 topath：复制过去新路径
 filename：文件名
 */
function movefiles(options = {}) {
	//对参数解构并设默认值
	const {
		frompath = `./public/temp`, topath = `./public/img`, filename
	} = options;
	var sourcefile = path.join(frompath, filename);
	var destpath = path.join(topath, filename);
	//topath目录不存在创建目录
	try {
		fs.accessSync(topath)
	} catch (e) {
		//TODO handle the exception
		fs.mkdirSync(topath)
	}
	fs.renameSync(sourcefile, destpath);
	return {
		path: destpath
	}
}

/* 
接收一个字符串
参数说明：
 filepath：要删除文件的路径
 例子：removefiles(`./public/temp`)
 */
function removefiles(filepath = `./public/temp`) { //filepath要删除的文件路径
	let stats = fs.statSync(filepath);
	//判断是否是文件
	if (stats.isFile()) {
		//删除文件
		fs.unlinkSync(filepath)
	} else if (stats.isDirectory()) {
		let filearr = fs.readdirSync(filepath);
		filearr.forEach(file => {
			removefiles(path.resolve(filepath, file))
		})
		fs.rmdirSync(filepath);
	}
}

module.exports = {
	uploadfiles,
	copyfiles,
	movefiles,
	removefiles
}

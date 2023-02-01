const fs = require("fs");
/* fs.readFile("./nodejs01.js","utf-8",function(err,data){
	//异步代码：同步代码后执行
	console.log("err",err);
	console.log("data",data);
	if(err){
		console.log("failed");
	}else{
		console.log("success");
	}
}) */
// 隐式转换 ：if()括号中值为 ：0 `` undefined null NaN false 时表示括号中布尔值为false，其余括号中任意值表示布尔值都为true
//同步代码：
/* const result= fs.readFileSync("./nodejs01.js","utf-8");
console.log("........");
console.log(result); */
/* try{
	const result= fs.readFileSync("/nodejs01.js","utf-8");
	console.log("sucess");
}catch(e){
	//TODO handle the exception
	console.log("........");
	console.log("failed");
} */
//写文件内容，异步，新内容覆盖旧内容，如果文件路径不正确，会根据错误路径创建一个新文件并写入（路径中有文件夹则会报错，即会自动创建文件，不会自动创建文件夹）
/* fs.writeFile("./index.html","//success",function(err){
	if(err){
		console.log("failed")
	}else{
		console.log("success")
	}
}) */
//同步,可根据同步读取文件错误方法查找或判断错误
/* fs.writeFileSync("./index.html","//success") */
/* fs.writeFileSync("./test.txt","test");
console.log("......");
console.log("success"); */
/* try{
	fs.writeFileSync("/test.txt","test");
}catch(e){
	//TODO handle the exception
	console.log("failed");
	console.log(e);
} */
//文件中追加内容,路径错误逻辑同writeFile，\n:追加内容换行
/* fs.appendFile("/index.html","//success",function(err){
	if(err){
		console.log("failed")
	}else{
		console.log("success")
	}
}) */
//fs.appendFileSync("./test.txt","\ntest2");
/* try{
	fs.appendFileSync("/test.txt","\ntest2");
}catch(e){
	//TODO handle the exception
	console.log("failed");
	console.log(e);
} */
//复制文件内容，异步，参数一文件的内容覆盖参数二文件的内容
/* fs.copyFile("./index.html","./index.js",function(err){
	if(err){
		console.log("failed")
	}else{
		console.log("success")
	}
}) */
//fs.copyFileSync("./index.js","./test.txt");
/* try{
	fs.copyFileSync("/index.js","./test.txt");
}catch(e){
	//TODO handle the exception
	console.log("failed");
	console.log("err",e);
} */
//删除文件
/* fs.unlink("./index.html",function(err){
	if(err){
		console.log("failed")
	}else{
		console.log("success")
	}
}) */
//fs.unlinkSync("test.txt");
/* try{
	fs.unlinkSync("test.txt");
}catch(e){
	//TODO handle the exception
	console.log("failed");
	console.log(e);
} */
//重命名,可以用来作为文件移动，但是需要保证移动到的文件夹存在
/* fs.rename("./index1.html","./index.html",function(err){
	if(err){
		console.log("failed")
	}else{
		console.log("success")
	}
}) */
//fs.renameSync("./index1.js","./index.js");
/* try{
	fs.renameSync("/index1.js","./index.js");
}catch(e){
	//TODO handle the exception
	console.log("failed");
	console.log(e);
} */
//创建文件夹
/* fs.mkdir("./public/a",function(err){
	if(err){
		console.log("failed")
	}else{
		console.log("success")
	}
}) */
//fs.mkdirSync("./public1");
/* try{
	fs.mkdirSync("./public1");
}catch(e){
	//TODO handle the exception
	console.log("failed");
	console.log(e);
} */
//fs.mkdirSync("./public1");
/* try{
	fs.mkdirSync("./public1");
}catch(e){
	//TODO handle the exception
	console.log("failed");
	console.log(e);
} */
//删除文件夹,文件夹下有内容无法删除，rmdir只能删除空文件夹
/* fs.rmdir("./public1", err => {
	if (err) {
		console.log("failed",err)
	} else {
		console.log("success")
	}
}) */
//fs.rmdirSync("./public1");
/* try{
	fs.rmdirSync("./public1");
}catch(e){
	//TODO handle the exception
	console.log("failed");
	console.log(e);
} */
//读取文件夹内容,只能读取一层内容
/* fs.readdir("./public",(err,data)=>{
	if (err) {
		console.log("failed",err)
	} else {
		console.log("success",data)
	}
}) */
//console.log(fs.readdirSync("../node"));
//判断文件或文件夹是否存在
/* fs.access("/public",function(err){
	if (err) {
		console.log("failed",err)
	} else {
		console.log("success",data)
	}
}) */
/* try{
	fs.accessSync("/public");
	console.log("exsit");
}catch(e){
	//TODO handle the exception
	console.log("failed");
	console.log(e);
} */
//查看文件或文件夹状态，判断当前路径是文件还是文件夹
/* fs.stat("./public",function(err,stats){
	if(err){
		console.log("failed",err)
	}else{
		const isfile=stats.isFile();
		const isdir=stats.isDirectory()
		console.log(isfile,isdir);
	}
}) */
/* console.log(fs.statSync("./public").isDirectory()) */
//　删除文件函数
/* function rmdir(dir){
	const stats= fs.statSync(dir);
	if(stats.isFile()){
		fs.unlinkSync(dir);
		console.log(`${dir}文件删除成功`);
	}else{
		const files= fs.readdirSync(dir);
		files.forEach(function(item){
			rmdir(`${dir}/${item}`);
		});
		fs.rmdirSync(dir);
		console.log(`${dir}文件夹删除成功`);
	}
}
rmdir(); */

//移动文件夹
/* function movedir(olddir,newdir){
	try{
		const isaccess= fs.accessSync(newdir);
	}catch(e){
		//TODO handle the exception
		//console.log(`${newdir}路径不存在，重新输入`);
		const dirs=newdir.split("/");
		const result=dirs.reduce(function(sum,item,index){
			if(index>1){
				fs.mkdirSync(sum);
			}
			return sum+"/"+item;
		});
		fs.mkdirSync(result);
		//fs.mkdirSync(newdir);
	}
	fs.renameSync(olddir,`${newdir}/${olddir}`);
}
 */
const arr=[1,2,3,4,5];

/* arr.forEach((item,index)=>{
	console.log(index+1);
}) */
/* arr.map((value,index,arr)=>{
	console.log(value,index,arr);
}) */
/* arr.reduce((prevalue,curvalue,curindex,arr)=>{
	console.log(prevalue,curvalue,curindex,arr);
}) */


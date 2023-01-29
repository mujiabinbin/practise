const fs=require("fs");
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
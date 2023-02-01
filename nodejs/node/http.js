const http=require("http");
const path=require("path");
const fs=require("fs");
//const index=path.join(path.dirname(__dirname),path.basename(__dirname),"index.html");

//request（req）：请求对象，请求相关的对象和方法
//response（res）：响应对象，响应相关的对象和方法
const server= http.createServer(function(req,res){
	fs.readFile("./index.html","utf-8",(err,data)=>{
		console.log(data);
		res.write(data);
		res.end();
	});
	
});
//端口，通过ip找到计算机，如果我们还想找到该及计算机的某个应用程序，需要知道应用程序对应的端口号
//端口范围：0-65535，建议3000以上，如8080,http默认端口80
server.listen(3000,()=>{
	console.log("server success");
});

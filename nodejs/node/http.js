const http=require("http");
const path=require("path");
const fs=require("fs");
const express=require(`express`);
const app=express();
//const index=path.join(path.dirname(__dirname),path.basename(__dirname),"index.html");

//request（req）：请求对象，请求相关的对象和方法
//response（res）：响应对象，响应相关的对象和方法
/* const server= http.createServer(function(req,res){
	fs.readFile("./index.html","utf-8",(err,data)=>{
		console.log(data);
		res.write(data);
		res.end();
	});
	//res.sendfile(`./index.html`);
	//res.end();
	
}); */
app.get('/', (req, res) => {
    // 这里的代码在浏览器以get请求/的时候执行，  
    // 这个函数就是用来处理浏览器的 对于/的get请求 的
    // 第一个参数req是请求头对象，里面包含请求头信息
    // 第二个参数res用来做响应
    //console.log(req);
    
    res.sendfile('./index.html');
});

//端口，通过ip找到计算机，如果我们还想找到该及计算机的某个应用程序，需要知道应用程序对应的端口号
//端口范围：0-65535，建议3000以上，如8080,http默认端口80
app.listen(3000,()=>{
	console.log("server success");
});

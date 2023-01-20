/* var http = require("http");
 
http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    response.write("Welcome to Nodejs");
    response.end();
}).listen(8000, "127.0.0.1");
 
console.log("Creat server on http://127.0.0.1:8000/"); */
/* const http = require('http')
const server = http.createServer()
const path = require('path')
const pathStr2 = path.join(__dirname, 'node/index.html')
const pathStr3 = path.join(__dirname, 'node/about.html')

server.on( 'request', function(req,res) {
    const url = req.url			// 1．获取请求的url地址
	let content = pathStr2;// 2．设置默认的内容为404 Not found
    if (url === '/' || url === '/index.html') {
		content = pathStr2;	// 3．用户请求的是首页
	}else if (url === '/about.html'){
		content = pathStr3;	// 4．用户请求的是关于页面
	}
	res.setHeader ( 'Content-Type','text/html; charset=utf-8')		// 5．设置Content-Type响应头,防止中文乱码
	res.end(content)		// 6．把内容发送给客户端
})

server.listen(8080, () =>{
	console.log('http server running at http://127.0.0.1:8080')
}) */


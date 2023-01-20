/* function demo(a,b){
	var result=a+b;
	return result;
}
console.log(demo(3,5)); */
/* var a=10;
var b=3;
console.log(a+b); */
/* var http = require('http');http.createServer(function(request,response){
 // 发动HTTP头部 	
// HTTP 状态值：200 ：ok 	
// 内容类型：text/plain 	
response.writeHead(200,{'Content-Type':'text/plain'});
 // 发送响应数据 
	 for(var i = 0 ;i < 5; i++){
 response.write('Hello World');
 response.write('\n');}
 response.end();}).listen(8888);
 console.log("Server running at  http://127.0.0.1:8888/"); */
 /* var http = require('http');
 var url = require('url');
 http.createServer(function(request,response){
  
     // 发动HTTP头部
     // HTTP 状态值：200 ：ok
     // 内容类型：text/plain
     response.writeHead(200,{'Content-Type':'text/plain'});
     // 解析ＵＲＬ参数
     const path = url.parse(request.url,true).query
     response.write("name :"+path.name);
     response.write('n');
     response.end();
 }).listen(8888);
  // 在终端打印信息：
  console.log("Server running at  http://127.0.0.1:8888/"); */
  /* var a=1;
  function foo(){
	  var str="hello world";
  	  console.log(`hello`);
	  return str;
  }
  let b=100;
  export default {
	  a,
	  foo,
	  b
  } */
  /* export var a=1;
   export function foo(){
	   var str="hello world";
  	  console.log(`hello`);
	  return str;
   }
   export let b=2; */
  
 /* var num=100;
  function foo(){
	  var str="hello world";
	  console.log("hello");
	  return str;
  } */
 /* module.exports={
	  num,
	  foo
  } */
  /* module.exports.num=num;
   module.exports.foo=foo(); */
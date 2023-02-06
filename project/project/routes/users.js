var express = require('express');
//后端路由，用于分配ajax请求
var router = express.Router();
const users=[
	{username:"zhangsan",password:"123"},{username:"lisi",password:"123"}]

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */
router.post('/login', function(req, res, next) {
	//console.log("success login")
	//1 接收前端数据
	//- post:req.body
	//- get:req.query
	const result= users.some(function(item,index){
		return item.username==req.body.username&&item.password==req.body.userpass;
	});
	if(result){
		 res.send({message:"登陆成功",status:1});
	}else{
		 res.send({message:"登陆失败",status:0});
	}
	
	//后端处理结果响应给前端
 
}); 
router.post('/reg', function(req, res, next) {
	
	const objstr=JSON.stringify(req.body);
	const strobj=JSON.parse(objstr);
	console.log(strobj);
	users.push(strobj);
    console.log(users);

	//后端处理结果响应给前端
  res.send({message:"注册成功",status:1});
}); 

module.exports = router;
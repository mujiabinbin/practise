var express = require('express');
const { insert } = require('../dao/usersDao');
//后端路由，用于分配ajax请求
var router = express.Router();
/* const {Schema, model}=require("mongoose");
const userschema= new Schema({
	username:String,
	password:String,
})
//2 定义数据集合的模型,将结构schema和数据库的集合关联起来
//model("模型名称"，userschema，“数据库中集合名称”)
const usermodel= model("usermodel",userschema,"users"); */
/* usermodel.create({
	username:"zhangsan",
	password:"123"
},function(err,data){
	if(!err){
		console.log(`add success`)
	}else{
		console.log(err)
	}
}) */
/* usermodel.find(function(err,data){
	console.log(data);
	//return data;
}) */

//console.log(users);
/* const users = [{
	username: "zhangsan",
	password: "123"
}, {
	username: "lisi",
	password: "123"
}] */

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */
const {login2, reg2}= require(`../service/usersService`);//引入usersService暴露的对象并解构
router.post('/login', async function(req, res, next) {
	const user=req.body;
	const data= await login2(user);//将user传给usersService层,并接收第二层返回的数据
	res.send(data);
	/* usermodel.find(function(err,data){
		const result=data.some(function(item,index){
			return item.username == req.body.username && item.password == req.body.password;
		})
		if (result) {
			res.send({
				message: "登陆成功",
				status: 1
			});
		} else {
			res.send({
				message: "登陆失败",
				status: 0
			});
		}
	}); */
	//console.log("success login")
	//1 接收前端数据
	//- post:req.body
	//- get:req.query
	/* const result = users.some(function(item, index) {
		return item.username == req.body.username && item.password == req.body.userpass;
	}); */
	/* var result=usermodel.find(req.body.username);
	console.log(result);
	if (result) {
		res.send({
			message: "登陆成功",
			status: 1
		});
	} else {
		res.send({
			message: "登陆失败",
			status: 0
		});
	}
 */
	//后端处理结果响应给前端

});
router.post('/reg',async function(req, res, next) {
	//const username= req.body.username;
	const user=req.body;
	//await insert(user);
	const data= await reg2(user);
	res.send(data);
    /* usermodel.find({username:req.body.username},function(err,data){
		if(data.length>0){
			res.send({
				message: "用户名重复",
				status: 0
			}); 
		}else{
			res.send({
				message: "注册成功",
				status: 1
			});
			usermodel.create({username:req.body.username,password:req.body.password},function(err,data){
				if(!err){
					console.log(`register success`)
				}else{
					console.log(err);
				}
			});
		};
		}); */
	})
	/* const objstr=JSON.stringify(req.body);
	const strobj=JSON.parse(objstr); */
	//console.log(strobj);
	/* const isexist = users.some(function(item, index) {
		return item.username == req.body.username
	}) */

	//console.log(users);

	//后端处理结果响应给前端
	
	/* async function a(){
		const p=await usermodel.find();
		console.log(p);
	}
	a(); */

module.exports = router;

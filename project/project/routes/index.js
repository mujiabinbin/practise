var express = require('express');
var router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */
const students=[
	{name:"张三",age:20,gender:"男"},
	{name:"李四",age:21,gender:"男"},
	{name:"王丽",age:22,gender:"女"},
	{name:"刘宁",age:20,gender:"女"}]
 router.get('/get', function(req, res, next) {
  res.send({
	  msg:"获取成功",
	  status:1,
	  data:students
  })
}); 
module.exports = router;

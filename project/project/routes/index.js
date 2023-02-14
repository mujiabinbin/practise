var express = require('express');
var router = express.Router();
const {
	add,
	stu
} = require(`../service/stuService`);

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */
/* let students = [{
		_id: 1,
		name: "张三",
		age: 20,
		gender: "男"
	},
	{
		_id: 2,
		name: "李四",
		age: 21,
		gender: "男"
	},
	{
		_id: 3,
		name: "王丽",
		age: 22,
		gender: "女"
	},
	{
		_id: 4,
		name: "刘宁",
		age: 20,
		gender: "女"
	}
] */
//获取数据
router.get('/get', async function(req, res, next) {
	const data = await stu();
	res.send({
		msg: "获取成功",
		status: 1,
		data: data
	})
});
//删除数据
/* router.post('/delete', function(req, res, next) {
	students = students.filter(function(item, index) {
		return req.body._id != item._id; //filter return 过滤条件，根据过滤过滤条件返回新数组
	})
	res.send({
		msg: "删除成功",
		status: 1,
		data: students
	})
}); */
router.post('/add', async function(req, res, next) {
	const stu = req.body;
	//console.log(stu);
	const data = await add(stu);
	res.send(data);
	console.log(data);

});

module.exports = router;

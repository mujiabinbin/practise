const {
	query
} = require('express');
var express = require('express');
var router = express.Router();
const {
	add,
	stu,
	del,
	edit,
	//search,
	stuupdate,
	isexsit
} = require(`../service/stuService`);

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

//获取及检索数据
router.get('/get', async function(req, res, next) {
	const searchdata = req.query;
	const data = await stu(searchdata);
	res.send({
		msg: "获取成功",
		status: 1,
		data: data
	})
});

//删除数据
router.post('/delete', async function(req, res, next) {
	/* students = students.filter(function(item, index) {
		return req.body._id != item._id; //filter return 过滤条件，根据过滤过滤条件返回新数组
	}) */
	const _id = req.body;
	const data = await del(_id);
	res.send({
		msg: "删除成功",
		status: 1,
		data: data
	})
});

// 判断用户是否存在
router.post('/isexsit', async function(req, res, next) {
	const username = req.body;
	const data = await isexsit(username);
	res.send(data);
});

//添加数据
router.post('/add', async function(req, res, next) {
	const stu = req.body;
	const data = await add(stu);
	res.send(data);
});

//搜素数据
/* router.post('/search', async function(req, res, next) {
	const searchedata = req.body;
	const data = await search(searchedata);
	res.send({
		msg: "搜索成功",
		status: 1,
		data: data
	})
}); */

//编辑数据
router.post('/edit', async function(req, res, next) {
	const _id = req.body;
	const data = await edit(_id);
	res.send({
		msg: "",
		status: 1,
		data: data,
	})
});
router.post('/update', async function(req, res, next) {
	const update = req.body;
	const data = await stuupdate(update);
	//console.log(req.body);
	res.send({
		msg: "编辑成功",
		status: 1,
		data: data,
	})
});

module.exports = router;

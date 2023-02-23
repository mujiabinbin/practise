var express = require('express');
var router = express.Router();

const {
	add,
	get
} = require(`../service/teaService`);

router.post('/add', async function(req, res, next) {

	const adddata = req.body;
	console.log(adddata);
	const data = await add(adddata);
	res.send(data);
});

router.get('/get', async function(req, res, next) {
	const data = await get();
	res.send(data);
});

module.exports = router;

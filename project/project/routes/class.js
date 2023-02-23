var express = require('express');
var router = express.Router();

const {
	claget,
	claadd,
	clasearch
} = require(`../service/claService`)

router.get('/get', async function(req, res, next) {
	const data = await claget();
	res.send(data);
});
router.post('/add', async function(req, res, next) {
	const data = await claadd(req.body);
	res.send(data);
});
router.post('/search', async function(req, res, next) {
	const searchdata = req.body;
	const data = await clasearch(searchdata);
	res.send(data);
});

module.exports = router;

var express = require('express');
var router = express.Router();

const {
	subadd,subget,subsearch
} = require(`../service/subService`)

router.get('/get', async function(req, res, next) {
	const data = await subget();
	res.send(data);
});
router.post('/add', async function(req, res, next) {
	const data = await subadd(req.body);
	res.send(data);
});
router.post('/search', async function(req, res, next) {
	const searchdata = req.body;
	const data = await subsearch(searchdata);
	res.send(data);
});

module.exports = router;

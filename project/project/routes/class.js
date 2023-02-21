var express = require('express');
var router = express.Router();

const {
	claget,
	claadd,
	claedit
} = require(`../service/claService`)

router.get('/get', async function(req, res, next) {
	const data = await claget();
	//console.log(data);
	res.send(data);
});
router.post('/add', async function(req, res, next) {
	const data = await claadd(req.body);
	res.send(data);
});
router.post('/edit', async function(req, res, next) {
	const data = await claedit(req.body);
	res.send(data);
});


module.exports = router;

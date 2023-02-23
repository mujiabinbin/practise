var express = require('express');
var router = express.Router();

const {
	claget,
	claadd,
	claedit,
	clasearch
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
router.post('/search', async function(req, res, next) {
	const searchdata = req.body;
	console.log(searchdata);
	const data = await clasearch(searchdata);
	res.send(data);
});
/* router.post('/edit', async function(req, res, next) {
	const data = await claedit(req.body);
	res.send(data);
}); */


module.exports = router;

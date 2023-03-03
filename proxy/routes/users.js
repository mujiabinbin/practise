var express = require('express');
var router = express.Router();
const rp = require(`request-promise`);
/* GET users listing. */
router.post('/reg', async function(req, res, next) {
	const newpassword = req.body.password //此处可以进行加密操作
	const data = await rp({ //通过request-promise向目标服务器发请求,可以看成后端的ajax
		method: `POST`,
		uri: `http://localhost:3000/users/reg`,
		body: {
			username: req.body.username,
			password: newpassword
		},
		json: true // 后端返回json格式
	})
	//可以再对拿到的data进行一些处理后再返回客户端
	res.send(data); //data拿到是目标服务器返回的结果
});

module.exports = router;

var express = require('express');
var router = express.Router();
const bcrypt = require(`bcrypt`);
const {
	TOKEN_KEY
} = require(`../utils/const`);
const {
	getMd5
} = require(`../utils/crypto`);
const jwt = require(`jsonwebtoken`);

const {
	login2,
	reg2
} = require(`../service/usersService`); //引入usersService暴露的对象并解构
router.post('/login', async function(req, res, next) {
	const {
		username,
		password
	} = req.body;
	//const newpassword = getMd5(password, `abcdefghijklmn`);//通过md5加密密码并存储数据库
	const data = await login2({
		username
	});
	if (data.status) {
		const result = bcrypt.compareSync(password, data.data[0].password) //将用户输入密码与数据库存储的密码做比较
		if (result) {
			const token = jwt.sign({
					username
				}, //要保存的信息
				TOKEN_KEY, //密钥，混淆用
				{
					expiresIn: 60000
				} //token有效期，单位默认为秒，
			)
			res.send({
				msg: `登陆成功`,
				status: 1,
				token
			})
		} else {
			res.send({
				msg: `登陆失败`,
				status: 0,
			})
		}
	} else {
		res.send({
			msg: `登陆失败`,
			status: 0,
		})
	}
	/*  */
});
router.post('/reg', async function(req, res, next) {
	const {
		username,
		password
	} = req.body;
	//const newpassword = getMd5(password, `abcdefghijklmn`); //后面参数为自定义密钥，用于混淆
	const newpassword = bcrypt.hashSync(password,
		10) //第一个参数为要加密的字符串，第二个参数为加密强度，10为适中，数字越大强度越大，但加密过程会耗时长
	const data = await reg2({
		username,
		password: newpassword
	});
	res.send(data);
})

router.get('/islogin', async function(req, res, next) {
	//获取token，拿到用户信息
	const headerstoken = req.get(`authorization`);
	const token = headerstoken.split(" ")[1];
	const {
		username
	} = jwt.verify(token, TOKEN_KEY); //abcd解码密钥,解码出为一个对象

	res.send({
		msg: "身份认证成功",
		status: 1,
		data: username
	})
});

module.exports = router;

const expressJWT = require(`express-jwt`);

const jwtAuth = expressJWT({
	secret: `abcd`, //token生成密钥一致
	algorithms: [`HS256`], //设置jwt算法为hs256
	credentialsRequired: false //无token请求是否解析
}).unless({
	path: [`/users/login`, `/users/reg`, `/users/isexsit`] //设置不需要验证token的路径
})

module.exports = jwtAuth;

/* module.exports.jwtAuth = expressJWT({
	secret: `abcd`, //token生成密钥一致
	algorithms: [`HS256`], //设置jwt算法为hs256
	credentialsRequired: false //无token请求是否解析
}).unless({
	path: [`/users/login`, `/users/reg`, `/users/isexsit`] //设置不需要验证token的路径
}); */

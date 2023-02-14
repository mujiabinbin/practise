//const { login } = require("../service/usersService");
const {
	usermodel1: usermodel
} = require(`./models/usersModel`);

module.exports.login3dao = async function(user) {
	const data = await usermodel.find(user); //查询数据库通过data接收
	//console.log("333",data);
	return data; //将结果返回第二层
}

module.exports.reg3 = async function(user) {
	const data = await usermodel.find({
		username: user.username
	});
	return data;
	console.log(data);
}

/* module.exports.insert=async function(user){
	await usermodel.create({username:user.username,password:user.password});
} */
module.exports.insert = function(user) {
	usermodel.create(user, function(err, data) {
		if (!err) {
			console.log(`add success`)
		} else {
			console.log(err)
		}
	})
}

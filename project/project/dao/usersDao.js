const {
	usermodel1: usermodel
} = require(`./models/usersModel`);

module.exports.login3dao = async function(user) {
	const data = await usermodel.find(user);
	console.log(user, data);
	return data;
}

module.exports.reg3 = async function(user) {
	try {
		const data = await usermodel.create(user);
		return {
			msg: `注册成功`,
			status: 1,
			data
		}
	} catch (e) {
		return {
			msg: `注册失败`,
			status: 0
		}
	}
}

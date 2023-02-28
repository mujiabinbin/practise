const {
	login3dao: login3,
	reg3,
	insert
} = require(`../dao/usersDao`);
module.exports.login2 = async function(user) {
	const data = await login3(user);
	if (data.length > 0) {
		return {
			message: "find success",
			status: 1,
			data
		}
	} else {
		return {
			message: "find failed",
			status: 0,
			data
		}
	}
}
module.exports.reg2 = async function(user) {
	const data = await reg3(user);
	return data;
}

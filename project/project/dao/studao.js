const {
	stumodel
} = require(`./models/stuModel`);
module.exports.add = async function(stu) {
	await stumodel.create(stu);
	return stu;
}
/* module.exports.get = async function() {
	const data = await stumodel.find({
		username: "111"
	});
	return data;
	console.log(data);
} */
module.exports.stu = async function() {
	const data = await stumodel.find();
	return data;
}

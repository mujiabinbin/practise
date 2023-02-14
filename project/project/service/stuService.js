const {
	add,
	stu
} = require(`../dao/studao`);
module.exports.add = async function(stu) {
	//console.log(`stuservice`, stu);
	const data = await add(stu);
	return data;
}
module.exports.stu = async function() {
	//console.log(`stuservice`, stu);
	const data = await stu();
	return data;
	//console.log(data)
}

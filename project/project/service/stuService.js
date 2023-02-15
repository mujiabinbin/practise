const {
	add,
	stu,
	del,
	search
} = require(`../dao/studao`);
module.exports.add = async function(stu) {
	const data = await add(stu);
	return data;
}
module.exports.stu = async function() {
	const data = await stu();
	return data;
}
module.exports.del = async function(_id) {
	const data = await del(_id);
	return data;
}
module.exports.search = async function(searchedata) {
	const data = await search(searchedata);
	return data;
}
/* module.exports.edit = async function(_id) {
	const data = await edit(_id);
	return data;
} */

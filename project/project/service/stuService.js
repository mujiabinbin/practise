const {
	add,
	stu,
	del,
	search,
	edit,
	stuupdate,
	isexsit
} = require(`../dao/studao`);

module.exports.add = async function(stu) {
	const data = await add(stu);
	return data;
}

module.exports.isexsit = async function(username) {
	const data = await isexsit(username);
	if (data.length > 0) {
		return {
			status: 0,
			msg: "该用户已存在"
		}
	} else {
		return {
			status: 1,
			msg: "用户不存在"
		}
	}
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

module.exports.edit = async function(_id) {
	const data = await edit(_id);
	return data;
}

module.exports.stuupdate = async function(update) {
	const data = await stuupdate(update);
	return update;
}

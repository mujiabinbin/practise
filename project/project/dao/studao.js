const {
	stumodel
} = require(`./models/stuModel`);
module.exports.add = async function(stu) {
	await stumodel.create(stu);
	return stu;
}

module.exports.stu = async function() {
	const data = await stumodel.find();
	return data;
}
module.exports.del = async function(_id) {
	const data = await stumodel.deleteOne({
		"_id": _id
	});
	return _id;
}
module.exports.search = async function(searchedata) {
	const data = await stumodel.find(searchedata);
	return data;
}

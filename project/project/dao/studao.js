const {
	stumodel
} = require(`./models/stuModel`);

module.exports.add = async function(stu) {
	await stumodel.create(stu);
	return stu;
}

module.exports.isexsit = async function(username) {
	const data = await stumodel.find({
		"username": username.username
		/* {
			$in: [username.username, username.editname]
		} */
	});
	return data;
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
	const data = await stumodel.find({
		$or: [{
				username: searchedata.username
			}, {
				userage: searchedata.userage
			},
			{
				usergender: searchedata.usergender
			}
		]
	});
	return data;
}

module.exports.edit = async function(_id) {
	const data = await stumodel.find({
		"_id": _id
	});
	return data;
}

module.exports.stuupdate = async function(update) {
	const data = await stumodel.updateOne({
		"_id": update._id
	}, update);
	return update;
}

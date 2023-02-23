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

module.exports.stu = async function(searchedata) {
	const data = await stumodel.find(searchedata).populate({
		path: `classid`,
		populate: {
			path: `teaid`
		}
	});
	/* [searchedata.searchtype]: {
		$regex: searchedata.searchname,
		$options: `$i`
	} */

	//1.const data = await stumodel.find().populate(`classid`)populate关联查询，参数为关联的key，返回的是find（）全部内容，其中classid对应属性值为以对象形式保存的另一张表的整条数据
	//2.如果学生同时关联班级和老师，find().populate(`classid`).populate(`teachesid`)
	/*3.多层嵌套
	 const data = await stumodel.find().populate({
		 path:`classid`,//学生关联classid
		 populate:{
			 path:`teachesid`//classid关联teacherid
		 }
	 })
	 */
	return data;
}

module.exports.del = async function({
	_id
}) {
	const data = await stumodel.findByIdAndDelete({
		"_id": _id
	});
	return _id;
}

/* module.exports.search = async function(searchedata) {
	const data = await stumodel.find(searchedata
		{
				$or: [{
						username: searchedata.username
					}, {
						userage: searchedata.userage
					},
					{
						usergender: searchedata.usergender
					}
				],
				//模糊查询：{name:{$regex:`李`,$options:`$i`}}，name属性中包含“李”的的所有数据,$options:`$i`不区分大小写，$regex:``空字符串匹配所有内容
			}
	);
	return data;
} */

module.exports.edit = async function(_id) {
	const data = await stumodel.find({
		"_id": _id
	}).populate(`classid`);
	return data;
}

module.exports.stuupdate = async function(update) {
	const data = await stumodel.updateOne({
		"_id": update._id
	}, update);
	return update;
}

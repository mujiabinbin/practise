const {
	subget,subadd,subsearch
} = require(`../dao/subdao`);

module.exports.subget = async () => {
	return await subget();
}
module.exports.subadd = async subname => {
	const data = await subadd(subname);
	if (data) {
		return {
			msg: `添加成功`,
			status: 1,
		}
	} else {
		return {
			msg: `添加失败`,
			status: 0,
		}
	}

}
module.exports.subsearch = async searchdata => await subsearch(searchdata);

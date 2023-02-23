const {
	claget,
	claadd,
	claedit,
	clasearch
} = require(`../dao/cladao`);

module.exports.claget = async () => {
	return await claget();
}
module.exports.claadd = async classname => {
	const data = await claadd(classname);
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
module.exports.clasearch = async searchdata => await clasearch(searchdata);

/* module.exports.claedit = async classname => {
	const data = await claedit(classname);

} */

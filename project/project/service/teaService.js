const {
	add,
	get
} = require(`../dao/teadao`);

module.exports.add = async adddata => {
	const data = await add(adddata);
	return data;
}

module.exports.get = async () => {
	const data = await get();
	return data;
}

const {
	teamodel
} = require(`./models/teachersModel`);

module.exports.add = async adddata => {
	const data = await teamodel.create(adddata);
	return data;
}

module.exports.get = async () => {
	const data = await teamodel.find();
	return data;
}

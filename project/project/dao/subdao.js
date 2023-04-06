const {
	submodel
} = require(`../dao/models/subModel`);
module.exports.subget = async () => {
	return await submodel.find();
}
module.exports.subadd = async subname => {
	const data = await submodel.create(subname);
	return data;
}
module.exports.subsearch = async (searchdata) => {
	const data = await submodel.find(searchdata);
	//console.log(data);
	return data;
}


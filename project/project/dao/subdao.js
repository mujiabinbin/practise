const {
	submodel
} = require(`../dao/models/subModel`);
module.exports.subget = async () => {
	return await submodel.find().populate('claid');
}
module.exports.subadd = async subname => {
	const data = await submodel.create(subname);
	return data;
}
module.exports.subsearch = async (searchdata) => {
	const data = await submodel.find(searchdata).populate('claid');
	//console.log(data);
	return data;
}


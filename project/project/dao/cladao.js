const {
	clamodel
} = require(`./models/classModel`);
module.exports.claget = async () => {
	return await clamodel.find();
}
module.exports.claadd = async classname => {
	const data = await clamodel.create(classname);
	return data;
}
module.exports.clasearch = async (searchdata) => {
	const data = await clamodel.find(searchdata);
	console.log(data);
	return data;
}
/* module.exports.claedit = async classname => {
	const data = await clamodel.find(classname);
	return data;
	console.log(data);
} */

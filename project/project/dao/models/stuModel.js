const {
	Schema,
	model
} = require("mongoose");
const stuschema = new Schema({
	username: String,
	userage: String,
	usergender: String
})
//2 定义数据集合的模型,将结构schema和数据库的集合关联起来
//model("模型名称"，userschema，“数据库中集合名称”)
const stumodel = model("stumodel", stuschema, "students");
module.exports.stumodel = stumodel; //将usermodel暴露出供dao使用
//console.log(usermodel);

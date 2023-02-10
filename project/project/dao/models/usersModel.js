const {Schema, model}=require("mongoose");
const userschema= new Schema({
	username:String,
	password:String,
})
//2 定义数据集合的模型,将结构schema和数据库的集合关联起来
//model("模型名称"，userschema，“数据库中集合名称”)
const usermodel3= model("usermodel",userschema,"users");
module.exports.usermodel1=usermodel3;//将usermodel暴露出供dao使用
//console.log(usermodel);
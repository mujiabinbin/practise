const {
	Schema,
	model
} = require("mongoose");
const stuschema = new Schema({
	username: String,
	userage: String,
	usergender: String,
	classid: {
		type: Schema.Types.ObjectId,
		ref: `clamodel` //要关联的集合模型名称
	} //一对一
	/* classid:【 {
		type: Schema.Types.ObjectId,
		ref: `` //要关联的集合模型名称
	}】, */ //关联为一对多时，classid属性值为数组,需要加上数组[]

})
//2 定义数据集合的模型,将结构schema和数据库的集合关联起来
//model("模型名称"，userschema，“数据库中集合名称”)
//module.exports.stumodel = model("student", stuschema);
module.exports = {
	stumodel: model("student", stuschema)
}
//module.exports.stumodel = stumodels; //将usermodel暴露出供dao使用
//console.log(usermodel);
//console.log(model("student", stuschema))

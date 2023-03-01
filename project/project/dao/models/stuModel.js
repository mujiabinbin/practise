const {
	Schema,
	model
} = require("mongoose");
const moment = require(`moment`);
const stuschema = new Schema({
	username: String,
	userage: String,
	usergender: String,
	picname: String,
	time: {
		type: String, //也可用Date属性，但mongo Date类型不是我们想要的效果
		//default: `2023-09-18 11:00` //如果前端未传数据，就是用这个
		default: moment().format(`YYYY-MM-DD HH:mm`) //或YYYY年MM月DD日
	},
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

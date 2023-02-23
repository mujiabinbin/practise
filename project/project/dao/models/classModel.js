const {
	Schema,
	model
} = require("mongoose");
const claschema = new Schema({
	classname: String
})
module.exports = {
	clamodel: model("clamodel", claschema)
}

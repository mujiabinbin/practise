const {
	Schema,
	model
} = require("mongoose");
const claschema = new Schema({
	classname: String,
	teaid: [{
		type: Schema.Types.ObjectId,
		ref: `teamodel`
	}]
})
module.exports = {
	clamodel: model("clamodel", claschema)
}

const {
	Schema,
	model
} = require("mongoose");
const subschema = new Schema({
	subname: String,
	claid: [{
		type: Schema.Types.ObjectId,
		ref: `clamodel`
	}]
})
module.exports = {
	submodel: model("submodel", subschema)
}

const {
	Schema,
	model
} = require("mongoose");
const subschema = new Schema({
	subname: String,
	claname: [{
		type: Schema.Types.String,
		ref: `clamodel`
	}]
})
module.exports = {
	submodel: model("submodel", subschema)
}

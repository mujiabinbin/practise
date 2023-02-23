const {
	Schema,
	model
} = require("mongoose");
const teaschema = new Schema({
	teachername: String
})
module.exports = {
	teamodel: model("teamodel", teaschema)
}

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDB');
mongoose.connection.on(`connected`,function(){
	console.log(`数据库连接成功`)
});
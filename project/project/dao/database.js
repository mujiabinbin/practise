var mongoose = require('mongoose');
function myDB(){
	mongoose.connect('mongodb://localhost/myDB');
	mongoose.connection.on(`connected`,function(){
		console.log(`mydb数据库连接成功`)
	});
}
myDB();



//暴露一个login函数返回一个对象供user.js调用
const {login3dao:login3, reg3, insert}=require(`../dao/usersDao`);//const {login}中login是此文件内的全局变量
module.exports.login2=async function(user){
	//module.exports.login中的login是暴露对象的一个属性
	const data=await login3(user);//调用第三层userDao暴露的login方法或函数并接收第三层传回的结果
	if(data.length>0){
		return {
			message:"login success",
			status:1
		}
		}else{
			return {
				message:"login failed",
				status:0
			}
	}
}
module.exports.reg2=async function(user){
	const data=await reg3(user);
	if(data.length>0){
		return {
			message:"register failed",
			status:0
		}
	}else{
		insert(user);
		return {
			message:"register success",
			status:1
		}
		
	}
}
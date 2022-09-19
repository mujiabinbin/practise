document.write("hello world2");
document.write("hello world3");
console.log("console输出的内容");
//alert("alert输出的内容");
//prompt(" 请输入您的卡号和密码");
document.write(prompt("请输入您的姓名"));
document.write("prompt(‘请输入您的姓名’)“);
//双引号嵌套双引号容易引起问题，可以双引号内单引号，或者单引号内双引号

/**
 * 传入两个数字，进行加法运算
 * @param {number} num1
 * @param {number} num2
 */
function add(num1,num2){
	return num1+num2
}

/* new Promise((resolve,reject)=>{
	setTimeout(()=>{
		console.log("1");
		resolve("hello");//不会执行，因为已经完成状态
	},0);//异步，任务队列，后执行
	console.log("2");//同步，先执行
	resolve("world");//同步，先执行，同时将promise变为完成
}).then((data)=>{//resolve执行后执行then
	console.log(data);
}) */

/* async function main(){
	const data=await Promise .resolve("hello");//await等待会阻碍后面的代码执行
	console.log(data);
	return data;
}
const data=main();
console.log(data); */
/* async function bar(){
	const num=100;
	return num;
}
const bardata=bar();
console.log(bardata);

function foo(){
	const num=100;
	return num;
}
const foodata=foo();
console.log(foodata); */

/* function foo(){
	const num=100;
	return num;
}

async function bar(){
	const data=await foo();
	console.log(data);
}
bar();
console.log(200); */

/* function foo(){
	const num=100;
	return num;
}
async function bar(){
	console.log(300);
	const data=await foo();
	console.log(data);
}
bar();
console.log(200); */

/* function foo(){
	console.log("1");
	return "2";
}
async function bar(){
	console.log("3");
	return Promise.resolve("4");
}
async function main(){
	console.log("5");
	const v1=await foo();//await 后面foo函数运行后赋值给v1前开始阻塞，main v1后面代码都暂缓执行
	console.log(v1);
	const v2=await bar()
	console.log(v2);
}
main();
console.log("6"); */

function foo(){
	console.log("1");
	return "2";
}
async function bar(){
	console.log("3");
	return Promise.resolve("4");
}
async function main(){
	console.log("5");
	const v1=await foo();//await 后面foo函数运行后赋值给v1前开始阻塞，main v1后面代码都暂缓执行
	console.log(v1);
	const v2=await bar()
	console.log(v2);
}
main();
var promise=new Promise((resolve)=>{
	console.log("7");
	resolve("8");
});
promise.then((val)=>console.log(val));//then是异步，接收resolve结果，进入任务队列，排在v1后面，v2前面
console.log("6");

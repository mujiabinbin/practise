/* $.ajax({
	url:"./nodejs01.js",
	success(msg){
		$.ajax(({
			url:"./nodejs01.js",
			data:{
				id:msg.id
			}
		}))
	}
}) */
/* new Promise(function(){
	
}) */
/* const p = new Promise((resolve, reject) => {
	$.ajax({
		url: "./nodejs01.js",
		success(msg) {
			resolve(msg);
		}
	})
	//异步代码
}) */

/* p.then(function(msg){
	$.ajax({
		url:"./nodejs01.js",
		data:{
			id:msg.id
		},
		success(msg){
			
		}
	})
},function(//reject参数){}) */


/* p.then(function(msg) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: "./nodejs01.js",
			data: {
				id: msg.id
			},
			success(msg) {

			}
		})
	})

}).then(function(msg) {

}) */
/* async function foo(){
	return 100;
}
const result= foo();
console.log(result); */
/* const p = new Promise((resolve, reject) => {
	$.ajax({
		url:"./nodejs01.js",
		success(msg){
			resolve({id:1});
		}
	})
	
})
function ajax2(msg){
	$.ajax({
			url: "./nodejs01.js",
			data: {
				id: msg.id
			},
			success(msg) {
	
			}
		})
}
async function foo() {
	const msg = await p;
	ajax2(msg);
	//console.log(msg);
}
foo(); */
/* new Promise(resolve=>{
	setTimeout(function(){
		console.log("1");
	},1000);
	resolve("2");
}).then(x=>{
	console.log(x);
}) */
/* const p=function(x,time){
	return new Promise(resolve=>{
		setTimeout(function(){
			resolve(x);
		},time);
		
	}) 
}
async function foo(){
	const p1=await p(1,1000);
	console.log(p1);
	const p2=await p(2,1000);
	console.log(p2);
	const p3=await p(3,1000);
	console.log(p3);
	
}
foo(); */
/* new Promise(resolve=>{
	var num=1;
	setInterval(function(){
		num+=1;
		resolve(num)
	},1000)
}).then(num=>{
	console.log(num);
}) */
/* function foo(num){
	return new Promise(resolve=>{
		console.log(num);
		resolve(num);
	})
}
async function bar(){
	const p1=await foo(1);
	const p2=await foo(2);
	const p3=await foo(3);
	
}
bar();
console.log(4); */



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
const p = new Promise((resolve, reject) => {
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
foo();

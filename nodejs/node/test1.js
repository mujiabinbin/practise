/* const stu={
	name:"zhangsan",
	age:20,
	gender:"male"
};
//解构赋值
const{name:a,gender:b,age:c}=stu;
console.log(a,b,c); */
/* const stu={
	name:"zhangsan",
	age:20,
	gender:"male"
};
const stu1=stu;
const stu2={...stu};
console.log(stu==stu1);
console.log(stu==stu2); */
/* const stu={
	name:"zhangsan",
	age:20,
	gender:"male"
};
const stu1={
	...stu,
	age:30
}
console.log(stu1); */
/* const stu={
	name:"zhangsan",
	age:20,
	gender:"male"
};
//es6简写，当属性名与属性值一致时，可以简写
const {name,age,gender}=stu;
console.log(name,age,gender); */
//es6简写，对象是方法时，可以省略“：”和“function“
/* const stu={
	name:"zhangsan",
	age:20,
	gender:"male",
	sayhello(){
		console.log("hello");
	}
};
const p=stu.sayhello();
console.log(p,stu); */

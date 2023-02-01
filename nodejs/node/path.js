const path= require("path");
const mypath="/Users/mujiabin/Documents/HBuilderProjects/practise/nodejs/node/a.js"
//console.log(__dirname);//当前文件的绝对路径

//path 获取
//1.basename()获取指定路径最后一部分
//console.log(path.basename(__dirname));

//2.dirname()获取除了basename以外的其他路径
//console.log(path.dirname(__dirname));

//3.extname()扩展名
//console.log(path.extname(__dirname));


//path组合
//4.join() 相对路径拼接
//console.log(path.join("a","b","c"));// a/b/c
//console.log(path.join("a","b","..","c"));// a/c

//5.resolve() 绝对路径拼接
//console.log(path.resolve("a","b","c"));
//console.log(path.resolve("a","b","..","c"));

//path拆分
//parse()得到一个对象，使用时可以通过对象属性方法调用
console.log(path.parse(mypath));
console.log(path.parse(mypath).base);
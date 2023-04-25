class Vue{
    constructor(options){
        this.$el=options.el;
        this.$data=options.data()
        this.proxy()
        new Observer(this.$data)
        new Compiler(this.$el,this.$data)
    }
    proxy(){
        //将$data的属性值拿到并在this下新增这些属性及属性值
        //Object.keys返回参数包含的属性然后合并成一个数组
        Object.keys(this.$data).forEach(key => {
            Object.defineProperty(this,key,{
                get(){
                    return this.$data[key]
                },
                set(val){       
                    this.$data[key]=val
                }
            })
        });
    }
}

class Observer{
    constructor(data){
        //接收vue实例传的data并赋值给自己的$data
        this.$data=data
        this.walk()
    }
    walk(){
        // 循环this.$data下所有属性，并传给defineReactive
        for(let key in this.$data){
            this.defineReactive(this.$data,key)
        }
    }
    defineReactive(data,key,value=data[key]){  
        const dep= new Dep();
        Object.defineProperty(data,key,{
            get(){
                if(Dep.target){
                    dep.addsubs(Dep.target)
                }
                //外部使用name属性，在此被劫持，判断是否通过
                return value//此处不能直接使用data.name，因为会造成死循环
            },
            set(val){
                //外部修改name属性的值，在此被劫持，判断是否通过，val参数是修改的最新的值
                value=val;
                dep.notify();
            }
        })
    }
}
class Compiler{
    constructor(el,data){
        //获取vue实例挂在目标节点
        this.$el=document.querySelector(el);
        this.$data=data
        this.compile()
    }
    compile(){
        //firstElementChild第一个元素节点，不加Element可能找到是文本节点
        const node= this.$el
        //判断文本内容是否包含{{}}
        if(/{{[a-zA-Z]+}}/.test(node.innerText)){
           const key= node.innerText.slice(2,-2);
          
           const render=() => {
            //此处需要箭头函数，否则this指向有问题
            node.innerText=this.$data[key]
           }
           new Watcher(render)
        }
    }
}

//每条数据和每个节点关系，如果一条数据被十个节点使用，会产生是个对应watcher
class Watcher{
    constructor(render){
        this.render=render;
        Dep.target=this;//将watcher对象等同于保存到全局
        //首次渲染数据,在首次渲染数据时会获取数据，触发对应的get方法
        this.update();
        Dep.target=null
    }
    update() {
     this.render()   
    }
}

//订阅者，每一个数据都有一个dep，每个dep管理每个数据对应的所有watcher
class Dep{
    constructor(){
        this.subs=[];//保存当前dep负责的所有watcher
    }
    addsubs(watcher){
        this.subs.push(watcher)
    }
    notify(){
        //当前dep负责的数据发生变化，dep会通知所有的watcher去更新页面，即updata方法
        this.subs.forEach(watcher => {
            watcher.update()
        });
    }
}
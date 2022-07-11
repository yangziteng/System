//类的使用 创造以快私有变量

class Foo{
    constructor(a,b){
        this.a = a
        this.b = b
    }
    print(){
        console.log("a+b=",this.a+this.b)
    }
    change(){
        this.a = this.a + 1
    }
}
let foo = new Foo(1,2)
let b = new Foo(2,3)
foo.print()
foo.change()
foo.print()
foo.change()
foo.print()
console.log(b.constructor === Foo.prototype.constructor) // true
let method = "getAtt"
//类表达式 
let sqq = class squ{
    constructor(x){
        this.x = x
    }
    [method](){
        console.log("getAtt")
    }
}
let sq = new sqq(2)
sq.getAtt()
// let test = sq.getAtt()
// test() 这样会改变this指向

//立即执行函数类型的
let res = new class {
    constructor(x){
        this.x = x
    }
    sayname(){
        console.log("你的名字是",this.x)
    }
}("hello")
res.sayname()
// 类的集成

//类里面私有变量有些要被公共调用有些要被私有调用会存在这个问题
// 解决方案 : 1.命名分
//           2.函数抽离到类外面 注意this指针 bar.call(this) 动态改变this指向
//           3.symbol看不懂
// 类不存在变量提升 当然正常也不会这样写



let sqqqqq = new sqq(2)
console.log(sqqqqq)
let test2 = [...new Set([1,2,2,3,3])]
console.log(test2)
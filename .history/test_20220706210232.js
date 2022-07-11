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
class squ{
    constructor(x){
        this.x = x
    }
    [method](){
        console.log("getAtt")
    }
}
let sq = new squ(2)
sq.getAtt*()
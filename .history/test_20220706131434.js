class Foo{
    constructor(a,b){
        this.a = a
        this.b = b
    }
    print(){
        console.log("a+b=",this.a+this.b)
    }
    change(){
        this.a = 2
    }
}
let foo = new Foo(1,2)
foo.print()
foo.change()
foo.print()
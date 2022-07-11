class Person{
    constructor(name){
        this.name = name 
    }
    sayhello(){
        console.log("hello "+this.name)
    }
}
class Teacher extends Person {
    constructor(name,subject){
        //调用父类
        super(name) //相当于把父类
        this.subject = subject

    }
    getIntroduce() {
        console.log(`我是${this.name}. 我教${this.subject}.`);
    }
}
let teacher1 = new Teacher("杨老师","英语")
teacher1.getIntroduce()
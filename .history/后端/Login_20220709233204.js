const e = require("express")
const express = require("express")
const app = express()
const mysql = require("mysql")
let conn = mysql.createConnection({
    host:"localhost",
    port:3306,
    database:"management",
    user:"root",
    password:"root"
})
conn.connect(function(err){
    if(err) console.log("连接失败")
    else{
        console.log("连接成功")
    }
})

//cors解决跨域
var allowCrossDomain = function(req , res ,next){
    //请求源 ajax
    res.header("Access-Control-Allow-Origin","*")
    //请求头 x-token
    res.header("Access-Control-Allow-Headers","*")
    //允许请求的方法
    res.header("Access-Control-Allow-Methods","*")
    next()
}
app.use(allowCrossDomain)
//浏览器同源策略必须保证端口号一致
app.listen(8080,()=>{
    console.log("http://localhost:8080/")
})
app.post("/Login",(req,res)=>{
    console.log(res)  
    console.log("成功")
    res.send("hello")
})

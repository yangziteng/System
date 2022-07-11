
const express = require("express")
const app = express()
var bodyParser = require('body-parser')
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
// let addsql = 'INSERT INTO user(id,username,pwd) VALUES(?,?,?)'
// var addSqlParams = [1, '20014260415', "1620842362"];
// conn.query(addsql,addSqlParams,function(req,err){
//     if(!err){
//         console.log(req)
//     }
// })
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
app.use(express.static("./"))
app.use(allowCrossDomain)
// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//浏览器同源策略必须保证端口号一致
app.listen(8080,()=>{
    console.log("http://localhost:8080/")
})
app.post("/Login",(req,res)=>{
    console.log(req.body)  
    console.log("成功")
    res.send("hello")
})

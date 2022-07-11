
const express = require("express")
const app = new express()
const router = require("./router")
const mysql = require("mysql")
const mysql_connect = require("../utils/mysqlConnect")
//抽象成类 数据库要经常被调用
let connect = new mysql_connect()
// let conn = mysql.createConnection({
//     host:"localhost",
//     port:3306,
//     database:"management",
//     user:"root",
//     password:"root"
// })
// conn.connect(function(err){
//     if(err) console.log("连接失败")
//     else{
//         console.log("连接成功")
//     }
// })
// let addsql = 'INSERT INTO user(id,username,pwd) VALUES(?,?,?)'
// var addSqlParams = [1, '20014260415', "1620842362"];
// conn.query(addsql,addSqlParams,function(req,err){
//     if(!err){
//         console.log(req)
//     }
// })

app.use(router)
app.listen(8080,()=>{
    console.log("http://localhost:8080/")
})

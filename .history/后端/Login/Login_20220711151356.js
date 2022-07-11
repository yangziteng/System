
const express = require("express")
const app = new express()
const router = require("./router")
const mysql = require("mysql")

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

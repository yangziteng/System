const express = require("express")
const app = express()
//浏览器同源策略必须保证端口号一致
app.listen(8080,()=>{
    console.log("http://localhost:8080/Login")
})
app.post("/Login",(req,res)=>{
    console.log(req.query)  
    console.log("成功")
})

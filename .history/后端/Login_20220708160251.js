const express = require("express")
const app = express()
//浏览器同源策略必须保证端口号一致
app.listen(3000,()=>{
    console.log("http://127.0.0.1")
})
app.post("/",(req,res)=>{
    console.log(req.query)  
    console.log("成功")
})

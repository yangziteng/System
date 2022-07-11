const express = require("express")
const app = express()
app.listen(3000,()=>{
    console.log("http://127.0.0.1")
})
app.post("/",(req,res)=>{
    console.log(req.query)  
    console.log("成功")
})

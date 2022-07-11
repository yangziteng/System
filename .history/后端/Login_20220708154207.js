const express = require("express")
const app = express()
app.listen(3000,()=>{
    console.log("ssssss")
})
app.post("/",(req,res)=>{
    console.log(req.query)  
 
})

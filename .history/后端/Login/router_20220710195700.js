const express = require("express")
const router = express.Router()
var allowCrossDomain = function(req , res ,next){
    //请求源 ajax
    res.header("Access-Control-Allow-Origin","*")
    //请求头 x-token
    res.header("Access-Control-Allow-Headers","*")
    //允许请求的方法
    res.header("Access-Control-Allow-Methods","*")
    next()
}
router.use(express.static("./"))
router.use(allowCrossDomain)
// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
router.use(express.json())
router.use(express.urlencoded({ extended: false }))
//创建的第一个服务
router.post("/Login",(req,res)=>{
    console.log(req.body)  
    console.log("成功")
    res.send("y")
})
module.exports = router
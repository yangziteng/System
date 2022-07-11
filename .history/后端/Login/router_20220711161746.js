const express = require("express")
const router = express.Router()
const mysql_connect = require("../utils/mysqlConnect")
const getData = require("../utils/getData")
//抽象成类 数据库要经常被调用
const connect = new mysql_connect()

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
router.post("/Login",async (req,res)=>{
    console.log(req.body)  
    console.log("成功")
    let { username , pwd } = req.body
    console.log(username , pwd)
    var  getdata = new getData(username,pwd)
    const result =  await getdata.req("login") 
    if(result.msg = "/login!welcome.action"){
        console.log("欢迎，开始数据库操作")
        connect.connect()
        connect.add(username,pwd) //数据库操作
    }
    res.send(JSON.stringify(result))
})
module.exports = router
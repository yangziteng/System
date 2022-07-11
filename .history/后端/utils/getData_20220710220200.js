const request = require("request")
class getData{
    constructor(username,pwd){
        this.username = username,
        this.pwd = pwd
    }
    req = async (type)=>{
         //多层嵌套this指针会有问题所以可以用that去保存this
         var that = this 
        if(type = "login"){
            request({
                url:"https://jwxt.gdupt.edu.cn/",
                method:"POST",
            },function(err,response,body){
                if(!err&&response.statusCode==200){
                    //拿到cookie
                    let cookie = response.headers['set-cookie'][0]
                    let Tcookie = cookie[0].split(';');
                    console.log(that.username)
                    console.log(1111111111111)
                    request({
                        url:"https://jwxt.gdupt.edu.cn/login!doLogin.action",
                        method:"POST",
                        formData:{
                               "account":that.username,
                               "pwd":that.pwd,
                               "verifycode":""
                         },
            
                        headers:{
                            "Cookie":Tcookie[0],
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
                        },
                        
                    },function(e,req,body){
                        console.log(22222222222222222)
                        console.log(req.statusCode)
                        if(!e&&req.statusCode==200) {
                            console.log(JSON.parse(req.body))
                            return  JSON.parse(req.body)
                            // if(JSON.parse(req.body).msg=="/login!welcome.action"){
                            //     console.log(333)
                            // }
                            // else{
                            //     return JSON.parse(req.body).msg
                            // }
                        }
                        else{
                            return {
                                msg:"服务器出错",
                                status:"o"
                            }
                        }
                    })
            
                }
                else{
                    return {
                        msg:"服务器出错",
                        status:"o"
                    }
                }
            })
        }
    }
}
module.exports = getData
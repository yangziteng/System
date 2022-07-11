const request = require("request")
request({
    url:"https://jwxt.gdupt.edu.cn/",
    method:"POST",
    // headers: {//设置请求头
    //     "content-type": "application/json",
    // },
},function(err,response,body){
    if(!err){
        //拿到cookie
        console.log(response.headers['set-cookie'][0])
        request({
            url:"https://jwxt.gdupt.edu.cn/login!doLogin.action",
            method:"POST",
            data:{
                   "account":"20014260415",
                   "pwd":"MTYyMDg0MjM2Mg==",
                   "verifycode":""
             },
s
            
        },function(e,req,body){
            console.log(req.statusCode )
        })
    }
    else{
        console.log(err)
    }
})
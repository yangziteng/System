const request = require("request")

request({
    url:"https://jwxt.gdupt.edu.cn/",
    method:"POST",
    // headers: {//设置请求头
    //     "content-type": "application/json",
    // },
},function(err,response,body){
    if(!err&&response.statusCode==200){
        //拿到cookie
        let cookie = response.headers['set-cookie'][0]
        let Tcookie = cookie[0].split(';');
        request({
            url:"https://jwxt.gdupt.edu.cn/login!doLogin.action",
            method:"POST",
            formData:{
                   "account":2001426045,
                   "pwd":"MTYyMDg0MjM2Mg==",
                   "verifycode":""
             },

            headers:{
                "Cookie":Tcookie[0],
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
            },
            
        },function(e,req,body){
            console.log(req.statusCode)
            if(!e&&req.statusCode==200) {
                console.log(JSON.parse(req.body))
                if(JSON.parse(req.body).msg=="/login!welcome.action"){
                    console.log(333)
                }
                else{
                    console.log(JSON.parse(req.body))
                }
            }
        })

    }
    else{
        console.log(333333)
    }
})
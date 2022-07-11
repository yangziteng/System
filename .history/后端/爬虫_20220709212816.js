const request = require("request")
request({
    url:"https://jwxt.gdupt.edu.cn/",
    method:"POST",
    // headers: {//设置请求头
    //     "content-type": "application/json",
    // },
},function(err,response,body){
    if(!err){
        console.log(response.headers['set-cookie'][0])
    }
    else{
        console.log(err)
    }
})
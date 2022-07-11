const request = require("request")
request({
    url:"https://jwxt.gdupt.edu.cn/",
    method:"GET",
    // headers: {//设置请求头
    //     "content-type": "application/json",
    // },
},function(err,response,body){
    if(!err){
        console.log(body)
    }
    else{
        console.log(err)
    }
})
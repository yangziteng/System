const request = require("request")
const axios = require("axios")

// axios({
//     url:"https://jwxt.gdupt.edu.cn/",
//     method:"POST",
// }).then(res=>{
//     console.log(res.headers['set-cookie'])
//     const cookie = res.headers['set-cookie'][0]
//     //进入登录
//     axios({
//         url:"https://jwxt.gdupt.edu.cn/login!doLogin.action",
//         method:"POST",
//         header: {
//             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//             'Accept': 'application/json, text/javascript, */*; q=0.01',
//             "Cookie":cookie
//         },
//     }).then(res=>{
//         console.log(res)
//     })
// })

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
            data:{
                   "account":"20014260415",
                   "pwd":"MTYyMDg0MjM2Mg==",
                   "verifycode":""
             },

            headers:{
                "Cookie":Tcookie[0],
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
            },
            
        },function(e,req,body){
            console.log(req.statusCode)
            if(!e&&req.statusCode==200) console.log(22)
        })
    }
    else{
        console.log(err)
    }
})
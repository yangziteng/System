const request = require("request")
const axios = require("axios")

axios({
    url:"https://jwxt.gdupt.edu.cn/",
    method:"POST",
}).then(res=>{
    console.log(res.headers['set-cookie'])
})

// request({
//     url:"https://jwxt.gdupt.edu.cn/",
//     method:"POST",
//     // headers: {//设置请求头
//     //     "content-type": "application/json",
//     // },
// },function(err,response,body){
//     if(!err&&response.statusCode==200){
//         //拿到cookie
//         console.log(response.headers['set-cookie'][0])
//         request({
//             url:"https://jwxt.gdupt.edu.cn/login!doLogin.action",
//             method:"POST",
//             data:{
//                    "account":"20014260415",
//                    "pwd":"MTYyMDg0MjM2Mg==",
//                    "verifycode":""
//              },

//             headers:{
//                 // "Cookie":response.headers['set-cookie'][0],
//                 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//                 'Accept': 'application/json, text/javascript, */*; q=0.01',
//             },
            
//         },function(e,req,body){
//             if(!e&&req.statusCode==200)
//             console.log(req.data)
//         })
//     }
//     else{
//         console.log(err)
//     }
// })
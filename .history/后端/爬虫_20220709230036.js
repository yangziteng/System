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
            formData:{
                   "account":20014260415,
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
                console.log(JSON.parse(req.body).status)
                if(JSON.parse(req.body).status=="y"){
                    console.log(333)
                    let opts = {
                        url: 'https://jwxt.gdupt.edu.cn/xskccjxx!getDataList.action',
                        method:"POST",
                        data:{
                            'xnxqdm': '',
                            'page': '1',
                            'rows': '500',
                            'sort': 'xnxqdm,kcbh,ksxzdm',
                            'order': 'asc',
                        },
                        headers: {
                            'Cookie': Tcookie[0],
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
                        }
                    }
                    request(opts, (e, r, b) => {
                        console.log(r.statusCode);
                    })
                }
              
            }
        })

    }
    else{
        console.log(333333)
    }
})
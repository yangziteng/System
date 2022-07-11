const http = require('http');
const https = require('https');
// const express = require('express');
const request = require('request');



let data = {
    account: 20034480214,
    pwd: 'OTYwMzgy',
    verifycode: ''
}
let options = {
    hostname: 'jwxt.gdupt.edu.cn',
    path: '/login!doLogin.action',
    method: 'POST',
    formData: data,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
    }
}
let req = https.request(options, res => {
    res.setEncoding('utf8')
    let cookie = res.headers['set-cookie'];
    let Tcookie = cookie[0].split(';');
    console.log(Tcookie[0]);
    let option = {
        url: 'https://jwxt.gdupt.edu.cn/login!doLogin.action',
        method: 'POST',
        formData: data,
        headers: {
            'cookie': Tcookie[0],
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
        }
    }
    request(option, (err, red2, body) => {
        console.log(red2.statusCode);
        console.log(red2)
        let opts = {
            url: 'https://jwxt.gdupt.edu.cn/xsgrkbcx!getKbRq.action?xnxqdm=202102&zc=8',
            headers: {
                'cookie': Tcookie[0],
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }
        }
        request(opts, (e, r, b) => {
            console.log(r.statusCode);
        })
    })
})


req.end();
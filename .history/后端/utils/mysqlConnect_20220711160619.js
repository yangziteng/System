var crypto = require('crypto');  //加载crypto库
const mysql = require("mysql")

class mysql_connect {
    constructor() {
        let conn = mysql.createConnection({
            host: "localhost",
            port: 3306,
            database: "management",
            user: "root",
            password: "root"
        })
        conn.connect(function (err) {
            if (err) console.log("连接失败")
            else {
                console.log("连接成功")
            }
        })
    }
    add(username,pwd) {
        console.log(username,pwd)
        const  id = crypto.createHash(username);//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
        var addSql = "INSERT INTO user(id,username,pwd)VALUES(?,?,?)";
        conn.query(addSql, [id,username, pwd], (err, result) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log(result);
                console.log('插入成功');
            }
        })

        //关闭数据库连接
        conn.end((err) => {
            if (err) throw err;
            console.log("关闭成功");
        })

    }
}
//类暴露接口
module.exports =  mysql_connect
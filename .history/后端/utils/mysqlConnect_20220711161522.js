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
        var addSql = "INSERT INTO user(id,username,pwd)VALUES(1,?,?)";
        this.conn.query(addSql, [id,username, pwd], (err, result) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log(result);
                console.log('插入成功');
            }
        })

        //关闭数据库连接
        this.conn.end((err) => {
            if (err) throw err;
            console.log("关闭成功");
        })

    }
}
//类暴露接口
module.exports =  mysql_connect
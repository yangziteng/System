class mysql_connect{
    constructor(){
        let conn = mysql.createConnection({
            host:"localhost",
            port:3306,
            database:"management",
            user:"root",
            password:"root"
        })
        conn.connect(function(err){
            if(err) console.log("连接失败")
            else{
                console.log("连接成功")
            }
        })
    }
   
}
//类暴露接口
module.exports = mysql_connect
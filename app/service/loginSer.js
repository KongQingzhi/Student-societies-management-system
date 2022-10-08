const Service = require('egg').Service;

class LoginSer extends Service {
    //登录验证
    //接收控制层传来的数据
    async login(num, pwd, surface) {
        try {
            //sql语句
            const sql = `select * from ${surface} where num=${num} and pwd=${pwd}`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器登录出现异常' + error);
        }
    }

    //注册账号
    async register(name, num, pwd, tel, clazz) {
        try {
            //sql语句
            const sql = 'insert into t_merber(name, num, pwd, tel, clazz,R_id) value(?,?,?,?,?,1)';
            // 使用数据库
            const res = await this.ctx.app.mysql.query(sql, [name, num, pwd, tel, clazz]);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器注册出现异常' + error);
            console.log('账号存在');
        }
    }
}

module.exports = LoginSer;
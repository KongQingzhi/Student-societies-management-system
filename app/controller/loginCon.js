//导入egg框架中的Controller类
const Controller = require('egg').Controller;

//定义一个类并继承Controller
class LoginCon extends Controller {
    //这里自定义一个方法，无论是何get还是post都可以接收参数
    //参数处理
    getParam(key) {
        if (this.ctx.request.method == 'GET') {
            return this.ctx.request.query[key];
        } else if (this.ctx.request.method == 'POST') {
            return this.ctx.request.body[key];
        }
    }

    //登录控制
    //获取前端的数据，将数据传给服务端，并将服务端返回的值返回到前端
    //同时将登录数据的no进行保存session，作为判断登录的标志
    async login() {
        //接收前端的传来的三个参数
        const num = this.getParam('num');
        const pwd = this.getParam('pwd');
        const flag = this.getParam('flag');

        //定义一个变量来存储数据表
        //使用flag进行判断登录方式，管理员还是用户
        //如果是管理员登录，则进行验证的数据表为t_manager，否则为t_merber
        let surface = flag === 'true' ? 't_manager' : 't_merber';
        //向服务器进行验证
        try {
            // 链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.loginSer.login(num, pwd, surface);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list[0];
        } catch (error) {
            console.log('控制器登录出现异常' + error);
        }
    }

    //注册控制
    //获取前端的数据，将数据传给服务端，并将服务端返回的值返回到前端
    async register() {
        const name = this.getParam('name');
        const num = this.getParam('num');
        const pwd = this.getParam('pwd');
        const tel = this.getParam('tel');
        const clazz = this.getParam('clazz');
        try {
            // 链接服务器
            const list = await this.ctx.service.loginSer.register(name, num, pwd, tel, clazz);
            this.ctx.response.body = list.affectedRows;
            console.log('注册成功！');
        } catch (error) {
            console.log('控制器注册出现异常' + error);
        }
    }
    
}

module.exports = LoginCon;
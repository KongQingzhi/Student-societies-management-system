//导入egg框架中的Controller类
const Controller = require('egg').Controller;

//定义一个类并继承Controller
class indexCon extends Controller {
    getParam(key) {
        if (this.ctx.request.method == 'GET') {
            return this.ctx.request.query[key];
        } else if (this.ctx.request.method == 'POST') {
            return this.ctx.request.body[key];
        }
    }
    //3.1.1显示社团信息
    async community() {
        try {
            // 链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.community();
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器查询社团出现异常' + error);
        }
    }

    //3.1.2添加社团信息
    async addCommunity() {
        //获取前端数据
        const name = this.getParam('name');
        const introduce = this.getParam('introduce');
        const people = this.getParam('people');
        const tel = this.getParam('tel');
        const qq = this.getParam('qq');
        const clazz = this.getParam('clazz');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.addCommunity(name, introduce, people, tel, qq, clazz);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器添加社团出现异常' + error);
        }
    }

    //3.1.3删除社团信息
    async delCommunity() {
        //获取前端数据
        const id = this.getParam('id');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.delCommunity(id);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器删除社团出现异常' + error);
        }
    }

    //3.1.4查看社团成员
    async showComPeo() {
        //获取前端数据
        const id = this.getParam('id');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.showComPeo(id);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器查询社团成员出现异常' + error);
        }
    }


    //3.2.1查看用户
    async showUser() {
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.showUser();
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器查询用户出现异常' + error);
        }
    }

    //3.2.2删除用户
    async delUser() {
        const num = this.getParam('num');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.delUser(num);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器查询用户出现异常' + error);
        }
    }

    //3.2.3查找用户
    async searchUser() {
        const name = this.getParam('name');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.searchUser(name);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器查找用户出现异常' + error);
        }
    }

    //3.3.1查看活动信息
    async showActive() {
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.showActive();
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器查看活动出现异常' + error);
        }
    }

    //3.3.2删除活动信息
    async delActive() {
        const id = this.getParam('id');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.delActive(id);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器删除活动出现异常' + error);
        }
    }

    //3.4.1显示待审核活动
    async revActive() {
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.revActive();
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器审核活动出现异常' + error);
        }
    }

    //3.4.2通过活动
    async passActive() {
        const id = this.getParam('id');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.passActive(id);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器通过活动出现异常' + error);
        }
    }

    //3.4.3驳回活动
    async rejActive() {
        const id = this.getParam('id');
        const str = this.getParam('str');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.rejActive(id, str);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器驳回活动出现异常' + error);
        }
    }

    // 4.1.1显示未加入的活动
    async displayUnpreparedActivity() {
        const num = this.getParam('userNum');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.displayUnpreparedActivity(num);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器加入活动出现异常' + error);
        }
    }

    //4.1.2加入活动
    async joinTheEvent() {
        const id = this.getParam('id');
        const num = this.getParam('userNum');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.joinTheEvent(id, num);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器加入活动出现异常' + error);
        }
    }

    //4.2.1显示未加入的社团
    async unbliedCommunity() {
        const num = this.getParam('userNum');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.unbliedCommunity(num);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器加入活动出现异常' + error);
        }
    }


    //4.2.2加入社团
    async joinCommunity() {
        const id = this.getParam('id');
        const num = this.getParam('userNum');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.joinCommunity(id, num);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器加入社团出现异常' + error);
        }
    }

    //4.3.1 显示已加入的活动
    async showMyActive() {
        const num = this.getParam('userNum');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.showMyActive(num);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器已加入活动出现异常' + error);
        }
    }

    //4.3.2退出活动
    async exitActivities() {
        const id = this.getParam('id');
        const num = this.getParam('userNum');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.exitActivities(id, num);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器删除活动出现异常' + error);
        }
    }

    //4.4.1我的社团
    async myCommunitis() {
        const num = this.getParam('userNum');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.myCommunitis(num);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器已加入活动出现异常' + error);
        }
    }

    //4.4.2退出社团
    async exitCommunitis() {
        const id = this.getParam('id');
        const num = this.getParam('userNum');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.exitCommunitis(id, num);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器删除活动出现异常' + error);
        }
    }

    //5.1申请活动
    async applicationActivity() {
        const eventName = this.getParam('eventname');
        const organizer = this.getParam('organize');
        const organizered = this.getParam('organized');
        const activityTime = this.getParam('activitytime');
        const userName = this.getParam('userName');
        const usertel = this.getParam('userTel');
        const eventLocation = this.getParam('eventlocation');
        const eventExpense = this.getParam('eventexpense');
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.applicationActivity(eventName, organizer, organizered, activityTime, userName, usertel, eventLocation, eventExpense);
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器申请活动出现异常' + error);
        }
    }

    //查看活动
    async applicationActivity1() {
        try {
            //链接服务器,使用list接收服务器的返回值
            const list = await this.ctx.service.indexSer.applicationActivity1();
            // 将返回值的内容进行提取，并返回给前端
            this.ctx.response.body = list;
        } catch (error) {
            console.log('控制器显示活动出现异常' + error);
        }
    }
}

module.exports = indexCon;
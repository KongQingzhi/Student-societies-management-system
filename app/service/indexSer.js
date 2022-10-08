const Service = require('egg').Service;

class indexSer extends Service {
    //显示社团信息
    async community() {
        try {
            //sql语句
            const sql = `select * from t_community`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器查询社团出现异常' + error);
        }
    }

    //添加社团信息
    async addCommunity(name, introduce, people, tel, qq, clazz) {
        try {
            //sql语句
            const sql = `insert into t_community(R_id,C_name,C_people,C_class,C_tel,C_qq,C_introduce) value(2,'${name}','${people}','${clazz}','${tel}','${qq}','${introduce}') `;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器添加社团出现异常' + error);
        }
    }

    //删除社团信息
    async delCommunity(id) {
        try {
            //sql语句
            const sql = `delete from t_community where C_id=${id}`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器删除社团出现异常' + error);
        }
    }

    //查看社团成员
    async showComPeo(id) {
        try {
            //sql语句
            const sql = `select * from t_merber where C_id=${id}`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器查询社团成员出现异常' + error);
        }
    }

    //查看用户
    async showUser() {
        try {
            //sql语句
            const sql = `select t_merber.num,t_merber.pwd,t_merber.name,t_merber.tel,t_merber.clazz,t_community.C_name from t_merber  left join t_community on t_merber.C_id=t_community.C_id order by t_merber.C_id;`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器查询用户出现异常' + error);
        }
    }


    //删除用户
    async delUser(num) {
        try {
            //sql语句
            const sql = `delete from t_merber where num=${num}`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器删除出现异常' + error);
        }
    }

    //查找用户
    async searchUser(name) {
        try {
            //sql语句
            const sql = `select * from t_merber where name='${name}'`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器查找用户出现异常' + error);
        }
    }

    //查看活动
    async showActive() {
        try {
            //sql语句
            const sql = `select * from t_activity`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器查看活动出现异常' + error);
        }
    }

    //删除活动
    async delActive(id) {
        try {
            //sql语句
            const sql = `delete from t_activity where AC_id=${id}`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器删除活动出现异常' + error);
        }
    }

    //审核活动
    async revActive() {
        try {
            //sql语句
            const sql = `select * from t_activity where AC_state=3`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器审核活动出现异常' + error);
        }
    }

    //通过活动
    async passActive(id) {
        try {
            //sql语句
            const sql = `update t_activity set AC_state=1,AC_remark='已通过' where AC_id=${id}`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器通过活动出现异常' + error);
        }
    }
    //驳回活动
    async rejActive(id, str) {
        try {
            //sql语句
            const sql = `update t_activity set AC_state=0, AC_remark = '${str}' where AC_id=${id}`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器驳回活动出现异常' + error);
        }
    }

    //显示未加入的活动
    async displayUnpreparedActivity(num) {
        try {
            //sql语句
            const sql = `select t_activity.AC_id,t_activity.AC_theme,t_activity.AC_organize,t_activity.AC_undertaker,t_activity.AC_time,t_activity.AC_location from t_activity  inner join t_am where t_activity.AC_id not in (select AC_id from t_am where num = '${num}') and t_activity.AC_state=1 group by t_activity.AC_id;`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器加入活动出现异常' + error);
        }
    }

    //加入活动
    async joinTheEvent(id, num) {
        try {
            //sql语句
            const sql = `insert into t_am(AC_id,num) value(${id},'${num}')`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器加入活动出现异常' + error);
        }
    }

    //未加入的社团
    async unbliedCommunity(num) {
        try {
            //sql语句
            const sql = `select t_community.C_id,t_community.C_name,t_community.C_introduce,t_community.C_people,t_community.C_tel from t_community  inner join t_am where t_community.C_id not in (select C_id from t_cm where num = '${num}') group by t_community.C_id;`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器加入活动出现异常' + error);
        }
    }

    //加入社团
    async joinCommunity(id, num) {
        try {
            //sql语句
            const sql1 = `insert into t_cm(C_id,num) value(${id},'${num}')`;
            const sql2 = `update t_merber set C_id =${id} where num = ${num}`;
            // 访问数据库
            const res1 = await this.ctx.app.mysql.query(sql1);
            const res2 = await this.ctx.app.mysql.query(sql2);
            //将数据返回给控制器
            return { ...res1, ...res2 };
        }
        catch (error) {
            console.log('服务器加入活动出现异常' + error);
        }
    }


    //我的活动
    async showMyActive(num) {
        try {
            //sql语句
            const sql = `select t_activity.AC_id,t_activity.AC_theme,t_activity.AC_organize,t_activity.AC_undertaker,t_activity.AC_time,t_activity.AC_location from t_activity  inner join t_am where t_activity.AC_id in (select AC_id from t_am where num = '${num}') and t_activity.AC_state=1 group by t_activity.AC_id;`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器我的活动出现异常' + error);
        }
    }

    //退出活动
    async exitActivities(id, num) {
        try {
            //sql语句
            const sql = `delete from t_am where AC_id=${id} and num = '${num}'`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器删除我的活动出现异常' + error);
        }
    }

    //我的社团
    async myCommunitis(num) {
        try {
            //sql语句
            const sql = `select t_community.C_id,t_community.C_name,t_community.C_introduce,t_community.C_people,t_community.C_tel from t_community  inner join t_am where t_community.C_id in (select C_id from t_cm where num = '${num}') group by t_community.C_id;`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器我的活动出现异常' + error);
        }
    }

    //退出社团
    async exitCommunitis(id, num) {
        try {
            //sql语句
            const sql = `delete from t_cm where C_id=${id} and num = '${num}'`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器删除我的活动出现异常' + error);
        }
    }

    //申请活动
    async applicationActivity(eventName, organizer, organizered, activityTime, userName, usertel, eventLocation, eventExpense) {
        try {
            //sql语句
            const sql = `insert into t_activity(AC_theme,AC_organize,AC_undertaker,AC_people,AC_tel,AC_time,AC_location,AC_money,AC_remark,AC_state) value('${eventName}','${organizer}','${organizered}','${userName}','${usertel}','${activityTime}','${eventLocation}',${eventExpense},'未审核',3)`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器申请活动出现异常' + error);
        }
    }

    //显示活动
    async applicationActivity1() {
        try {
            //sql语句
            const sql = `select * from t_activity`;
            // 访问数据库
            const res = await this.ctx.app.mysql.query(sql);
            //将数据返回给控制器
            return res;
        }
        catch (error) {
            console.log('服务器查看活动出现异常' + error);
        }
    }
}

module.exports = indexSer;
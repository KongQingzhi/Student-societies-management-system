//router.js
module.exports = (app) => {
    const { router, controller } = app;

    //配置登录的路由
    //登录
    router.get('/login', controller.loginCon.login);
    //注册
    router.get('/register', controller.loginCon.register);
    //显示社团信息
    router.get('/community', controller.indexCon.community);
    //添加社团信息
    router.get('/addCommunity', controller.indexCon.addCommunity);
    //删除社团信息
    router.get('/delCommunity', controller.indexCon.delCommunity);
    //查看社团成员
    router.get('/showComPeo', controller.indexCon.showComPeo);
    //查看用户信息
    router.get('/showUser', controller.indexCon.showUser);
    //删除用户
    router.get('/delUser', controller.indexCon.delUser);
    //查找用户
    router.get('/searchUser', controller.indexCon.searchUser);
    //查看活动信息
    router.get('/showActive', controller.indexCon.showActive);
    //删除活动信息
    router.get('/delActive', controller.indexCon.delActive);
    //审核活动
    router.get('/revActive', controller.indexCon.revActive);
    //通过活动
    router.get('/passActive', controller.indexCon.passActive);
    //驳回活动
    router.get('/rejActive', controller.indexCon.rejActive);
    //显示未添加的活动
    router.get('/displayUnpreparedActivity', controller.indexCon.displayUnpreparedActivity)
    //加入活动
    router.get('/joinTheEvent', controller.indexCon.joinTheEvent);
    //显示未添加的活动
    router.get('/unbliedCommunity', controller.indexCon.unbliedCommunity)
    //加入社团
    router.get('/joinCommunity', controller.indexCon.joinCommunity);
    //显示我的活动
    router.get('/showMyActive', controller.indexCon.showMyActive);
    //退出活动
    router.get('/exitActivities', controller.indexCon.exitActivities);
    //我的社团
    router.get('/myCommunitis', controller.indexCon.myCommunitis);
    //退出活动
    router.get('/exitCommunitis', controller.indexCon.exitCommunitis);
    //申请活动
    router.get('/applicationActivity', controller.indexCon.applicationActivity);
    //查看活动
    router.get('/applicationActivity1', controller.indexCon.applicationActivity1)
};
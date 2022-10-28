
# 大学生社团管理系统
## 项目简介
追光大学生社团管理系统主要是面向大学生社团的项目。项目以Node.js为基础，通过Egg.js框架搭建。后端数据通过MySQL数据库存储，前后端交互通过Axios.js发送get/post请求，来获取数据库的数据。

## 技术路线
Node.js + MySQL + Axios.js + Egg.js + jQuery

## 项目简介
项目角色分为三个

**普通用户**：

+ 登录、注册
+ 查看社团信息
+ 查看已发布的活动
+ 申请加入社团
+ 申请加入活动
+ 修改个人信息

**社团管理员**

+ 登录
+ 查看社团信息
+ 查看社团成员
+ 管理社团成员
+ 查找社团成员
+ 申请社团活动
+ 审核加入社团成员
+ 审核加入活动成员
+ 修改个人信息

**超级管理员**

+ 登录
+ 查看各个社团信息
+ 查看各个社团成员
+ 管理各个社团成员
+ 审核各个社团活动申请
+ 修改个人信息

## 运行测试

要运行测试，运行以下命令
1. 安装项目的相关依赖包
```bash
  npm i
```

2. 将项目中的数据表导入到MySQL数据库

进入MySQL可视化工具，选择运行SQL文件

3. 在配置文件中配置数据库参数
找到config文件夹下的config.default.js文件
```
//数据库mysql配置
exports.mysql = {
    client: {
        host: 'localhost',
        port: '3306',
        user: 'root',//管理员名字
        password: '925336',//数据库密码,要根据情况修改
        database: 'societies',//数据库名字，要根据情况修改
    },
};
```
4. 运行
```bash
npm run dev
```
5. 通过浏览器访问项目

```
http://localhost:7000/public/html/about.html
```

**注意** 

请更改配置文件的端口号，位置`config/config.default.js`

## 贡献

我们随时欢迎大家的贡献!

请参阅 `contributing.md` 了解如何开始贡献。

请遵守本项目的 `行为准则`。


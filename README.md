# Student-societies-management-system
大学生社团管理系统
## 项目简介
一个管理社团的平台，具有三个不同的登录身份（普通用户、社团社长、超级管理员）实现了普通用户账号注册/登录、查看社团和活动信息、申请进入/退出社团/活动、修改个人信息等功能。社团社长具有管理社团成员、向超级管理员申请活动、申请转转让社团等功能。超级管理员具有活动的审核和发布、修改用户信息、删除社团成员的功能。
## 技术路线
Node.js + MySQL + Axios.js + Egg.js + jQuery
## 项目运行
1. 安装node环境
2. 新建终端
3. 输入命令
```
npm i
```
4. 运行项目
```
npm run dev
```
5. 通过浏览器访问项目

http://localhost:7000/public/html/about.html
### 注意
1. 请更改配置文件的端口号，位置`config/config.default.js`
2. 清更改配置文件中MySQL数据库的端口号，位置`config/config.default.js`

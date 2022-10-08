//动态效果
// 1.获取去登录按钮、去注册按钮、输入模块
// 2.当点击登录/注册时，添加/移除相应的类

// 1.获取去登录按钮、去注册按钮、输入模块
const signupButton = document.getElementById('tosignup-button'),
    loginButton = document.getElementById('tologin-button'),
    userForms = document.getElementById('user_options-forms')

// 2.当点击登录 / 注册时，添加 / 移除相应的类
// 1)监听登录按钮
signupButton.addEventListener('click', () => {
    userForms.classList.remove('bounceRight');//移除bounceRight类
    userForms.classList.add('bounceLeft');//添加bounceLeft类
})

// 2)监听注册按钮
loginButton.addEventListener('click', () => {
    userForms.classList.remove('bounceLeft');//移除bounceLeft类
    userForms.classList.add('bounceRight');//添加bounceRight类
})


//登录账号
// 1.获取登录按钮、邮箱输入框、密码输入框、管理员复选框
// 2.当点击登录按钮时，判断管理员复选框是否被选中
// 3.如果是，则进入管理员页面
// 4.如果不是，则进入用户页面
// 5.获取邮箱输入框、密码输入框的值，并向数据库进行验证
// 6.验证通过，进入页面，验证失败提示信息


// 1.获取登录按钮、邮箱输入框、密码输入框、管理员复选框

const loginBtn = document.querySelector('#login-button');//登录按钮
const loginEmail = document.querySelector('#login-email');//邮箱
const loginPwd = document.querySelector('#login-pwd');//密码
const loginAdmin = document.querySelector('#login-admin');//复选框

// 2.当点击登录按钮时，判断管理员复选框是否被选中

// 1)为登录按钮添加点击事件
loginBtn.addEventListener('click', function () {
    // 2)获取邮箱输入框、密码输入框、管理员复选框的值
    const flag = loginAdmin.checked;
    const email = loginEmail.value;

    //对邮箱进行处理，生成账号
    const num = email.substr(0, email.indexOf('@'))
    const pwd = loginPwd.value;

    // 3)判断是否选中管理员
    if (flag) {
        //向后端发送请求，获取t_mamber数据库内的M_id和M_pwd，进行验证
        //设置url访问路径
        const url = 'http://localhost:7000/login';

        //使用axios向后端发送get请求，返回promis对象
        const promise = axios.get(url, { params: { num, pwd, flag } });

        //使用then方法，获取请求成功的值,使用catch方法，获取请求失败的值
        promise.then(res => {
            //打印返回值，并跳转到管理员页面
            // 判断是否登录成功
            if (res.data) {
                //进入主页，并将用户信息值传给主页
                window.location.href = `../html/index.html?name=${res.data.name}&role=${res.data.R_id}&tel=${res.data.tel}&num=${res.data.num}`;
            } else {
                // 提示用户登录失败
                // 获取提示
                document.querySelector('#hint').style.visibility = 'visible';
                setTimeout(() => {
                    document.querySelector('#hint').style.visibility = 'hidden';
                }, 1000)
            }
        }).catch(e => {
            console.log('error' + e);
        })

    } else {
        const url = 'http://localhost:7000/login';
        const promise = axios.get(url, { params: { num, pwd, flag } });
        promise.then(res => {
            if (res.data) {
                window.location.href = `../html/index.html?name=${res.data.name}&role=${res.data.R_id}&tel=${res.data.tel}&num=${res.data.num}`;
            } else {
                document.querySelector('#hint').style.visibility = 'visible';
                setTimeout(() => {
                    document.querySelector('#hint').style.visibility = 'hidden';
                }, 1000)
            }
        }).catch(e => {
            console.log('error' + e);
        })
    }
})


// 注册账号
// 1.获取注册按钮、姓名输入框、邮箱输入框、密码输入框、班级输入框、电话输入框
// 2.获取昵称输入框、邮箱输入框、密码输入框的值、并添加至数据库的用户表中
// 3.进入用户页面


// 1.获取注册按钮、姓名输入框、邮箱输入框、密码输入框、班级输入框、电话输入框
const registerBtn = document.querySelector('#register-button');
const registerName = document.querySelector('#register-name');
const registerEmail = document.querySelector('#register-email');
const registerPwd = document.querySelector('#register-pwd');
const registerTel = document.querySelector('#register-tel');
const registerCla = document.querySelector('#register-cla');

registerBtn.addEventListener('click', function () {
    //获取姓名输入框、邮箱输入框、密码输入框、班级输入框、电话输入框的数据
    const name = registerName.value;
    const email = registerEmail.value;
    const pwd = registerPwd.value;
    const tel = registerTel.value;
    const clazz = registerCla.value;
    //对邮箱进行处理，生成账号
    const num = email.substr(0, email.indexOf('@'));

    //设置url访问路径
    const url = 'http://localhost:7000/register';

    //使用axios向后端发送get请求，返回promis对象
    const promise = axios.get(url, { params: { name, num, pwd, tel, clazz } });

    //使用then方法，获取请求成功的值,使用catch方法，获取请求失败的值
    promise.then(res => {
        //打印返回值，并跳转到管理员页面
        // 判断是否登录成功
        if (res.data) {
            console.log('注册成功');
            //进入主页，并将用户信息值传给主页
            window.location.href = `../html/index.html?name=${name}&role=${1}&tel=${tel}&num=${num}`;
        } else {
            // 提示用户注册失败
            // 获取提示
            document.querySelector('#hint1').style.visibility = 'visible';
            console.log('注册失败');
            setTimeout(() => {
                document.querySelector('#hint1').style.visibility = 'hidden';
            }, 1000)
        }
    }).catch(e => {
        console.log('error' + e);
    })
})



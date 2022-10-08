//1.取出网络路径的参数

let search = window.location.search;
//防止乱码，进行转码
search = decodeURI(search, "utf-8");
//将字符串转为数组
const list = search.substring(1).split("&");
//提取数组的值
const userName = list[0].substring(list[0].indexOf("=") + 1);
const role = list[1].substring(list[1].indexOf("=") + 1);
const userTel = list[2].substring(list[2].indexOf("=") + 1);
const userNum = list[3].substring(list[3].indexOf("=") + 1);
//更改用户的名字
document.querySelector('.userName').innerHTML = userName;


//排他函数:将其他的界面隐藏，只显示当前页面
function exhaust(index) {
    const module = document.querySelectorAll('.right>div');
    for (let i = 0; i < module.length; i++) {
        module[i].style.display = 'none';
    }
    module[index].style.display = 'block';
}


//2.判断登录者的身份
//根据身份显示不同的页面
//(1)获取不同身份的模块
//(2)判断身份，如果role==1，则是普通用户，否则是管理员
//(3)普通用户要将管理员对应的模块隐藏

const merber = document.querySelectorAll('.role1');
const merberMG = document.querySelectorAll('.role2');
const manager = document.querySelectorAll('.role3');
if (role == 1) {
    for (let i = 0; i < merberMG.length; i++) {
        merberMG[i].style.display = 'none';
    }
    for (let i = 0; i < manager.length; i++) {
        manager[i].style.display = 'none';
    }
} else if (role == 2) {
    for (let i = 0; i < merber.length; i++) {
        manager[i].style.display = 'none';
    }
} else {
    for (let i = 0; i < merber.length; i++) {
        merber[i].style.display = 'none';
    }
    for (let i = 0; i < merberMG.length; i++) {
        merberMG[i].style.display = 'none';
    }
}

//3.管理员功能1管理社团
//(1)获取管理社团按钮
//(2)添加点击事件
//(3)点击按钮，显示右端页面
//(4)向后端发送请求，获取数据



//3.1.1显示社团信息
//(1)获取管理社团按钮
const manageCommunity = manager[0];

//(2)添加点击事件
manageCommunity.addEventListener('click', function () {
    //获取表格
    exhaust(0);
    showCommunity();
})


//显示社团信息
function showCommunity() {
    const tbody = document.querySelector('.manageCommunity tbody');
    tbody.innerHTML = '';
    //设置url访问路径
    const url = 'http://localhost:7000/community';
    //向后端发送请求，获取数据
    axios.get(url).then(res => {
        const community = res.data;
        for (let i = 0; i < community.length; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${i + 1}</td>
                    <td>${community[i].C_name}</td>
                    <td>${community[i].C_introduce}</td>
                    <td>${community[i].C_people}</td>
                    <td>${community[i].C_tel}</td>
                    <td>${community[i].C_class}</td>
                    <td>${community[i].C_qq}</td>
                    <td>
                        <a href="javascript:delCommunity(${community[i].C_id});">删除社团</a>
                        <a href="javascript:showComPeo(${community[i].C_id});">查看成员</a>
                    </td>`;
            //获取tbody
            const tbody = document.querySelector('.manageCommunity tbody');
            tbody.appendChild(tr);
        }
    }).catch(e => {
        console.log('error' + e);
    })
}

//3.1.2添加社团
//(1)获取添加按钮
const addCommunitybtn = document.querySelector('.addCommunitybtn');
addCommunitybtn.addEventListener('click', function () {
    exhaust(1);
})

//获取取消按钮
const addcencal = document.querySelector('.addcencal');
addcencal.addEventListener('click', function () {
    exhaust(0);
})

//获取确定按钮，单击确定按钮时，向数据库添加数据，并且更新列表
const addright = document.querySelector('.addright');
//获取信息表单
const addname = document.querySelector('#addname');
const addintroduce = document.querySelector('#addintroduce');
const addpeople = document.querySelector('#addpeople');
const addtel = document.querySelector('#addtel');
const addqq = document.querySelector('#addqq');
const addclass = document.querySelector('#addclass');

//添加社团按钮点击事件
addright.addEventListener('click', function () {
    const name = addname.value;
    const introduce = addintroduce.value;
    const people = addpeople.value;
    const tel = addtel.value;
    const qq = addqq.value;
    const clazz = addclass.value;
    console.log(name, people, tel, qq, clazz, introduce);
    const url = 'http://localhost:7000/addCommunity';
    const promise = axios.get(url, { params: { name, introduce, people, tel, qq, clazz } });
    promise.then(res => {
        alert('添加成功')
        addname.value = '';
        addintroduce.value = '';
        addpeople.value = '';
        addtel.value = '';
        addqq.value = '';
        addclass.value = '';
        showCommunity();
    }).catch(e => {
        console.log('error' + e);
    })
})

//3.1.3删除社团
function delCommunity(id) {
    const url = 'http://localhost:7000/delCommunity';
    const promise = axios.get(url, { params: { id } });
    promise.then(res => {
        showCommunity();
    }).catch(e => {
        console.log('error' + e);
    })
}

//3.1.4查看成员
//(1)获取查看成员页面
const showPeo = document.querySelector('.showComPeo');
function showComPeo(id) {
    exhaust(2);
    const tbody = document.querySelector('.showComPeo tbody');
    tbody.innerHTML = '';
    const url = 'http://localhost:7000/showComPeo';
    const promise = axios.get(url, { params: { id } });
    promise.then(res => {
        const comPeo = res.data;
        console.log(comPeo);
        for (let i = 0; i < comPeo.length; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${i + 1}</td>
                    <td>${comPeo[i].num}</td>
                    <td>${comPeo[i].name}</td>
                    <td>${comPeo[i].clazz}</td>
                    <td>${comPeo[i].tel}</td>`;
            //获取tbody
            tbody.appendChild(tr);
        }
    }).catch(e => {
        console.log('error' + e);
    })
}

//3.2.1活动显示
const managementActivities = manager[1];

//为按钮添加点击事件
managementActivities.addEventListener('click', function () {
    exhaust(4);
    showActive();
})

//显示活动
function showActive() {
    const tbody = document.querySelector('.managementActivities tbody');
    tbody.innerHTML = '';
    const url = 'http://localhost:7000/showActive';
    const promise = axios.get(url);
    promise.then(res => {
        const Active = res.data;
        for (let i = 0; i < Active.length; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${i + 1}</td>
                    <td>${Active[i].AC_theme}</td>
                    <td>${Active[i].AC_organize}</td>
                    <td>${Active[i].AC_undertaker}</td>
                    <td>${Active[i].AC_people}</td>
                    <td>${Active[i].AC_tel}</td>
                    <td>${Active[i].AC_time}</td>
                    <td>${Active[i].AC_location}</td>
                    <td>${Active[i].AC_money}</td>
                    <td>${Active[i].AC_remark}</td>
                    <td>
                        <a href="javascript:delActive(${Active[i].AC_id});">删除活动</a>
                    </td>`;
            //获取tbody
            tbody.appendChild(tr);
        }
    }).catch(e => {
        console.log('error' + e);
    })
}

//3.2.2删除活动
function delActive(id) {
    const url = 'http://localhost:7000/delActive';
    const promise = axios.get(url, { params: { id } });
    promise.then(res => {
        showActive();
    }).catch(e => {
        console.log('error' + e);
    })
}

//3.3活动审核

const activityReview = manager[2];
//为按钮添加点击事件
activityReview.addEventListener('click', function () {
    exhaust(5);
    revActive();
})


//显示活动
function revActive() {
    const tbody = document.querySelector('.activityReview tbody');
    tbody.innerHTML = '';
    const url = 'http://localhost:7000/revActive';
    const promise = axios.get(url);
    promise.then(res => {
        const Active = res.data;
        for (let i = 0; i < Active.length; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${i + 1}</td>
                    <td>${Active[i].AC_theme}</td>
                    <td>${Active[i].AC_organize}</td>
                    <td>${Active[i].AC_undertaker}</td>
                    <td>${Active[i].AC_time}</td>
                    <td>${Active[i].AC_location}</td>
                    <td>${Active[i].AC_money}</td>
                    <td>
                        <a href="javascript:passActive(${Active[i].AC_id});">通过</a>
                        <a href="javascript:rejActive(${Active[i].AC_id});">驳回</a>
                    </td>`;
            //获取tbody
            tbody.appendChild(tr);
        }
    }).catch(e => {
        console.log('error' + e);
    })
}
//通过
function passActive(id) {
    const url = 'http://localhost:7000/passActive';
    const promise = axios.get(url, { params: { id } });
    promise.then(res => {
        revActive();
    }).catch(e => {
        console.log('error' + e);
    })
}
//驳回
function rejActive(id) {
    const str = prompt('请输入驳回原因');
    if (str != null) {
        const url = 'http://localhost:7000/rejActive';
        const promise = axios.get(url, { params: { id, str } });
        promise.then(res => {
            revActive();
        }).catch(e => {
            console.log('error' + e);
        })
    }
}

//3.4.1获取管理用户按钮
const managedUse = manager[3];

//为按钮添加点击事件
managedUse.addEventListener('click', function () {
    exhaust(3);
    showUser();
})

//显示所有用户
function showUser() {
    const tbody = document.querySelector('.managedUsers tbody');
    tbody.innerHTML = '';
    const url = 'http://localhost:7000/showUser';
    const promise = axios.get(url);
    promise.then(res => {
        const User = res.data;
        for (let i = 0; i < User.length; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${i + 1}</td>
                    <td>${User[i].num}</td>
                    <td>${User[i].pwd}</td>
                    <td>${User[i].name}</td>
                    <td>${User[i].tel}</td>
                    <td>${User[i].clazz}</td>
                    <td>${User[i].C_name}</td>
                    <td>
                        <a href="javascript:delUser(${User[i].num});">删除用户</a>
                    </td>`;
            //获取tbody
            tbody.appendChild(tr);
        }
    }).catch(e => {
        console.log('error' + e);
    })
}

//3.4.2删除用户
function delUser(num) {
    const url = 'http://localhost:7000/delUser';
    const promise = axios.get(url, { params: { num } });
    promise.then(res => {
        showUser();
    }).catch(e => {
        console.log('error' + e);
    })
}

//3.4.3查找用户
//获取搜索按钮，单击搜索按钮时，向数据库添加数据，并且更新列表
const searchUserBtn = document.querySelector('.searchUserBtn');
//获取信息表单
const searchUser = document.querySelector('.searchUser');
//添加社团按钮点击事件
searchUserBtn.addEventListener('click', function () {
    const name = searchUser.value;
    const tbody = document.querySelector('.managedUsers tbody');
    tbody.innerHTML = '';
    const url = 'http://localhost:7000/searchUser';
    const promise = axios.get(url, { params: { name } });
    promise.then(res => {
        const User = res.data;
        for (let i = 0; i < User.length; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${i + 1}</td>
                    <td>${User[i].num}</td>
                    <td>${User[i].pwd}</td>
                    <td>${User[i].name}</td>
                    <td>${User[i].tel}</td>
                    <td>${User[i].clazz}</td>
                    <td>${User[i].C_name}</td>
                    <td>
                        <a href="javascript:delUser(${User[i].num});">删除用户</a>
                    </td>`;
            //获取tbody
            tbody.appendChild(tr);
        }
    }).catch(e => {
        console.log('error' + e);
    })
})


//4.1显示活动
const displayAct = merber[0];
//为按钮添加点击事件

displayAct.addEventListener('click', function () {
    exhaust(6);
    displayActs();
})

//显示所有活动
function displayActs() {
    const tbody = document.querySelector('.displayAct tbody');
    tbody.innerHTML = '';
    const url = 'http://localhost:7000/displayUnpreparedActivity';
    const promise = axios.get(url, { params: { userNum } });
    promise.then(res => {
        const active = res.data;
        for (let i = 0; i < active.length; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${i + 1}</td>
                    <td>${active[i].AC_theme}</td>
                    <td>${active[i].AC_organize}</td>
                    <td>${active[i].AC_undertaker}</td>
                    <td>${active[i].AC_time}</td>
                    <td>${active[i].AC_location}</td>
                    <td class="id${active[i].AC_id}">
                        <a href="javascript:joinTheEvent(${active[i].AC_id});" >加入活动</a>
                    </td>`;
            //获取tbody
            tbody.appendChild(tr);
        }
    }).catch(e => {
        console.log('error' + e);
    })
}

//加入活动
function joinTheEvent(id) {
    const url = 'http://localhost:7000/joinTheEvent';
    const promise = axios.get(url, { params: { userNum, id } });
    promise.then(res => {
        alert('加入活动成功！');
        displayActs();
    }).catch(e => {
        console.log('error' + e);
    })
}

//4.2显示社团
const displayComs = merber[1];
//为按钮添加点击事件

displayComs.addEventListener('click', function () {
    exhaust(7);
    displayCommunitis();
})

//显示未加入的社团信息
function displayCommunitis() {
    const tbody = document.querySelector('.displayComs tbody');
    tbody.innerHTML = '';
    //设置url访问路径
    const url = 'http://localhost:7000/unbliedCommunity';
    //向后端发送请求，获取数据
    axios.get(url, { params: { userNum } }).then(res => {
        const community = res.data;
        for (let i = 0; i < community.length; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${i + 1}</td>
                    <td>${community[i].C_name}</td>
                    <td>${community[i].C_introduce}</td>
                    <td>${community[i].C_people}</td>
                    <td>${community[i].C_tel}</td>
                    <td>
                        <a href="javascript:joinCommunity(${community[i].C_id});">加入社团</a>
                    </td>`;
            //获取tbody
            tbody.appendChild(tr);
        }
    }).catch(e => {
        console.log('error' + e);
    })
}

//加入社团
function joinCommunity(id) {
    const url = 'http://localhost:7000/joinCommunity';
    const promise = axios.get(url, { params: { userNum, id } });
    promise.then(res => {
        alert('加入社团成功！');
        displayCommunitis();
    }).catch(e => {
        console.log('error' + e);
    })
}

//4.3我的活动
const myActive = merber[2];
//为按钮添加点击事件

myActive.addEventListener('click', function () {
    exhaust(8);
    myActives();
})

//显示活动信息
function myActives() {
    const tbody = document.querySelector('.myActive tbody');
    tbody.innerHTML = '';
    //设置url访问路径
    const url = 'http://localhost:7000/showMyActive';
    const promise = axios.get(url, { params: { userNum } });
    promise.then(res => {
        const active = res.data;
        for (let i = 0; i < active.length; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${i + 1}</td>
                    <td>${active[i].AC_theme}</td>
                    <td>${active[i].AC_organize}</td>
                    <td>${active[i].AC_undertaker}</td>
                    <td>${active[i].AC_time}</td>
                    <td>${active[i].AC_location}</td>
                    <td>
                        <a href="javascript:exitActivities(${active[i].AC_id});">退出活动</a>
                    </td>`;
            //获取tbody
            tbody.appendChild(tr);
        }
    }).catch(e => {
        console.log('error' + e);
    })
}

//退出活动
function exitActivities(id) {
    const url = 'http://localhost:7000/exitActivities';
    const promise = axios.get(url, { params: { userNum, id } });
    promise.then(res => {
        alert('退出活动成功！');
        myActives();
    }).catch(e => {
        console.log('error' + e);
    })
}


//4.4我的社团
const myCommunity = merber[3];
//为按钮添加点击事件

myCommunity.addEventListener('click', function () {
    exhaust(9);
    myCommunitis();
})
//显示社团信息
function myCommunitis() {
    const tbody = document.querySelector('.myCommunity tbody');
    tbody.innerHTML = '';
    //设置url访问路径
    const url = 'http://localhost:7000/myCommunitis';
    //向后端发送请求，获取数据
    axios.get(url, { params: { userNum } }).then(res => {
        const community = res.data;
        for (let i = 0; i < community.length; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${i + 1}</td>
                    <td>${community[i].C_name}</td>
                    <td>${community[i].C_introduce}</td>
                    <td>${community[i].C_people}</td>
                    <td>${community[i].C_tel}</td>
                    <td>
                        <a href="javascript:exitCommunitis(${community[i].C_id});">退出社团</a>
                    </td>`;
            //获取tbody
            tbody.appendChild(tr);
        }
    }).catch(e => {
        console.log('error' + e);
    })
}

//退出社团
function exitCommunitis(id) {
    const url = 'http://localhost:7000/exitCommunitis';
    const promise = axios.get(url, { params: { userNum, id } });
    promise.then(res => {
        alert('退出社团成功！');
        myCommunitis();
    }).catch(e => {
        console.log('error' + e);
    })
}

//5.4申请活动
//为按钮添加点击事件

merberMG[0].addEventListener('click', function () {
    exhaust(10);
})

const inputBox = document.querySelectorAll('.applicationActivity input');
const eventName = inputBox[0];
const organizer = inputBox[1];
const organizered = inputBox[2];
const activityTime = inputBox[3]
const eventLocation = inputBox[4];
const eventExpense = inputBox[5];
const cancelApplication = document.querySelector('.applicationActivity .cancelApplication');
const submitApplication = document.querySelector('.applicationActivity .submitApplication');

submitApplication.addEventListener('click', function () {
    const eventname = eventName.value;
    const organize = organizer.value;
    const activitytime = activityTime.value;
    const organized = organizered.value;
    const eventlocation = eventLocation.value;
    const eventexpense = eventExpense.value;
    applicationActivity(eventname, organize, organized, activitytime, eventlocation, eventexpense);
})

cancelApplication.addEventListener('click', function () {
    eventName.value = '';
    organizer.value = '';
    organizered.value = '';
    activityTime.value = '';
    eventLocation.value = '';
    eventExpense.value = '';
})
//显示社团信息
function applicationActivity(eventname, organize, organized, activitytime, eventlocation, eventexpense) {
    //设置url访问路径
    const url = 'http://localhost:7000/applicationActivity';
    //向后端发送请求，获取数据
    axios.get(url, {
        params: {
            eventname,
            organize,
            organized,
            activitytime,
            eventlocation,
            eventexpense,
            userName,
            userTel
        }
    }).then(res => {
        alert('申请已提交！');
        eventName.value = '';
        organizer.value = '';
        organizered.value = '';
        activityTime.value = '';
        eventLocation.value = '';
        eventExpense.value = '';
    }).catch(e => {
        console.log('error' + e);
    })
}


merberMG[1].addEventListener('click', function () {
    applicationActivity1();
})

function applicationActivity1() {
    const tbody = document.querySelector('.applicationActivity1 tbody');
    tbody.innerHTML = '';
    const url = 'http://localhost:7000/applicationActivity1';
    axios.get(url).then(res => {
        const active = res.data;
        for (let i = 0; i < active.length; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${i + 1}</td>
                    <td>${active[i].AC_theme}</td>
                    <td>${active[i].AC_organize}</td>
                    <td>${active[i].AC_undertaker}</td>
                    <td>${active[i].AC_time}</td>
                    <td>${active[i].AC_location}</td>
                    <td>${active[i].AC_remark}</td>`;
            //获取tbody
            tbody.appendChild(tr);
        }
    }).catch(e => {
        console.log('error' + e);
    })
}

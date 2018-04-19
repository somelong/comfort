const vueDao = require("../dao/vueDao")

const vuecomfort ={
    MyorderUnfill(request,response){//待发货订单
        console.log("一人之下")
        vueDao.unfillDao().then(function (data) {
            response.send(data)
        })
    },
    MyorderSent(request,response){//已发货订单
        console.log("狐妖小红娘")
        vueDao.sentDao().then(function (data) {
            response.send(data);
        })
    },
    MyorderAll(request,response){//全部订单
        console.log("镇魂街")
        vueDao.allDao().then(function (data) {
            response.send(data)
        })
    },
    MyorderTake(request,response){//已收货订单
        console.log("中国惊奇先生")
        vueDao.takeDao().then(function (data) {
            response.send(data)
        })
    },
    MyorderUpdate(request,response){//发货请求操作
        console.log("发货了哟，亲");
        console.log(request.query.ophone)
        let params = request.query.ophone
        vueDao.updateDao(params).then(function (data) {
            response.send(data)
        })
    },
    MyorderXiugai(request,response){//订单编辑
        console.log("编辑好了哟，亲")
        console.log(request.query)
        let params=[request.query.ophone,request.query.owaybill,request.query.oaddress,request.query.uname]
        vueDao.xiugaiDao(params).then(function (data) {
            response.send(data)
        })
    },
    MyuserAll(request,response){//用户数据获取
        console.log("取到了数据耶")
        vueDao.userAll().then(function (data) {
            response.send(data);
        })
    },
    MyuserUpdate(request,response){//用户信息编辑
        console.log("可以编辑用户信息了哟")
        console.log(request.query.ubirthday);
        let params=[request.query.ubirthday,request.query.uphone,request.query.usex,request.query.uiweixin,request.query.uiweixin,request.query.uiweibo,request.query.mgrade,request.query.mequity,request.query.uname]
        vueDao.userUpdate(params).then(function (data) {
            response.send(data)
        })
    },
    MyuserSearch(request,response){//用户搜索哟
        console.log(request.query.searchval)
        let searchvalue="%"+request.query.searchval+"%"
        console.log(searchvalue)
        let params = [searchvalue,searchvalue];
        vueDao.userSearch(params).then(function (data) {
            response.send(data)
        })
    },
    Myuserget(request,response){
        console.log(request.query)
        let params = request.query.value;
        vueDao.usergetAny(params).then(function (data) {
            response.send(data)
        })
    }
}
module.exports= vuecomfort;
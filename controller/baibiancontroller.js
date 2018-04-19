const baibianDao=require("../dao/baibianDao");
const userDao = require("../dao/userDao.js");
const baibianss= {
    baibianyemian(request,response){
        baibianDao.getactivity().then(function (data) {
            response.render("baibian",{baibian:data})
        })
    },
    getbaibian(request,response){
        baibianDao.getbb().then(function (data) {
            console.log("contr:"+data);
            response.send(data);
        })
    },
    getgeren(request,response){
        let params=request.body.getUser1;
        userDao.gerenzhong(params).then(function (data) {
            response.send(data);
        })
    },
    upload(request,response){
        let userBox=request.body.userBox;
        let sexBox=request.body.sexBox;
        let birthBox=request.body.birthBox;
        let imgData=request.body.imgData;
        let getUser1=request.body.getUser1;
        let params=[userBox,sexBox,birthBox,imgData,getUser1];
        userDao.myupload(params).then(function (data) {
            response.send(data);
        })
    },
    upload1(request,response){
        userDao.myupload1().then(function (data) {
            response.send(data);
        })
    },
    upload2(request,response){
        let params=request.body.myShen;
        console.log(params)
        userDao.myupload2(params).then(function (data) {
            response.send(data);
        })
    },
    upload3(request,response){
        let params=request.body.myShen1;
        console.log(params)
        userDao.myupload3(params).then(function (data) {
            response.send(data);
        })
    },
    getgeren1(request,response){
        let mySheng=request.body.mySheng;
        let myShi=request.body.myShi;
        let myXian=request.body.myXian;
        let address_text=request.body.address_text;
        let receipt_name=request.body.receipt_name;
        let receipt_phone=request.body.receipt_phone;
        let getUser1=request.body.getUser1;
        let params=[mySheng,myShi,myXian,address_text,receipt_name,receipt_phone,getUser1];
        userDao.myupload4(params).then(function (data) {
            response.send(data);
        })
    },
    dizhi1(request,response){
        let params=request.body.getUser1;
        userDao.dizhi1(params).then(function (data) {
            response.send(data);
        })
    },
    getgeren2(request,response){
        let params=request.body.obj;
        userDao.dizhi2(params).then(function (data) {
            response.send(data);
        })
    },
    upLoad11(request,response){
        let mySheng=request.body.mySheng;
        let myShi=request.body.myShi;
        let myXian=request.body.myXian;
        let address_text=request.body.address_text;
        let receipt_name=request.body.receipt_name;
        let receipt_phone=request.body.receipt_phone;
        let getUser1=request.body.getUser1;
        let obj1=request.body.obj1;
        let params=[mySheng,myShi,myXian,address_text,receipt_name,receipt_phone,getUser1,obj1];
        userDao.upLoad11(params).then(function (data) {
            response.send(data);
        })
    },
    shopCar(request,response){
        let params=request.body.getUser1;
        userDao.shopCar(params).then(function (data) {
            response.send(data);
        })
    },
    shopCar1(request,response){
        let num=request.body.num;
        let id=request.body.id;
        let params=[num,id];
        userDao.shopCar1(params).then(function (data) {
            response.send(data);
        })
    },
    shopCar2(request,response){
        let params=request.body.id;
        userDao.shopCar2(params).then(function (data) {
            response.send(data);
        })
    },
    shopCar3(request,response){/*为订单表添加数据*/
        let getUser1=request.body.getUser1;
        let random=request.body.random;
        let myShu3=request.body.myShu3;
        let myShu4=request.body.myShu4;
        let order=request.body.order;
        let params=[getUser1,random,myShu3,myShu4,order];
        userDao.shopCar3(params).then(function (data) {
            response.send(data);
        })
    },
    shopCar4(request,response){/*为获取订单表的数量*/
        // let params=request.body.getUser1;
        userDao.shopCar4().then(function (data) {
            response.send(data);
        })
    },
    shopCar5(request,response){/*为获取订单表的数量*/
        let quantity=request.body.quantity;
        let product=request.body.product;
        let numcer=request.body.numcer;
        let time=request.body.time;
        let params=[quantity,product,numcer,time];
        userDao.shopCar5(params).then(function (data) {
            response.send(data);
        })
    },
    payconfirm(request,response){/*订单页面加载，获取数据*/
        let getUser1=request.body.getUser1;
        let url=request.body.url;
        let params=[getUser1,url];
        console.log("订单页面加载数据");
        console.log(params);
        userDao.payconfirm(params).then(function (data) {
            response.send(data);
        })
    },
    /*页面加载获取地址的时候*/
    payconfirm1(request,response){/*订单页面加载，获取数据*/
        let params= request.body.getUser1;
        userDao.payconfirm1(params).then(function (data) {
            response.send(data);
        })
    },
    payconfirm2(request,response){/*订单页面加载，获取数据*/
        let params= request.body.u_id;
        userDao.payconfirm2(params).then(function (data) {
            response.send(data);
        })
    },
    payconfirm3(request,response){/*订单页面加载，获取数据*/
        let price=request.body.price;
        let discounts=request.body.discounts;
        let getUser1=request.body.getUser1;
        let url=request.body.url;
        let params= [price,discounts,getUser1,url];
        userDao.payconfirm3(params).then(function (data) {
            response.send(data);
        })
    },
    payconfirm4(request,response){/*订单页面加载，获取数据*/
        let price=request.body.mydiscounts;
        let discounts=request.body.adderAss;
        let test1=request.body.test1;
        let getUser1=request.body.getUser1;
        let url=request.body.url;
        let params= [price,discounts,test1,getUser1,url];
        console.log(params);
        console.log("测试数据");
        userDao.payconfirm4(params).then(function (data) {
            response.send(data);
        })
    },
    Myorder(request,response){/*订单页面加载，获取数据*/
        let getUser1= request.body.getUser1;
        let state= request.body.state;
        let params= [getUser1,state];
        userDao.Myorder(params).then(function (data) {
            response.send(data);
        })
    },
    Myorderb(request,response){/*订单页面加载，获取数据*/
        let params= request.body.getUser1;
        userDao.Myorderb(params).then(function (data) {
            response.send(data);
        })
    },
    Myordera(request,response){/*订单页面加载，获取数据*/
        let getUser1= request.body.getUser1;
        let state= request.body.state;
        let state1= request.body.state1;
        let params= [getUser1,state,state1];
        userDao.Myordera(params).then(function (data) {
            response.send(data);
        })
    },
    Myorderb11(request,response){/*订单页面加载，获取数据*/
        let img= request.body.img;
        let text= request.body.text;
        let uid= request.body.uid;
        let pid= request.body.pid;
        let getUser1= request.body.getUser1;
        let params= [img,text,uid,pid,getUser1];
        userDao.Myorderb11(params).then(function (data) {
            response.send(data);
        })
    },
    Myorder1(request,response){/*订单页面加载，获取数据*/
        let params= request.body.getUser1;
        userDao.Myorder1(params).then(function (data) {
            response.send(data);
        })
    },
    Myorder2(request,response){/*订单页面加载，获取数据*/
        let params= request.body.id;
        userDao.Myorder2(params).then(function (data) {
            response.send(data);
        })
    },
    harp1(request,response){/*订单页面加载，获取数据*/
        let params= request.body.img;
        userDao.harp1(params).then(function (data) {
            response.send(data);
        })
    },
    harp2(request,response){/*订单页面加载，获取数据*/
        let getUser1= request.body.getUser1;
        let number11= request.body.number11;
        let num1= request.body.num1;
        let params= [getUser1,number11,num1];
        userDao.harp2(params).then(function (data) {
            response.send(data);
        })
    },
    lcgoodxxxx1(request,response){/*订单页面加载，获取数据*/
        let number1112= request.body.number1112;
        let uid= request.body.uid;
        let params= [number1112,uid];
        userDao.lcgoodxxxx1(params).then(function (data) {
            response.send(data);
        })
    },
    Mycollect1(request,response){/*订单页面加载，获取数据*/
        let params= request.body.uid;
        userDao.Mycollect1(params).then(function (data) {
            response.send(data);
        })
    },
    goPay1(request,response){/*订单页面加载，获取数据*/
        let url= request.body.url;
        let state= request.body.state;
        let params=[state,url];
        userDao.goPay1(params).then(function (data) {
            response.send(data);
        })
    },
    getVueBoxing(request,response){
        userDao.getVueBoxing().then(function (data) {
            response.send(data);
        })
    }
};

module.exports=baibianss;
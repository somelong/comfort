const express = require("express");

// ================================佳文专用分割线===============================
const goodController=require("../controller/goodControllerJW");
// ================================不跟你多bb===============================
const upload=require("../config/uploadconfig");  //上传图片
const uploadHlr=require("../config/uploadconfigHlr");  //hlr私有的上传图片配置文件
// ================================冯小龙专用分割线===============================
// 用户模块
const userController=require("../controller/userController.js");
//短信模块
const smsController=require("../controller/smsController.js");
// 首页商品显示模块
const ceshiController=require("../controller/ceshiController.js");
// 商品显示页
const commodityViewController = require('../controller/commodityViewController.js');
// 引入上传文件的模块
// const upload = require("../config/uploadconfig.js");
// const upload=require("../config/uploadconfig")
// 引入上传文件的控制层
const uploadController = require('../controller/uploadController.js');
// 引入后台的评论模块
const commentController = require('../controller/commentController.js');
const redianController = require('../controller/redianController.js');
const shitiController = require('../controller/shitidianController.js');
const bananerController = require('../controller/bananerController.js');
// ================================滑稽===============================

//=======================activity模块的引入=======================
const activityController=require("../controller/activitycontroller");
const MyDisCount=require("../controller/mydiscount");

/*============================超哥==============*/
const baibianController=require("../controller/baibiancontroller");

//=============================vue=======================
const vueController=require("../controller/vuecontroller");

const router = express.Router();


// ================================拦截EJS===============================
// router.get("/mytest",function (req,resp) {
//     console.log("拦截滑稽");
//     let huaji = "滑稽";
//     resp.render("test",{username:huaji});
// });
// router.get("/index",(req,resp)=>{resp.render("index")});

// =============================cookie&session============================
// router.post("/logoCookie.do",userController.cookieUser); // 登陆

// ================================文件上传下载===================================
// 之前的方法都是两个参数  一个是路径   一个是方法
// 现在 post(1、拦截路径 2、调用上传文件模块  3、处理方法)
// router.post("/addCommentImg.do",upload.array("myUpLoad"),function(req,resp){
//     console.log("上传图片的路劲为"+req.file);
// });
//多文件上传
// router.post("/addCommentImgs.do",upload.array("somelongupload"),uploadController.uploadFiles);
//下载
// router.get("/fileDownload.do",function (req, resp) {
//     //1.下载文件的路径 2.下载后保存的文件名
//     resp.download("./public/uploads/123.sql","123123.sql");
// });

// ================================冯小龙专用分割线===============================
router.post("/verifyPhone.do",userController.verifyUser); // 验证用户手机号是否注册
router.post("/sendCode.do",smsController.sendCode); // 发送短信验证码
router.post("/verifyCode.do",smsController.verifyCode); //短信验证
router.post("/addUser.do",userController.addUser); //添加一个用户
router.post("/login.do",userController.loginUser); //用户登陆
router.post("/updataUser.do",userController.updataUser); // 重置用户密码

router.post('/getMainCommodityView.do',commodityViewController.mainAllCommodityView);  // 产品列表页大分类
router.post('/getMinorCommodityView.do',commodityViewController.minorAllCommodityView); // 产品列表页小分类

router.get("/qingqiu.do",ceshiController.ceshiData); // 拦截到请求  并且分发任务  (首页商品的显示)

router.get("/qingqiu.do",ceshiController.ceshiData); // 拦截产品图片
router.post("/canpindelete.do",ceshiController.cpdele); //vue拦截产品

router.get("/redian.do",redianController.rediandata); //拦截热点图片
router.post("/rediandelet.do",redianController.rediandele);//vue拦截热点图片
//
router.get("/shitidian.do",shitiController.shitidata);//拦截实体店图片
router.post("/stdde.do",shitiController.shitidele); //vue拦截实体店图片

router.post("/bananer.do",bananerController.bananerdataa);  //拦截轮播图片
router.post("/bananerde.do",bananerController.bananerdataaa); //vue轮播图片
router.post("/Addbananer.do",bananerController.Add);

router.post("/getUserComment.do",commentController.getAComment); // 获取所有已审核的评论
router.post("/getUserNoComment.do",commentController.getNoAComment); // 获取所有未审核的评论
router.post("/deleteUserComment.do",commentController.deleteUserComment); // 删除评论
router.post("/updateUserComment.do",commentController.updateUserComment); // 修改评论的状态
router.post("/getADiscount.do",commentController.getADiscount); // 获取已发布的优惠券
router.post("/getUnADiscount.do",commentController.getUnADiscount); // 获取未发布的优惠券
router.post("/deleteDiscount.do",commentController.deleteDiscount); // 删除优惠券的请求
router.post("/updateDiscount.do",commentController.updateDiscount); // 修改优惠券的请求

router.post("/getAMessage.do",commentController.getAMessage); // 获取已发布的消息
router.post("/getUnAMessage.do",commentController.getUnAMessage); // 获取未发布的消息
router.post("/deleteMessage.do",commentController.deleteMessage); // 删除消息的请求
router.post("/updateMessage.do",commentController.updateMessage); // 修改消息的请求

// ================================冯小龙专用分割线===============================



// ================================佳文专用分割线===============================
router.get("/goodxx",goodController.getAll);
router.get("/goodxxxx",goodController.getAll2);
router.get("/walala.do",goodController.walala);
router.get("/getGoodData.do",goodController.getGoodData);
router.get("/getGoodPic.do",goodController.getGoodPic);
router.get("/getGoodPic2.do",goodController.getGoodPic2);
router.get("/getGoodPic2.do",goodController.getGoodPic2);
router.get("/xiugaidata.do",goodController.xiugai);
router.post("/addadd.do",goodController.addadd);
router.post("/bigmorepicupdate",function(){
    console.log("上传成功")
});

// router.get("/hualala.do",goodController.hualala);
// ================================佳文专用分割线===============================


//============================activity ejs拦截====================================
router.get("/activity.do",activityController.getActivity);
router.get("/activePing.do",activityController.getActivePing);
router.get("/activityphps.do",activityController.activephps);
router.get("/activityspecial.do",activityController.activespecial);
router.get("/activitytrademark.do",activityController.activetrademark);
//用户评论懒加载
router.get("/getLanJiaZai.do",activityController.getLanJiaZai);
//会员 ejs
router.get("/mydiscounts.do",MyDisCount.getMyDisCount);
router.get("/mydiscount.do",MyDisCount.getMyDisCountdis);
//消息推送ejs
router.get("/Myinformation.do",activityController.Myinformation);

//============vue===================================
router.get("/getVueActivity.do",activityController.getVueActivity);
router.get("/getVueActivityTrue.do",activityController.getVueActivityTrue);
router.get("/getVueActivityUnsent.do",activityController.getVueActivityUnsent);
router.get("/sentVueActivity.do",activityController.sentVueActivity);  //发送数据

//文件的上传的拦截  //获取图片数据
// router.post("/uploadImg.do",uploadHlr.array("myUpLoad"),activityController.uploadfile);
// router.post("/uploadImg.do",uploadHlr.array("myUpLoad"),activityController.uploadfile);
router.get("/uploadHandleEditSave.do",activityController.uploadHandleEditSave);
router.post('/uploadImg.do',uploadHlr.array("myUpLoad"),activityController.uploadfile);
// router.post('/xiaochengxuimg.do',uploadHlr.array("myUpLoad"),activityController.uploadfile); // 小程序上传图片的测试

router.get("/getVuePhyStore.do",activityController.getVuePhyStore);
router.get("/deleteVueActivity.do",activityController.deleteVueActivity);
router.get("/deleteVuePhyStore.do",activityController.deleteVuePhyStore);
router.get("/getVueSpecial.do",activityController.getVueSpecial);
router.get("/deleteVueSpecial.do",activityController.deleteVueSpecial);
router.get("/getVueTrademark.do",activityController.getVueTrademark);
router.get("/deleteVueTrademark.do",activityController.deleteVueTrademark);
//vue中的search
router.get("/searchVueActivity.do",activityController.searchVueActivity);
//插入数据
router.get("/activityInsert.do",activityController.activityInsert);

//后台的用户登录时的拦截
router.post("/FBMSUser.do",activityController.FBMSUser);
router.post("/FBMSUserTwo.do",activityController.FBMSUserTwo);


// ==========================以上hlr的，不许动=======================================

router.get("/baibiandingzhi.do",baibianController.baibianyemian);
router.get("/getbaibian.do",baibianController.getbaibian);
router.post("/geren.do",baibianController.getgeren);
router.post("/upload.do",baibianController.upload);

router.post("/geren1.do",baibianController.upload1);
router.post("/geren2.do",baibianController.upload2);
router.post("/geren3.do",baibianController.upload3);
router.post("/upload1.do",baibianController.getgeren1);
router.post("/dizhi.do",baibianController.dizhi1);
router.post("/upload2.do",baibianController.getgeren2);
router.post("/upLoad11.do",baibianController.upLoad11);



router.post("/shopCar.do",baibianController.shopCar);
router.post("/shopCar1.do",baibianController.shopCar1);
router.post("/shopCar2.do",baibianController.shopCar2);/*删除商品表的数据*/
router.post("/shopCar3.do",baibianController.shopCar3);/*为订单表添加数据*/
router.post("/shopCar4.do",baibianController.shopCar4);/*为获取订单表的数量*/
router.post("/shopCar5.do",baibianController.shopCar5);/*添加产品列表数据*/



router.post("/payconfirm.do",baibianController.payconfirm);/*订单页面加载，获取数据*/
router.post("/payconfirm1.do",baibianController.payconfirm1);/*订单页面加载，获取地址数据*/
router.post("/payconfirm2.do",baibianController.payconfirm2);/*订单页面加载，获取地址数据*/
router.post("/payconfirm3.do",baibianController.payconfirm3);/*订单页面加载，获取地址数据*/
router.post("/payconfirm4.do",baibianController.payconfirm4);/*订单页面加载，获取地址数据*/



router.post("/Myorder.do",baibianController.Myorder);/*我的订单页面加载，获取数据*/
router.post("/Myorderb.do",baibianController.Myorderb);/*我的订单页面加载，获取数据*/
router.post("/Myorder1.do",baibianController.Myorder1);/*我的订单页面加载，获取地址数据*/
router.post("/Myorder2.do",baibianController.Myorder2);/*我的订单页面加载，获取图片数据*/
router.post("/Myordera.do",baibianController.Myordera);/*我的订单页面加载，获取图片数据*/
router.post("/Myorderb11.do",baibianController.Myorderb11);/*我的订单页面加载，获取图片数据*/
router.post("/lcgoodxxxx1.do",baibianController.lcgoodxxxx1);/*我的订单页面加载，获取图片数据*/
router.post("/Mycollect1.do",baibianController.Mycollect1);/*我的订单页面加载，获取图片数据*/


router.post("/harp1.do",baibianController.harp1);/*获取商品id*/
router.post("/harp2.do",baibianController.harp2);/*为购物车添加数据*/

//================================================后台VUE获取数据路由，嘻嘻,楼上的不许改哟===============================


router.post("/goPay1.do",baibianController.goPay1);/*为购物车添加数据*/


//=================================================小键,订单管理路由，神魔恋=============================
router.get("/getVueMyorderAll.do",vueController.MyorderAll);//全部订单拦截
router.get("/getVueMyorderUnfill.do",vueController.MyorderUnfill);//待发货订单拦截
router.get("/getVueMyorderSent.do",vueController.MyorderSent);//已发货拦截
router.get("/getVueMyorderTake.do",vueController.MyorderTake);//已发货拦截
router.get("/updateVueorder.do",vueController.MyorderUpdate);//发货请求拦截
router.get("/xiugaiVueorder.do",vueController.MyorderXiugai);//编辑请求拦截
router.post("/getVueuser.do",vueController.MyuserAll);//获取所有的用户
router.get("/updateVueuser.do",vueController.MyuserUpdate);//更新用户数据
router.get("/searchUser.do",vueController.MyuserSearch);//用户搜索
router.get("/getAnyuser.do",vueController.Myuserget);//用户具体检索


/*===============================超哥来了*/
router.get("/getVueBoxing.do",baibianController.getVueBoxing);







module.exports = router;

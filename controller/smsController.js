const AV = require("leancloud-storage");  // 引入短信模块

const APP_ID="rjQryaRfqdVLCkI0pFwPvzjl-gzGzoHsz";
const APP_KEY="qCAB0E74mJTUuroF2Y3MIu18";

AV.init({
    appId:APP_ID,
    appKey:APP_KEY
});

const smsController = {
    // 发送短信
    sendCode(req,resp){
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber: req.body.phone,
            name: 'comfort家居',//正在使用XXX服务
            op:'注册',//进行XXX（操作）
            ttl: 10  //验证码的有效时间，单位：分钟
        }).then(function(){
            //调用成功
            resp.send("验证码发送成功");
        }, function(err){
            //调用失败
            resp.send("验证码发送失败")
        });
    },
    // 验证短信
    verifyCode(req,resp){
        AV.Cloud.verifySmsCode(req.body.code, req.body.phone)
            .then(function(){
                //验证成功
                resp.send("验证成功")
            }, function(err){
                //验证失败
                resp.send(err);
            });
    }
};

module.exports = smsController;
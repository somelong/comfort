const express = require("express");
const logger = require("morgan"); //日志操作输出
const favicon = require("serve-favicon"); //网页小图标
const bodyParser = require("body-parser"); //处理post数据
// ========================session&cookie===================================
const session = require("express-session");
const cookie = require("cookie-parser");
// ============================上传下载==========================================


const path = require("path"); //处理文件路径的模块
const app = express();
const router = require("./routes/allRouter.js");

// ============================session&cookie配置=============================
app.use(cookie());
app.use(session({
    name:"demo148",
    secret:"12121212",//密匙
    cookie:{
        maxAge:1000*60*60*24*360,  //以毫秒为单位的时间
    },
    resave:true, // 刷新页面或者重新打开重新计算失效时间
    roolling:true, // 保存更新
    saveUninitialized:true // 未初始化的cookie要不要保存
}));

app.use(logger("dev")); //以开发者的模式开启日志输出
app.use(favicon(__dirname+"/dist/images/favicon.png"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(router);
app.set("views",path.join(__dirname+"/views")); //配置视图文件文件
// 视图解析的引擎 Pug/jade
app.set("view engine","ejs"); // ejs 不能直接预览  只能通过服务器访问

app.use(express.static(__dirname+"/dist"));
app.use(express.static(__dirname+"/dist/pages"));
app.use((req,resp)=>{
    resp.status(404).sendFile(path.join(__dirname,"/dist","404.html"));
});

app.set("port",8088).listen(8088,()=>{
    console.log("服务器已开启,端口号:"+app.get("port"));
});

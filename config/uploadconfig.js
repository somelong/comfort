
const multer = require("multer"); // 引入模块
// 文件上传的模块配置 storage
const storage = multer.diskStorage({
    destination:function (req,file,cb) {
        // console.log(file);
        cb(null,"./public/uploads"); //保存上传文件的路径
    },
    // 给我们上传的文件重命名的方法
    filename:function (req,file,cb) {
        let fileFormat = (file.originalname).split("."); // 把拿到的文件名称以.拆分
        // 重命名
        // cb(null,file.originalname); // 缺点：相同的文件名不能上传

        // 重命名2
        // 拿到当前的文件名  然后在后面拼接上当前的时间避免名字重复
        cb(null,fileFormat[fileFormat.length-2]+"-"+Date.now()+"."+fileFormat[fileFormat.length-1]);
    }
});

const upload = multer({
    storage:storage
});
module.exports = upload;


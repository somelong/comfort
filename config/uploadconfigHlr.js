const  multer=require("multer");//引入文件上传模块的配置
const storage=multer.diskStorage({
    destination:function(request,file,callback){
        // console.log(file);
        callback(null,"./dist/uploads")//保存上传文件的路径
        // callback(null,"./dist/uploads")//小程序上传图片的测试
},
//给上传文件重命名
    filename:function (request,file,callback) {
         var fileFormat=(file.originalname).split(".");
         //重命名
         // callback(null,file.originalname);
        //为了防止第二次上传重命名，因此需要拼字段
        callback(null,fileFormat[0]+"-"+Date.now()+"."+fileFormat[fileFormat.length-1])
    }
});

const upload=multer({
    storage:storage
});
module.exports=upload;
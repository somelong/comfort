const dbpool = require("../config/dbpoolConfig.js");

const uploadController = {
    uploadFile(req,resp){
        console.log("============uloadcontroller=========");
        console.log(req.file.filename);
        // let pathname="uploads/"+req.file.filename;
        // dbpool.connect("INSERT INTO fileTest(filedescribe,filepath) VALUES(?,?)",
        //     ["ddd",pathname],
        //     (err,data)=>{
        //         resp.send("上传成功")
        //     }
        // )
    },
    getImage(req,resp){
        dbpool.connect("select * from fileTest where filedescribe=?",
            ["ddd"],
            (err,data)=>{
                resp.send(data);
            })
    },
    uploadFiles(req,resp){
        console.log("多个文件的上传");
        console.log("upload:"+req);
        for(let i=0;i<req.files.length;i++){
            let pathname="uploads/"+req.files[i].filename;
            dbpool.connect("INSERT INTO fileTest(filedescribe,filepath) VALUES(?,?)",
                ["滑稽",pathname],
                (err,data)=>{
                    // resp.send("上传成功")
                }
            )
        }
    }

};

module.exports = uploadController;
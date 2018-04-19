
const bananerDao = require("../dao/bananerDao.js");  // 获取dao层
// const bananerDaoa = require("../dao/bananerDaoa.js");  // 获取dao层

const bananerController = {
    bananerdataa(req,resp){  // 调用dao层方法  获取数据
        // console.log("控制层收到任务，传递给dao层");
        // console.log(req.query);
        bananerDao.bananerdata()
            .then(function (data) {
                console.log(data.length)
                if (data.length > 0){
                    // console.log("控制层收到数据，返回到页面");
                    // console.log(data);  // 判断是否有数据  如果有 就返回数据
                    resp.send(data);
                }else {
                    resp.send(false);  // 判断是否有数据  没有 就返回false
                }
            })
    },
    bananerdataaa(req,resp){
        console.log(req.body.params.ps_ids);
        bananerDao.bananerdatada([req.body.params.ps_ids])
            .then(function (data) {
                if (data.length > 0){
                    resp.send(data);
                }else {
                    resp.send(false);  // 判断是否有数据  没有 就返回false
                }
            })

    },
//    =====================================================
    Add(req,resp){
        bananerDao.AddDao([req.body.params.ps_ids])
            .then(function (data) {
                if (data.length > 0){
                    resp.send(data);
                }else {
                    resp.send(false);  // 判断是否有数据  没有 就返回false
                }
            })

    }
};


module.exports = bananerController;

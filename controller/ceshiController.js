const ceshiDao = require("../dao/ceshiDao.js");  // 获取dao层

const ceshiController = {
    ceshiData(req,resp){  // 调用dao层方法  获取数据
        // console.log("控制层收到任务，传递给dao层");
        ceshiDao.ceshiData()
            .then(function (data) {
            if (data.length > 0){
                // console.log("控制层收到数据，返回到页面");
                // console.log(data);  // 判断是否有数据  如果有 就返回数据
                resp.send(data);
            }else {
                resp.send(false);  // 判断是否有数据  没有 就返回false
            }
        })
    },

    //==========================================================
    cpdele(req,resp){
        console.log(req.body.params.p_id);
        ceshiDao.cpde([req.body.params.p_id])
            .then(function (data) {
                if (data.length > 0){
                    resp.send(data);
                }else {
                    resp.send(false);  // 判断是否有数据  没有 就返回false
                }
            })

    }
};


module.exports = ceshiController;
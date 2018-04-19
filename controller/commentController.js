const commentDao = require("../dao/commentDao.js");

const commentController = {
    getAComment(req,resp){  // 获取所有通过审核的评论的方法
        commentDao.getAComment().then(function(data){
            resp.send(data);
        })
    },
    getNoAComment(req,resp){   // 获取所有未通过审核的评论的方法
        commentDao.getNoAComment().then(function(data){
            resp.send(data);
        })
    },
    deleteUserComment(req,resp){  // 删除一条评论的方法
        let c_id = req.body.params.c_id;
        commentDao.deleteUserComment([c_id]).then(function(data){
            resp.send(data);
        })
    },
    updateUserComment(req,resp){  // 修改一条评论为已通过
        let c_id = req.body.params.c_id;
        commentDao.updateUserComment([c_id]).then(function(data){
            resp.send(data);
        })
    },


    // 优惠券的模块
    getADiscount(req,resp){  // 获取已发布的优惠券
        commentDao.getADiscount().then(function(data){
            resp.send(data);
        })
    },
    getUnADiscount(req,resp){  // 获取未发布的优惠券
        commentDao.getUnADiscount().then(function(data){
            resp.send(data);
        })
    },
    deleteDiscount(req,resp){  // 删除优惠券的方法
        let c_id = req.body.params.diss_id;
        commentDao.deleteDiscount([c_id]).then(function(data){
            resp.send(data);
        })
    },
    updateDiscount(req,resp){  // 修改优惠券状态的方法
        let c_id = req.body.params.diss_id;
        let dd = req.body.params.dd;
        console.log(dd);
        commentDao.updateDiscount([dd,c_id]).then(function(data){
            resp.send(data);
        })
    },


    // 消息的模块
    getAMessage(req,resp){  // 获取已发布的优惠券
        commentDao.getAMessage().then(function(data){
            resp.send(data);
        })
    },
    getUnAMessage(req,resp){  // 获取未发布的优惠券
        commentDao.getUnAMessage().then(function(data){
            resp.send(data);
        })
    },
    deleteMessage(req,resp){  // 删除优惠券的方法
        let c_id = req.body.params.is_id;
        commentDao.deleteMessage([c_id]).then(function(data){
            resp.send(data);
        })
    },
    updateMessage(req,resp){  // 修改优惠券状态的方法
        let c_id = req.body.params.is_id;
        let dd = req.body.params.dd;
        commentDao.updateMessage([dd,c_id]).then(function(data){
            resp.send(data);
        })
    },
};

module.exports = commentController;
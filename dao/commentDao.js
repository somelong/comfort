const dbpool = require("../config/dbpoolUser.js");


const commentDao = {
    getAComment(){
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT c.c_id,c.c_img,c.c_text,u.u_name,p.p_img,c.c_state FROM (COMMENT c JOIN USER u ON c.u_phone = u.u_phone) JOIN productView p ON p.p_id = c.p_id WHERE c.c_state = '已审核'",
                [],(err,data)=>{
                if (err){
                    reject(err);
                }else {
                    resolve(data);
                }
            })
        })
    },
    getNoAComment(){
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT c.c_id,c.c_img,c.c_text,u.u_name,p.p_img,c.c_state FROM (COMMENT c JOIN USER u ON c.u_phone = u.u_phone) JOIN productView p ON p.p_id = c.p_id WHERE c.c_state = '未审核'",
                [],(err,data)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    deleteUserComment(params){ // 删除一条评论的方法
        return new Promise((resolve, reject) => {
            dbpool.connect("DELETE FROM COMMENT WHERE c_id = ?",
                params,(err,data)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    updateUserComment(params){ // 修改一条评论为已通过
        return new Promise((resolve, reject) => {
            dbpool.connect("UPDATE COMMENT SET c_state = '已审核' WHERE c_id = ?",
                params,(err,data)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },

    // 优惠券模块
    getADiscount(){ // 获取所有已发送的优惠券模块
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT ds.diss_id,ds.diss_date,d.dis_type,d.dis_money,d.dis_usermoney,d.dis_date,m.m_grade FROM (discounts ds JOIN discount d ON ds.dis_id = d.dis_id) JOIN member m ON ds.dis_mid = m.m_id WHERE ds.dis_state = '已发送'",
                [],(err,data)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    getUnADiscount(){ // 获取所有未发送的优惠券模块
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT ds.diss_id,ds.diss_date,d.dis_type,d.dis_money,d.dis_usermoney,d.dis_date,m.m_grade FROM (discounts ds JOIN discount d ON ds.dis_id = d.dis_id) JOIN member m ON ds.dis_mid = m.m_id WHERE ds.dis_state = '未发送'",
                [],(err,data)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    deleteDiscount(params){ // 删除优惠券的方法
        return new Promise((resolve, reject) => {
            dbpool.connect("DELETE FROM discounts WHERE diss_id = ?",
                params,(err,data)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    updateDiscount(params){ // 修改优惠券的状态的方法
        return new Promise((resolve, reject) => {
            dbpool.connect("UPDATE discounts SET dis_state = '已发送', diss_date = ? WHERE diss_id = ?",
                params,(err,data)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },


    // 消息的模块
    getAMessage(){ // 获取所有已发送的优惠券模块
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT infs.is_id,infs.is_date,inf.i_type,inf.i_MessageContent,m.m_grade FROM (informations infs JOIN information inf ON infs.i_id = inf.i_id) JOIN member m ON m.m_id = infs.is_mid WHERE infs.is_steat = 'true'",
                [],(err,data)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    getUnAMessage(){ // 获取所有未发送的优惠券模块
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT infs.is_id,inf.i_type,infs.is_date, inf.i_MessageContent,m.m_grade FROM (informations infs JOIN information inf ON infs.i_id = inf.i_id) JOIN member m ON m.m_id = infs.is_mid WHERE infs.is_steat = 'false'",
                [],(err,data)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    deleteMessage(params){ // 删除优惠券的方法
        return new Promise((resolve, reject) => {
            dbpool.connect("DELETE FROM informations WHERE is_id = ?",
                params,(err,data)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    updateMessage(params){ // 修改优惠券的状态的方法
        return new Promise((resolve, reject) => {
            dbpool.connect("UPDATE informations SET is_steat = 'true', is_date = ? WHERE is_id = ?",
                params,(err,data)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    }


};

module.exports = commentDao;
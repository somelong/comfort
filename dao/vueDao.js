const dbpool=require("../config/dbpoolUser")
const vueModel={
    unfillDao(){//待发货
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM ((orderbuy AS a JOIN orderbuyproduct AS b ON a.o_id = b.o_or) JOIN productView AS c ON b.o_goodid = c.p_id) JOIN USER AS d ON d.u_phone = a.user_phone WHERE o_state = '待发货'",
                [],(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err.message)
                }
            })
            console.log(111112)
        })
    },
    sentDao(){//已发货
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM ((orderbuy AS a JOIN orderbuyproduct AS b ON a.o_id = b.o_or) JOIN productView AS c ON b.o_goodid = c.p_id) JOIN USER AS d ON d.u_phone = a.user_phone WHERE o_state = '已发货'",
                [],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err.message)
                    }
                })
        })
    },
    allDao(){//全部订单
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM ((orderbuy AS a JOIN orderbuyproduct AS b ON a.o_id = b.o_or) JOIN productView AS c ON b.o_goodid = c.p_id) JOIN USER AS d ON d.u_phone = a.user_phone",
                [],(err,data)=>{
                if(!err){
                    resolve(data)
                }else {
                    reject(err.message)
                }
                })
        })
    },
    takeDao(){//已收货订单
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM ((orderbuy AS a JOIN orderbuyproduct AS b ON a.o_id = b.o_or) JOIN productView AS c ON b.o_goodid = c.p_id) JOIN USER AS d ON d.u_phone = a.user_phone WHERE o_state = '已收货'",
                [],(err,data)=>{
                if(!err){
                    resolve(data)
                }else {
                    reject(err.message)
                }
                })
        })
    },
    updateDao(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("UPDATE orderbuy SET o_state='已发货' WHERE o_id= ?",
                params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else {
                    reject(err.message)
                }
                })
        })
    },
    xiugaiDao(params){
        return new Promise((resolve,reject)=>{
            console.log(params);
            dbpool.connect("UPDATE ((orderbuy AS a JOIN orderbuyproduct AS b ON a.o_id = b.o_or) JOIN productView AS c ON b.o_goodid = c.p_id) JOIN USER AS d ON d.u_phone = a.user_phone SET a.o_phone = ? ,a.o_waybill = ?,a.o_address = ? WHERE d.u_name= ?",
                params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else {
                    reject(err.message)
                }
                })
        })
    },
    userAll(){//获取所有用户信息
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM (usermember INNER JOIN USER ON user.u_id=usermember.u_id)INNER JOIN member ON usermember.m_id=member.m_id",
                [],(err,data)=>{
                if(!err){
                    resolve(data)
                }else {
                    reject(err.message);
                }
                })
        })
    },
    userUpdate(params){//编辑用户信息
        return new Promise((resolve,reject)=>{
            console.log(params);
            dbpool.connect("UPDATE ((usermember AS a INNER JOIN USER AS b ON b.u_id=a.u_id)INNER JOIN member AS c ON a.m_id=c.m_id) SET b.birthday = ?,b.u_phone = ?,b.u_sex = ?,b.ui_weixin = ?,b.ui_weibo = ?,c.m_grade = ?,c.m_equity = ? WHERE b.u_name = ?",
                params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else {
                    reject(err.message)
                }
                })
        })
    },
    userSearch(params){
        return new Promise((resolve,reject)=>{
            console.log(params)
            dbpool.connect("SELECT * FROM (usermember as a INNER JOIN USER as b ON b.u_id=a.u_id)INNER JOIN member as c ON a.m_id=c.m_id where b.u_id like ? or b.u_name like ?",
                params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else {
                    reject(err.message)
                }
                })
        })
    },
    usergetAny(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM (usermember AS a INNER JOIN USER AS b ON b.u_id=a.u_id)INNER JOIN member AS c ON a.m_id=c.m_id where c.m_grade = ?",
                params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err.message)
                }
                })
        })
    }
};
module.exports=vueModel;
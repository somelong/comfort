const dbpoolUser = require("../config/dbpoolUser.js");

const userDao = {
    // 验证用户的手机号是否注册
    verifyUser(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("select * from user where u_phone = ?"
            ,params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    // 添加一个用户
    addUser(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("insert into user (u_phone,u_passwrod) values (?,?)",
                params,(err,data)=>{
                    if (!err){
                        resolve(true);
                    }else {
                        reject(err);
                    }
                })
        })
    },
    // 登陆
    loginUser(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("select * from user where u_phone = ? and u_passwrod = ?"
                ,params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    gerenzhong(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("select * from user where u_phone = ?"
                ,params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    myupload(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("UPDATE USER SET u_name=?, u_sex=? ,u_birthday=? ,u_img=? WHERE  u_phone=?"
                ,params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })

    },
    // 重置用户的密码
    updataUser(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("update user set u_passwrod = ? where u_phone = ?"
                ,params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve("修改成功");
                    }
                })
        })

    },
    myupload1(){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("select * from provinces",
                [],(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    myupload2(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("select * from cities where provinceid=?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    myupload3(params){
        console.log(params)
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("select * from areas where cityid=?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    myupload4(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("insert into address (a_sheng,a_shi,a_xian,a_detail,ua_name,ua_phone,ua_id) values (?,?,?,?,?,?,?)",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    dizhi1(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("select * from address where ua_id=?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    dizhi2(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("select * from address where a_id=?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    upLoad11(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("UPDATE address SET a_sheng=?, a_shi=? ,a_xian=? ,a_detail=? ,ua_name=? ,ua_phone=? ,ua_id=?WHERE  a_id=?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    shopCar(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("SELECT  * FROM shopCar s JOIN productView p ON s.good_id = p.p_id WHERE s.user_id = ?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    shopCar1(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("update shopCar set good_num = ? where s_id = ?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    shopCar2(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("DELETE FROM shopCar WHERE s_id = ?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    shopCar3(params){/*为订单表添加数据*/
        console.log(params);
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("insert into orderbuy (user_phone,o_number,o_zongjia,o_youhui,o_state) values (?,?,?,?,?)",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    /*为获取订单表的数量*/
    shopCar4(){/*为订单表添加数据*/
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("select * from orderbuy",
                [],(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    shopCar5(params){/*为订单表添加数据*/
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("insert into orderbuyproduct (o_or,o_goodid,o_goodNum,o_goodTime) values (?,?,?,?)",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    payconfirm(params){/*订单页面加载，获取数据*/
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("SELECT * FROM orderbuy a JOIN orderbuyproduct b ON a.o_id=b.o_or JOIN productview c ON b.o_goodid=c.p_id WHERE a.user_phone=? AND a.o_id=?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    /*页面加载获取地址的时候*/
    payconfirm1(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("SELECT * FROM address where ua_id=? ",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    payconfirm2(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("SELECT  umdis.*,discount.dis_type,discount.dis_money,discount.dis_usermoney,discount.dis_date FROM (SELECT um.u_name,um.u_id, um.m_id,um.m_grade,umdiscount.dis_id,umdiscount.umd_state FROM ((SELECT user.u_name,user.u_id,member.* FROM (usermember INNER JOIN USER ON user.u_id=usermember.u_id)INNER JOIN member ON usermember.m_id=member.m_id) AS um  INNER JOIN umdiscount ON umdiscount.m_id=um.m_id))AS umdis INNER JOIN discount ON umdis.dis_id=discount.dis_id WHERE umdis.u_id=? ",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    payconfirm3(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("UPDATE orderbuy SET o_zongjia=?, o_youhui=?WHERE  user_phone=? and o_id=?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    payconfirm4(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("UPDATE orderbuy SET o_address=?, user_note=?, invoice=? WHERE  user_phone=? and o_id=?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    Myorder(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("SELECT * FROM orderbuy where user_phone =? and o_state=?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        console.log(data);
                        console.log("这里是数据");
                        resolve(data);
                    }
                })
        })
    },
    Myorderb(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("SELECT * FROM orderbuy where user_phone =?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    Myordera(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("SELECT  c.p_img , c.p_subject , c.p_color,a.o_number,a.o_address,c.p_price,b.o_goodNum,a.o_id,c.p_id FROM orderbuy a JOIN orderbuyproduct b ON a.o_id = b.o_or JOIN productview c ON c.p_id = b.o_goodid WHERE a.user_phone=? AND (a.o_state = ? OR a.o_state = '已发货')",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    Myorderb11(params){
        console.log(params);
        console.log("添加评论");
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("insert into COMMENT (c_img,c_text,u_id,p_id,u_phone) values (?,?,?,?,?)",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    Myorder1(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("SELECT * FROM address where ua_id =? ",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    Myorder2(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("SELECT  * FROM orderbuyproduct a JOIN productview b ON a.o_goodid = b.p_id WHERE a.o_or = ? ",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    harp1(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("SELECT p_id FROM productView WHERE p_img =?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    harp2(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("insert into shopcar (user_id,good_id,good_num) values (?,?,?)",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    lcgoodxxxx1(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("insert into collect_u (p_id,u_id) values (?,?)",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    Mycollect1(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("SELECT * FROM collect_u a JOIN productview b ON a.p_id=b.p_id WHERE u_id =?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    goPay1(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("UPDATE orderbuy SET o_state=? WHERE o_id = ?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    },
    getVueBoxing(params){
        return new Promise((resolve, reject) => {
            dbpoolUser.connect("SELECT  b.u_name ,c.o_number ,f.p_img ,d.c_text ,d.c_img FROM details a JOIN USER b ON a.u_id = b.u_id JOIN orderbuy c ON c.user_phone = b.u_phone JOIN COMMENT d ON d.c_id = a.c_id JOIN orderbuyproduct e ON e.o_or = c.o_id JOIN productview f ON f.p_id = e.o_goodid",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(data);
                    }
                })
        })
    }
};


module.exports = userDao;
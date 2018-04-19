const dbpool=require("../config/dbpoolJiaWen");

const MyDisCountModel={

    userPhone(params){
        return new Promise((resolve, reject)=>{
            dbpool.connect("select u_id from user where u_phone=?",[params],(err,data)=>{
                resolve(data)

            })
        } )
    },
    MyDisCount(params){

        return new Promise((resolve, reject)=>{
            dbpool.connect("select  umdis.*,discount.dis_type,discount.dis_money,discount.dis_usermoney,discount.dis_date from (select um.u_name,um.u_id, um.m_id,um.m_grade,umdiscount.dis_id,umdiscount.umd_state from ((select user.u_name,user.u_id,member.* from (usermember inner join user on user.u_id=usermember.u_id)inner join member on usermember.m_id=member.m_id) as um  inner join umdiscount on umdiscount.m_id=um.m_id))as umdis inner join discount on umdis.dis_id=discount.dis_id where umdis.u_id=?",[params],(err,data)=>{
                // console.log(data)
                resolve(data)

            })
        } )
    },

};
module.exports=MyDisCountModel;
// const dbpool=require("../config/dbpoolConfig");
const dbpool=require("../config/dbpoolJiaWen");
const activityModel={
    getactivity(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from activity where ac_state='true'",[],(err,data)=>{
                resolve(data);
                console.log(data.length)
            })
        })
    } ,
    getactivityTrue(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from activity where ac_state='true'",[],(err,data)=>{
                resolve(data);
                console.log("sent:"+data.length)
            })
        })
    } ,
    VueActivityUnsent(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from activity where ac_state='false' ",[],(err,data)=>{
                resolve(data);
                console.log("un:"+data.length)
            })
        })
    } ,
    sentVueAc(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("update activity set ac_state='true'  where ac_id=?",[params],(err,data)=>{
                resolve(data);
                console.log("un:"+data.length)
            })
        })
    },
    getActivePing(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select  comment.*,u_img,u_name,a_sheng from ((details inner join comment on details.c_id=comment.c_id)inner join user on details.u_id=user.u_id ) inner join address on details.a_id=address.a_id limit 0,5",
                [],(err,data)=>{
                resolve(data);
                console.log(data);
                })
        })
    },
    deleteActivity(params){/*后台管理系统的活动删除语句*/
        console.log(params);
        return new Promise((resolve, reject) => {
            dbpool.connect("delete from activity where ac_id=? ",[params],(err,data)=>{
                resolve(data);
            })
        })
    },
    deletePhyStore(params){/*后台管理系统的实体店删除语句*/
        console.log(params);
        return new Promise((resolve, reject) => {
            dbpool.connect("delete from  phystore where ps_id=? ",[params],(err,data)=>{
                resolve(data);
            })
        })
    },
    deleteSpecial(params){/*后台管理系统的专辑删除语句*/
        console.log(params);
        return new Promise((resolve, reject) => {
            dbpool.connect("delete from  special where sp_id=?",[params],(err,data)=>{
                resolve(data);
            })
        })
    },
    deleteTrademark(params){/*后台管理系统的专辑删除语句*/
        console.log(params);
        return new Promise((resolve, reject) => {
            dbpool.connect("delete from  trademark where tm_id=?",[params],(err,data)=>{
                resolve(data);
            })
        })
    },
    acphps(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from phystore",
                [],(err,data)=>{
                    resolve(data);
                    console.log(data);
                })
        })
    },
    acspecial(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from special",
                [],(err,data)=>{
                    resolve(data);
                    console.log(data);
                })
        })
    },
    actrademark(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from trademark",
                [],(err,data)=>{
                    resolve(data);
                    console.log(data);
                })
        })
    },
    LanJiaZai(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select  comment.*,u_img,u_name,a_sheng from ((details inner join comment on details.c_id=comment.c_id)inner join user on details.u_id=user.u_id ) inner join address on details.a_id=address.a_id limit 3,6",
                [],(err,data)=>{
                    resolve(data);
                    console.log("lanren:"+data);
                })
        })
    },
//    消息推送的数据处理
    myinfo(params){
        console.log("infoID:"+params);
        return new Promise((resolve, reject) =>{
            dbpool.connect("select user.u_id,information.*,userinfo.ui_isRead from (userinfo inner join information on userinfo.i_id=information.i_id) inner join user on userinfo.u_id=user.u_id where user.u_id=?",[params],(err,data)=>{
                // console.log(data);
                resolve(data)
            })
        })
    },
    searchAC(params){
        console.log(params);

        return new Promise((resolve, reject) => {
            dbpool.connect("select * from activity where ac_zt like ? or ac_type like ?",[params,params],(err,data)=>{
                // reject(err);
                // console.log(data);
                resolve(data);

            })
        })
    },
//    图片插入到数据库中
    savePathName(params){
        return new Promise((resolve, reject) => {
            dbpool.connect("update activity set ac_img=?,ac_zt=?,ac_ft=?  where ac_id=?",params,(err,data)=>{
                resolve(data)
            })
        })
    },
//    插入数据
    acInsert(params){
        return new Promise((resolve, reject) => {
            dbpool.connect("insert into activity values(null,?,?,?,?,?,?,?);",params,(err,data)=>{
                resolve(data);
                // console.log("插入成功！");
                // console.log(err)
            })
        })

    },
//    后台管理系统的登录判断
    FBMSUserDao(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from usersystem where u_name=? and u_password=?",params,(err,data)=>{
                resolve(data);

            })
            })
    }




};
module.exports=activityModel;

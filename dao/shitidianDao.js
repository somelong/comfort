const shitiPool = require("../config/dbpoolUser.js"); //

const shitiDao = {
    shitidata(){
        // console.log("dao层收到任务，使用连接池查询数据----------");
        return new Promise((resolve,reject)=>{
            shitiPool.connect("select * from phystoreshopping JOIN phystore ON phystoreshopping.ps_id = phystore.ps_id",  // sql语句
                [],(err,data)=>{   // []是参数  然后是回调函数
                    if(err){
                        reject(err);  // 如果错误执行的函数  -- 返回错误信息
                    }else {
                        // console.log("dao层返回数据到控制层------------"+data);
                        resolve(data);  // 如果正确执行的函数 -- 返回获取到的数据
                    }
                })
        })
    },










    stide(params){
        // console.log("dao层收到任务，使用连接池查询数据----------------------------------------");
        return new Promise((resolve,reject)=>{
            shitiPool.connect("delete from phystoreshopping where ps_id = ? ",  // sql语句
                params,(err,data)=>{   // []是参数  然后是回调函数
                    if(err){
                        reject(err);  // 如果错误执行的函数  -- 返回错误信息
                    }else {
                        // console.log("dao层返回数据到控制层"+data);
                        resolve(data);  // 如果正确执行的函数 -- 返回获取到的数据
                    }
                })
        })
    }
};

module.exports = shitiDao;
const redianPool = require("../config/dbpoolUser.js"); //

const redianDao = {
    rediandata(){
        // console.log("dao层收到任务，使用连接池查询数据");
        return new Promise((resolve,reject)=>{
            redianPool.connect("SELECT * FROM acticityshopping JOIN activity ON acticityshopping.ac_id = activity.ac_id",  // sql语句
                [],(err,data)=>{   // []是参数  然后是回调函数
                    if(err){
                        reject(err);  // 如果错误执行的函数  -- 返回错误信息
                    }else {
                        // console.log("dao层返回数据到控制层"+data);
                        resolve(data);  // 如果正确执行的函数 -- 返回获取到的数据
                    }
                })
        })
    },
    // =================================
    rediande(params){
        // console.log("dao层收到任务，使用连接池查询数据----------------------------------------");
        return new Promise((resolve,reject)=>{
            redianPool.connect("delete from acticityshopping where ac_id = ? ",  // sql语句
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

module.exports = redianDao;
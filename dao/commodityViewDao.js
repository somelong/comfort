const dbpool = require('../config/dbpoolUser.js');

const commodityViewDao = {
    mainAllCommodityView(params){
        return new Promise((resolve, reject)=>{
            dbpool.connect("SELECT * FROM productView WHERE p_subject = ?",
                params,(err,data)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                });
        })
    },
    minorAllCommodityView(params){
        // console.log(params);
        return new Promise((resolve, reject)=>{
            dbpool.connect("SELECT * FROM productView WHERE p_sort = ?",
                params,(err,data)=>{
                if(err){
                    reject(err);
                }else{
                    console.log(data);
                    resolve(data);
                }
            })
        })
    }

};

module.exports = commodityViewDao;
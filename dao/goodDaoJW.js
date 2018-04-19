const dbpool=require("../config/dbpoolJiaWen");
const goodModel={
    gete_name(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select e_name from s_good where good_id=1",
            params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getc_name(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select c_name from s_good where good_id=1",
            params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    gettdd_pic(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select p_src from s_price where good_id=1 limit 1",
            params,(err,data)=>{
                if(!err){
                    // console.log(data)
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getprice(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT l_price FROM s_price WHERE good_id=1 LIMIT 1",
            params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getcolor(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT distinct color FROM s_price WHERE good_id=1 ",
            params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getstyle(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select distinct style from s_price where good_id=1",
            params,(err,data)=>{
                if(!err){
                    // console.log(data)
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getDesigner(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_src FROM s_pic WHERE pic_src LIKE '%_designer%' AND good_id=1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getaRow1(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_src FROM s_pic WHERE pic_src LIKE '%_a.jpg'",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getbRowData(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_src FROM s_pic WHERE pic_src LIKE '%_b.jpg'",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getshowx(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_src FROM s_pic WHERE good_id=1 AND pic_src LIKE '%_show_%'",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getsceney(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_src FROM s_pic WHERE good_id=1 AND pic_src LIKE '%_scene_%'",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    gete_name1(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select e_name from s_good where good_id=2",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getc_name1(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select c_name from s_good where good_id=2",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    gettdd_pic1(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select p_src from s_price where good_id=2 limit 1",
                params,(err,data)=>{
                    if(!err){
                        // console.log(data)
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getprice1(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT l_price FROM s_price WHERE good_id=2 LIMIT 1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getcolor1(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT distinct color FROM s_price WHERE good_id=2 ",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getstyle1(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select distinct style from s_price where good_id=2",
                params,(err,data)=>{
                    if(!err){
                        // console.log(data)
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getsceney1(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_src FROM s_pic WHERE good_id=2",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    changepic(params){
        console.log(params)
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_src FROM s_pic WHERE pic_src like ?",
                [params],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getgoodalldata(params){
        console.log(params)
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT s_price.*,s_good.e_name,s_good.c_name FROM s_price INNER JOIN s_good ON s_price.good_id=s_good.good_id ",
                [params],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getgoodpic(params){
        console.log(params)
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_src FROM s_pic where good_id=1",
                [params],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getgoodpic2(params){
        console.log(params)
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_src FROM s_pic where good_id=2",
                [params],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    addgoodname(params){
        // console.log("dao"+params)
        return new Promise(function(resolve,reject){
            dbpool.connect("INSERT INTO s_good VALUE (NULL,?,?)",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    addprice(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("INSERT INTO s_price VALUE (3,?,?,?,?,?,?)",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    }
    // changesc(params){
    //     console.log(params)
    //     return new Promise(function(resolve,reject){
    //         dbpool.connect("SELECT p_src FROM s_price WHERE style= ? and color=?",
    //             [params],(err,data)=>{
    //                 if(!err){
    //                     console.log(data)
    //                     resolve(data);
    //                 }else{
    //                     reject(err);
    //                 }
    //             })
    //     })
    // }
};
module.exports= goodModel;

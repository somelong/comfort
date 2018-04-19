const goodDao=require("../dao/goodDaoJW");
const goodxx={
    getAll(request,response){
        let huaji = {};
        goodDao.gete_name([]).then((data)=>{
            let lala = data[0].e_name;
            huaji.e_name = lala;
        });
        goodDao.getc_name([]).then((data)=>{
            let lala = data[0].c_name;
            huaji.c_name = lala;
            // response.render("goodxx",{c_name:lala});
        });
        goodDao.gettdd_pic([]).then((data)=>{
            // console.log(data[0].p_src)
            let lala = data[0].p_src;
            huaji.tdd_pic = lala;
        });
        goodDao.getprice([]).then((data)=>{
            let lala = data[0].l_price;
            huaji.l_price = lala;
        });
            /*循环*/
        goodDao.getcolor([]).then((data)=>{
            huaji.colorImgData=data;
        });
        goodDao.getDesigner([]).then((data)=>{
            let lala = data[0].pic_src;
            huaji.designer=lala;
        });
        goodDao.getaRow1([]).then((data)=> {
            goodDao.getaRow1([]).then((data) => {
                let lala = data[0].pic_src;
                huaji.aRow = lala;
                response.render("goodxx", huaji);
            });
        });
        goodDao.getbRowData([]).then((data)=>{
            let lala=data;
            huaji.bRowData=lala;
        });
        goodDao.getstyle([]).then((data)=>{
            huaji.styleData=data;
        });
        goodDao.getshowx([]).then((data)=>{
            // console.log(data);
            huaji.show_x=data;
        });
        goodDao.getsceney([]).then((data)=>{
            huaji.scene_y=data;
        });
    },
    getAll2(request,response){
        let fuck = {};
        goodDao.gete_name1([]).then((data)=>{
            let lala = data[0].e_name;
            fuck.e_name = lala;
        });
        goodDao.getc_name1([]).then((data)=>{
            let lala = data[0].c_name;
            fuck.c_name = lala;
            // response.render("goodxx",{c_name:lala});
        });
        goodDao.gettdd_pic1([]).then((data)=>{
            let lala = data[0].p_src;
            // console.log(lala)
            fuck.tdd_pic = lala;
        });
        goodDao.getprice1([]).then((data)=>{
            let lala = data[0].l_price;
            fuck.l_price = lala;
        });
        goodDao.getcolor1([]).then((data)=>{
            fuck.colorImgData=data;
        });
        goodDao.getstyle1([]).then((data)=>{
            fuck.styleData=data;
        });
        goodDao.getsceney1([]).then((data)=>{
            goodDao.getsceney1([]).then((data)=>{
                // console.log(data)
                fuck.scene_y=data;
                // console.log(fuck)
                response.render("goodxxxx", fuck);
            });
        });

    },
    walala(request,response){
        var ss="%"+request.query.id+"_a%"
        goodDao.changepic(ss).then((data)=>{
            // console.log("查询结束"+data[0].pic_src)
            response.send(data[0].pic_src)

        })
    },
    getGoodData(request,response){
        goodDao.getgoodalldata([]).then((data)=>{
            // console.log(data)
            response.send(data)
        })
    },
    getGoodPic(request,response){
        goodDao.getgoodpic([]).then((data)=>{
            // console.log(data)
            response.send(data)
        })
    },
    getGoodPic2(request,response){
        goodDao.getgoodpic2([]).then((data)=>{
            // console.log(data)
            response.send(data)
        })
    },
    xiugai(request,response){
        console.log("修改"+request.query.e_name)
    },
    addadd(request,response){
        // console.log(request.body.params.forms)
        console.log(request.body.params.domainss)
        let c_name=request.body.params.forms.cname
        let e_name=request.body.params.forms.ename
        goodDao.addgoodname([c_name,e_name]).then((data)=>{
            for (let i=0;i<request.body.params.domainss.length;i++){
                let a
                if (request.body.params.domainss[i].kuanshi=="1"){
                    a="全幅版三人座"
                }else if(request.body.params.domainss[i].kuanshi=="2"){
                    a="全幅版单人座"
                }else if(request.body.params.domainss[i].kuanshi=="3"){
                    a="全幅版脚墩"
                }else if(request.body.params.domainss[i].kuanshi=="4"){
                    a="精致版三人座"
                }else if(request.body.params.domainss[i].kuanshi=="5"){
                    a="精致版单人座"
                }
                let b
                if(request.body.params.domainss[i].color=="green"){
                    b="原谅绿"
                }else if (request.body.params.domainss[i].color=="red"){
                    b="火烧红"
                }else if (request.body.params.domainss[i].color=="blue"){
                    b="天空蓝"
                }else if (request.body.params.domainss[i].color=="brown"){
                    b="肉桂棕"
                }
                let c=request.body.params.domainss[i].fprice
                let d=request.body.params.domainss[i].lprice
                let e=request.body.params.domainss[i].knum
                let f=""
                goodDao.addprice([a,b,c,d,e,f])
            }
        })
    }
    // hualala(request,response){
    //     var s=request.query.style
    //     var c=request.query.color
    //     console.log("sc"+s+c)
    //     goodDao.changesc(s,c).then((data)=>{
    //         response.send(data[0].pic_src)
    //
    //     })
    // }
};

module.exports=goodxx;
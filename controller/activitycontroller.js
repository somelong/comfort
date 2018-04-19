var editImg;
const acDao=require("../dao/activityDao");
const activityModel= {
    getActivity(request,response){
        acDao.getactivity()
            .then(function (data) {
                console.log(data.length);
                response.render("activity",{mydata:data})

            })
    },
    getVueActivity(request,response){
        acDao.getactivity()
            .then(function (data) {
                console.log(data.length);
                response.render("activity",{mydata:data})

            })
    },
    sentVueActivity(request,response){
        let acId=request.query.acId;
        acDao.sentVueAc(acId)
            .then(function (data) {
                console.log(data.length);
                response.send(data)

            })
    },
    getVueActivityTrue(request,response){
        acDao.getactivityTrue()
            .then(function (data) {
                // console.log(data.length);
                response.send(data)

            })
    },
    getVueActivityUnsent(request,response){
        acDao.VueActivityUnsent()
            .then(function (data) {
                // console.log(data.length);
                response.send(data)
            })
    },
    getVueTrademark(request,response){
        acDao.actrademark()
            .then(function (data) {
                // console.log(data.length);
                response.send(data)

            })
    },
    getVueSpecial(request,response){
        acDao.acspecial()
            .then(function (data) {
                // console.log(data.length);
                response.send(data)

            })
    },
    deleteVueActivity(request,response){
        let acId=request.query.acId;
        console.log("delete_id"+acId);
        acDao.deleteActivity(acId)
            .then(function (data) {
                response.send(data)
            })
    },
    deleteVueSpecial(request,response){
        let spId=request.query.spId;
        console.log("delete_id"+spId);
        acDao.deleteSpecial(spId)
            .then(function (data) {
                response.send(data)
            })
    },
    deleteVuePhyStore(request,response){
        let psId=request.query.psId;
        console.log("delete_id"+psId);
        acDao.deletePhyStore(psId)
            .then(function (data) {
                response.send(data)
            })
    },
    deleteVueTrademark(request,response){
        let tmId=request.query.tmId;
        console.log("delete_id"+tmId);
        acDao.deleteTrademark(tmId)
            .then(function (data) {
                response.send(data)
            })
    },
    getActivePing(request,response){
        acDao.getActivePing()
            .then(function (data) {
                 response.render("activityPing",{PingData:data})
            })
    },
    activephps(request,response){
        acDao.acphps()
            .then(function (data) {
                response.render("activityphps",{hphsData:data});
                // console.log(data)
            })
    },
    getVuePhyStore(request,response){
        acDao.acphps()
            .then(function (data) {
                response.send(data);
                // console.log(data)
            })
    },
    activespecial(request,response){
        acDao.acspecial()
            .then(function (data) {
                response.render("activityspecial",{spData:data});
                console.log(data)
            })
    },
    activetrademark(request,response){
        acDao.actrademark()
            .then(function (data) {
                response.render("activitytrademark",{tmData:data});
                // console.log(data)
            })
    },
    getLanJiaZai(request,response){
        acDao.LanJiaZai()
            .then(function (data) {
            response.send(data);
                // console.log("contro:"+data)
            })
    },
//    消息推送的方法：
    Myinformation(request,response){
        let u_id=request.query.NUMSS;
        console.log("info:"+u_id);
        acDao.myinfo(u_id)
            .then(function (data) {
                 response.render("Myinformation",{myinfo:data})
            })
    },
    //search
    searchVueActivity(request,response){
        let SV=request.query.SV+"%";
       acDao.searchAC(SV)
           .then(function (data) {
                // console.log("search："+data)
                // console.log(data)
               response.send(data);
           })
    },
    uploadfile(request,response){
        console.log("===========uploadfile===========");
        console.log(request.files[0].filename);
        editImg="uploads/"+request.files[0].filename;
        for (var i=0;i<request.files[0].length;i++){
            editImg+="uploads/"+request.files[i].filename+",";
        }
        response.send("上传成功");
    },

    uploadHandleEditSave(request,response){
        let ac_id=request.query.acId;
        let ac_zt=request.query.ac_zt;
        let ac_ft=request.query.ac_ft;
        if(editImg){
            let param=[editImg,ac_zt,ac_ft,ac_id];
            acDao.savePathName(param)
                .then(function (data) {
                    response.send(data)
                })
        }else {
            let param=[editImg,ac_zt,ac_ft,ac_id];
            acDao.savePathName(param)
                .then(function (data) {
                    response.send(data)
                })
        }
        console.log("aaaa")
    },
//插入数据
    activityInsert(request,response){
        let zt=request.query.zt;
        let ft=request.query.ft;
        let type=request.query.type;
        let morelink=request.query.morelink;
        let state=request.query.state;
        let date=request.query.date;
        let img=editImg;
        let dates=date.substring(0,10);
        var param=[img,zt,ft,type,morelink,state,dates];
        console.log(img,zt,ft,type,morelink,state,date);
        acDao.acInsert(param)
            .then(function (data) {
             response.send(data)
        })
    },
    FBMSUser(request,response){
        // console.log(request.body.param.name)
        let name=request.body.param.name;/*?????????????*/
        let password=request.body.param.password;/*?????????????*/
        let param=[name,password]
        acDao.FBMSUserDao(param)
            .then(function (data) {
               if(data.length>0){
                   response.send(data);
               }
            })


    },
    FBMSUserTwo(request,response){
        // console.log(request.body.param.name)
        let name=request.body.name;/*?????????????*/
        let password=request.body.password;/*?????????????*/
        let param=[name,password]
        console.log("2:"+param)
        acDao.FBMSUserDao(param)
            .then(function (data) {
                if(data.length>0){
                    response.send(data);
                }
            })


    }



};
module.exports=activityModel;
const acDao=require("../dao/mydiscountDao");

const MyDisCountModel={

    getMyDisCount(request,response){

        let userPhone=request.query.userPhone;
            // console.log("电话："+userPhone)
        acDao.userPhone(userPhone)
            .then(function (data) {
                response.send(data)
            })

    },
    getMyDisCountdis(request,response){
        console.log(request);
        let u_id=request.query.NUMSS;
        console.log("u_id:"+u_id);
        acDao.MyDisCount(u_id)
            .then(function (data) {
                console.log(data);
                response.render("mydiscount",{mydisdata:data})


            })
    }
};
module.exports=MyDisCountModel;
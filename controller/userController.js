const userDao = require("../dao/userDao.js");
const userController = {
    // 验证用户手机号是否已注册
    verifyUser(req,resp){
        let params = req.body.userPhone;
        userDao.verifyUser(params)
            .then(function (data) {
                if (data.length > 0){
                    resp.send(false);
                }else {
                    resp.send(true);
                }
            })
    },
    addUser(req,resp){
        let userPhone = req.body.phone;
        let userPassw = req.body.password;
        let params = [userPhone,userPassw];
        userDao.addUser(params)
            .then(function (data) {
                if (data){
                    resp.send(data);
                }else {
                    resp.send(data);
                }
            })
    },
    loginUser(req,resp){
        let userPhone = req.body.phone;
        let userPassw = req.body.password;
        let params = [userPhone,userPassw];
        console.log(params);
        userDao.loginUser(params)
            .then(function (data) {
                resp.send(data);
            })
    },
    // 修改用户密码
    updataUser(req,resp){
        let userPhone = req.body.phone;
        let userPassw = req.body.password;
        let params = [userPassw,userPhone];
        userDao.updataUser(params)
            .then(function (data) {
                if (data.length > 0){
                    resp.send(data);
                }else {
                    resp.send(false);
                }
            })
    }
};

module.exports = userController;
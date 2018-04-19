let yanzheng;
var myUrll=sessionStorage.getItem("myUrll");

// 判断用户手机号是否被注册
function panduan() {
    let userPhone = $("#exampleInputEmail3").val();
    if(userPhone.length > 0){
        $.ajax({
            type:"post",//提交方式
            url:"verifyPhone.do",//提交地址
            data:{
                userPhone:userPhone
            },
            success:function (data) {//执行成功回调函数
                chenggong(data);
            },
        });
    }
}
// 手机号验证成功
function chenggong(data) {
    if(data){
        console.log("可以注册");
    }else {
        $("#exampleInputEmail3").val("此账号已被注册，可以直接登陆");
    }
}
// 发送短信验证码的地方
function getNumber() {
    $.ajax({
        url:"sendCode.do",
        type:"post",
        data:{
            phone:$("#exampleInputEmail3").val()
        },
        success:function (data) {
            console.log(data);
        }
    })
}

// 验证用户验证码 并完成注册的 function
function verifyUserNumber(){
    if($(".checkbox input").is(':checked')){
        verifyNumber();
        if(yanzheng){
            addUser();
        }else{
            shibai();
        }
    }else {
        $(".myAlert-info").animate({
            opacity:1
        },500).delay(1000).animate({
            opacity:0
        });
    }
}

// 验证短信的方法
function verifyNumber() {
    $.ajax({
        url:"verifyCode.do",
        type:"post",
        async : false,
        data:{
            code:$("#exampleInputEmail30").val(),
            phone:$("#exampleInputEmail3").val()
        },
        success:function (data) {
            if (data == "验证成功"){
                console.log("验证码验证成功");
                yanzheng =  true;
            }else {
                console.log("验证码验证失败");
                yanzheng = false;
            }

        }
    })
}
// 判断用户密码是否输入正确
function verifyPasswrod() {
    if($("#exampleInputEmail300").val() != $("#exampleInputPassword3").val()){
        $(".myAlert-warning").animate({
            opacity:1
        },500).delay(1000).animate({
            opacity:0
        });
        $("#exampleInputEmail300").val("");
        $("#exampleInputPassword3").val("");
    }
}

// 用户表单填写完毕  准备提交
function addUser() {
    sessionStorage.setItem("myUser",$("#exampleInputEmail3").val());
    localStorage.setItem("myUser",$("#exampleInputEmail3").val());
    $.ajax({
        url:"addUser.do",
        type:"post",
        async : false,
        data:{
            phone:$("#exampleInputEmail3").val(),
            password:$("#exampleInputEmail300").val()
        },
        success:function (data) {
            window.location.href = "index.html";
        }
    });
}

// 确认重置密码的方法
function resetPassw(){
    verifyNumber();
    if(yanzheng){
        console.log("成功发起一个ajax请求");
        $.ajax({
            url:"updataUser.do",
            type:"post",
            async : false,
            data:{
                phone:$("#exampleInputEmail3").val(),
                password:$("#exampleInputEmail300").val()
            },
            success:function (data) {
                // console.log(data);
                if(myUrll){
                    window.location.href = myUrll;
                }else {
                    window.location.href = "index.html";
                }

            }
        });
        let username=document.getElementById("exampleInputEmail3").value;
        sessionStorage.setItem("myUser",username);
        localStorage.setItem("myUser",username);
    }else{
        shibai();
    }
}

// 失败执行的方法
function shibai(){
    $(".myAlert-shibai").animate({
        opacity:1
    },500).delay(1000).animate({
        opacity:0
    });
    $("#exampleInputEmail30").val("");
    $("#exampleInputEmail300").val("");
    $("#exampleInputPassword3").val("");
}
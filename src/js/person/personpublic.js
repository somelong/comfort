
var userPhone = localStorage.getItem("myUser");
console.log(userPhone);
$.ajax({
    type:"get",
    url:"mydiscounts.do",
    data:{
        "userPhone":userPhone
    },
    success : function(data) {  //回调函数
        console.log("success : "+data[0].u_id);
        u_id=data[0].u_id
        sessionStorage.setItem("u_id",u_id);
        localStorage.setItem("u_id",u_id);
    }
});

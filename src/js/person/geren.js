window.onload=function () {
    var getUser1=sessionStorage.getItem("myUser");
    $.ajax({
        url:"/geren.do",
        type:"post",
        data:{
            getUser1:getUser1
        },
        success:function (data) {
            console.log(data[0].u_img);
            if(data[0].u_img){
                $("#myimgLogo").attr("src",data[0].u_img);
            }else {
                $("#myimgLogo").attr("src","../images/person-member/Person-Member1.jpg");
            }

          if(data[0].u_name){
              $("#yonghuming").html(data[0].u_name)
          }else {
              $("#yonghuming").html(data[0].u_phone)
          }
        }
    });
};
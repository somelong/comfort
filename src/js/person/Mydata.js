var mySheng;
var myShi;
var myXian;
var myTrue;
var obj1;
window.onload=function () {
    var getUser1=sessionStorage.getItem("myUser");
    $.ajax({
        url:"/geren.do",
        type:"post",
        data:{
            getUser1:getUser1
        },
        success:function (data) {
            $("#userBox").val(data[0].u_name);
            $("#sexBox").val(data[0].u_sex);
            $("#birthBox").val(data[0].u_birthday);
            if(data[0].u_img){
                $("#myimgLogo").attr("src",data[0].u_img);
                $("#myimgLogo1").attr("src",data[0].u_img);
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
    $.ajax({
        url:"/geren1.do",
        type:"post",
        success:function (data) {
            var myinnerhtml="";
            for (var i=0;i<data.length;i++){
                myinnerhtml+="<option class="+data[i].provinceid+" value=" +data[i].provinceid+ ">"+data[i].province+"</option>";
            }
            $("#s_province").html(myinnerhtml)
        }
    });
    $.ajax({
        url:"/dizhi.do",
        type:"post",
        data:{
            getUser1:getUser1
        },
        success:function (data) {
            var myinnerhtml="";
           if(data.length==0){
               myinnerhtml="<span>没有您的地址哦！快去填写吧</span>"
           }else {
               for(var i=0;i<data.length;i++){
                   myinnerhtml+="<div>"+
                       "<span>"+(i+1)+"</span>:"+
                      "<span>"+data[i].a_sheng+"/"+data[i].a_shi+"/"+data[i].a_xian+"</span>/"+
                       "<span>收货人："+data[i].ua_name+"</span>/"+
                       "<span>"+data[i].ua_phone+"</span>/"+
                       "<button class=' btn btn-warning  jia1' aria-hidden='true' style='color: white'  data-toggle='modal' data-target='#mymodal'' onclick='warning2("+data[i].a_id+")'>修改</button>"+
                       "</div>"
               }
           }
            $("#myDizhi").html(myinnerhtml)
        }
    })

};

$("#s_province").change(function () {
    mySheng=$("."+$("#s_province").val()+"").text();
    $.ajax({
       url:"/geren2.do",
       type:"post",
       data:{
           myShen: $("#s_province").val()
       },
        success:function (data) {
            var myinnerhtml1="";
            for (var i=0;i<data.length;i++){
                myinnerhtml1+="<option class="+data[i].cityid+" value=" +data[i].cityid+ ">"+data[i].city+"</option>";
            }
            $("#s_city").html(myinnerhtml1)
        }
   })
});

$("#s_city").change(function () {
    myShi=$("."+$("#s_city").val()+"").text();
    $.ajax({
        url:"/geren3.do",
        type:"post",
        data:{
            myShen1: $("#s_city").val()
        },
        success:function (data) {
            var myinnerhtml2="";
            for (var i=0;i<data.length;i++){
                myinnerhtml2+="<option class="+data[i].areaid+" value=" +data[i].areaid+ ">"+data[i].AREA+"</option>";
            }
            $("#s_county").html(myinnerhtml2)
        }
    })
});
$("#s_county").change(function () {
    myXian=$("."+$("#s_county").val()+"").text();
    console.log(myXian)
});


function changePage() {
    $(".smBox2").css("left","0");
    $(".smBox1").css("opacity","0")
}
function picChange() {
    $("#imgBox").css("opacity", "1");
    $("#file").click();
    var bigCanvasCtx = document.getElementById("myCanvas").getContext("2d");
    var newCanvasCtx;
    $("#file").change(function () {
        var imgFile = $("#file")[0].files[0];//获取img文档
        var reader = new FileReader();//创建一个fileReader对象
        reader.readAsDataURL(imgFile);//result
        reader.onload = function () {
            $("#imgBox").before("<img src='" + this.result + "' id='myImg'/>");
            $("#myImg")[0].onload = function () {
                bigCanvasCtx.drawImage($("#myImg")[0], 0, 0, 450, 450, 0, 0, 450, 450);

            };
            $("#myImg").css("display", "none");
        }
    });
    $("#cutBox").on("mousedown", function (e) {
        var clickE = e;
        $(this).on("mousemove", function (e) {
            var currentE = e;
            $(this).css({
                left: currentE.clientX - clickE.offsetX - 1135 + "px",
                top: currentE.clientY - clickE.offsetY - 70 + "px"
            });
            if (parseInt($(this).css("left")) <= 20) {
                $(this).css("left", "20px")
            }
            if (parseInt($(this).css("left")) >= 240) {
                $(this).css("left", "240px")
            }
            if (parseInt($(this).css("top")) <= 0) {
                $(this).css("top", "0px")
            }
            if (parseInt($(this).css("top")) >= 220) {
                $(this).css("top", "220px")
            }
        })
    });
    $(document).on("mouseup", function () {
        $("#cutBox").off("mousemove");
        $("#imgShow").html("<canvas id='newCanvas' width='126' height='126' ></canvas>");
        newCanvasCtx = $("#newCanvas")[0].getContext("2d");
        var cutBoxLeft = $("#cutBox").position().left;
        var cutBoxTop = $("#cutBox").position().top;
        var imgData = bigCanvasCtx.getImageData(cutBoxLeft, cutBoxTop, 126, 126);
        newCanvasCtx.putImageData(imgData, 0, 0);
    });
};
$("#confirm").click(function () {
    var imgDataUrl;
    if($("#myImg").length!=0){
         imgDataUrl = $("#newCanvas")[0].toDataURL()
    }else {
        imgDataUrl=$("#myimgLogo1").attr("src");
    }
    console.log($("#myImg"));
    var userBox = $("#userBox").val();
    var sexBox = $("#sexBox").val();
    var birthBox = $("#birthBox").val();
    var getUser1 = sessionStorage.getItem("myUser");
    $.ajax({
        type: "POST",
        url: "/upload.do",
        data: {
            userBox: userBox,
            sexBox: sexBox,
            birthBox: birthBox,
            imgData: imgDataUrl,
            getUser1: getUser1
        },
        success: function (data) {
            window.location.href = "Person-Member1.html";
        }
    });
    $("#imgBox").before("");
});
function warning1() {
    myTrue=true;
    $("#address_text").val("");
    $("#receipt_name").val("");
    $("#receipt_phone").val("");
}
function warning2(obj) {
    obj1=obj;
    $.ajax({
        type: "POST",
        url: "/upload2.do",
        data:{
            obj:obj
        },
        success:function (data) {
            $("#address_text").val(data[0].a_detail);
            $("#receipt_name").val(data[0].ua_name);
            $("#receipt_phone").val(data[0].ua_phone);
        }
    });
    myTrue=false
}
$("#btn-success").click(function () {
    var address_text = $("#address_text").val();
    var receipt_name = $("#receipt_name").val();
    var receipt_phone = $("#receipt_phone").val();
    var getUser1=sessionStorage.getItem("myUser");
    if(myTrue){
        $.ajax({
            type: "POST",
            url: "/upload1.do",
            data:{
                mySheng:mySheng,
                myShi:myShi,
                myXian:myXian,
                address_text:address_text,
                receipt_name:receipt_name,
                receipt_phone:receipt_phone,
                getUser1:getUser1
            },
            success:function (data) {
                window.location.href = "Mydata.html";
            }
        });
    }else {
        $.ajax({
            type: "POST",
            url: "/upLoad11.do",
            data:{
                mySheng:mySheng,
                myShi:myShi,
                myXian:myXian,
                address_text:address_text,
                receipt_name:receipt_name,
                receipt_phone:receipt_phone,
                getUser1:getUser1,
                obj1:obj1
            },
            success:function (data) {
                window.location.href = "Mydata.html";
            }
        });
    }
});
$("#revision").click(function () {
    sessionStorage.setItem("myUrll","Mydata.html");
    localStorage.setItem("myUrll","Mydata.html");
  window.location.href="wangjimima.html"
});
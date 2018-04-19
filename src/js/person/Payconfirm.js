var getUser1=sessionStorage.getItem("myUser");
var u_id=sessionStorage.getItem("u_id");
var url = decodeURI(location.search).substr(1);
var mySheng;
var myShi;
var myXian;
var userName1=[];
var phone1=[];
var jiage=0;
window.onload=function () {
    $.ajax({/*页面加载的时候*/
        url: "/payconfirm.do",
        type: "post",
        async:false,
        data: {
            getUser1:getUser1,
            url:url
        },
        success:function (data) {
            $("#price").text("¥"+data[0].o_zongjia);
            $("#discounts").text("已优惠¥"+data[0].o_youhui);
            var shopHtml="";
            for (let i=0;i<data.length;i++){
                shopHtml+='<div class="goodBox">'+
                    '<div class="goodText">'+
                    '<a class="goodJump" href="">'+
                    '<img src='+data[i].p_img+' class="img-responsive" alt="">'+
                    '<div></div>'+
                    '</a>'+
                    '<div class="introduce">'+
                    '<span class="goodsName">'+data[i].p_subject+'</span>'+
                '<span class="dateTime text-gray">'+data[i].o_goodTime+'</span>'+
                '<span>'+data[i].p_color+'</span>'+
                '<span class="goodsPrice after" data-attr=¥'+data[i].p_priceView+'>¥'+data[i].p_price+'</span>'+
                    '<span>x'+data[i].o_goodNum+'</span>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
            }
            $("#shopHtml").html(shopHtml)
        }
    });
    $.ajax({
        url: "/payconfirm2.do",
        type: "post",
        async:false,
        data: {
            u_id: u_id,
        },
       success:function (data) {
           var shopHtml="";
           for (let i=0;i<data.length;i++){
               shopHtml+='<div class="col-xs-4" >'+
                   '<div class="card1">'+
                   '<br>'+
                   '<span class="text-red">'+data[i].dis_money+'</span>'+
                   '<span class="text-gray">'+data[i].m_grade+'</span>'+
                   '<p>'+data[i].dis_usermoney+'</p>'+
                   '<div class="full text-gray">'+data[i].dis_type+'</div>'+
                   '<div class="kong"></div>'+
                   '<br>'+
                   '<p class="text-gray">'+data[i].dis_date+'</p>'+
                   '</div>'+
                   '</div>'
           }
           $("#rowHtml").html(shopHtml)
       }
    });
    $.ajax({
        url: "/payconfirm1.do",
        type: "post",
        async:false,
        data: {
            getUser1: getUser1,
        },
        success: function (data) {
            $("#userName").text(data[0].ua_name);
            $("#phone").text(data[0].ua_phone);
            var shopHtml="";
            for(let i=0;i<data.length;i++){
                userName1.push(data[i].ua_name);
                phone1.push(data[i].ua_phone);
                shopHtml+=" <option class='myOption' value="+i+">"+data[i].a_sheng+data[i].a_shi+data[i].a_xian+data[i].a_detail+"</option>"
            }
            $("#address").html(shopHtml)
        }
    });
    $.ajax({
        url:"/geren1.do",
        type:"post",
        async:false,
        success:function (data) {
            var myinnerhtml="";
            for (var i=0;i<data.length;i++){
                myinnerhtml+="<option class="+data[i].provinceid+" value=" +data[i].provinceid+ ">"+data[i].province+"</option>";
            }
            $("#s_province").html(myinnerhtml)
        }
    });
    $(".card1").click(function () {
        for(let i=0;i<$(".card1").length;i++){
            $(".card1")[i].style.border="1px solid #e5e5e5"
        }
        $(this).css("border","1px solid red");
        $(this).attr("id","myid");
        jiage= parseInt($(this).children()[1].innerText.substr(1));
    })
};
$("#btn-success").click(function () {
    var address_text = $("#address_text").val();
    var receipt_name = $("#receipt_name").val();
    var receipt_phone = $("#receipt_phone").val();
    var getUser1=sessionStorage.getItem("myUser");
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
                window.location.href = "Payconfirm.html?"+url+"";
            }
        });
});
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
});

$(window).scroll(function () {
    if($(window).scrollTop()>=450){
        $(".mid-4").css({
            position:"relative"
        })
    }else if($(window).scrollTop()<450){
        $(".mid-4").css({
            position:"fixed"
        })
    }
});

$("#address").change(function () {
   console.log(this.value)
    $("#userName").text(userName1[this.value]);
    $("#phone").text(phone1[this.value]);
});
$("#test").change(function () {
   if($("#test")[0].checked&&$("#address").text()) {
       $("#payJump").css("background-color","#46976e");
   }else {
       $("#payJump").css("background-color","#cdcdcd")
   }
});
$("#wrap").click(function () {
    $(".wrapBox").css("display","block")
});
$(".quxiao").click(function () {
    $(".wrapBox").css("display","none")
});
$(".queding").click(function () {
    $(".wrapBox").css("display","none");
    let price=parseInt($("#price")[0].innerText.substr(1));
    let discounts=parseInt($("#discounts")[0].innerText.substr(4));
    $("#price").text("¥"+(price-jiage));
    $("#discounts").text("已优惠¥"+(discounts+jiage));
    $("#mydiscounts").text("使用¥"+jiage+"优惠券");
    $("#myid").css("display","none");
    $("#myspan").css("color","red");

    $.ajax({
        url: "/payconfirm3.do",
        type: "post",
        data: {
            price:(price-jiage),
            discounts:(discounts+jiage),
            getUser1:getUser1,
            url:url
        },
        success: function (data) {
           console.log(data)
        }
    });
});
var test1="不需要发票";
var adderAss="";
$("#payJump").click(function () {
   // if($("#test")[0].checked){
    let mydiscounts1;
    for(let i=0;i<userName1.length;i++){
        if(userName1[i]==$("#userName").text()){
             mydiscounts1=$(".myOption")[i].innerText;
        }
    }
    let mydiscounts =$("#userName").text()+"/"+$("#phone").text()+"/"+mydiscounts1;
     if($("#test1")[0].checked){
         test1="需要发票"
     }
     if($("#Beizhu").val()){
         adderAss=$("#Beizhu").val()
     }
       $.ajax({
           url: "/payconfirm4.do",
           type: "post",
           data: {
               mydiscounts:mydiscounts,
               adderAss:adderAss,
               test1:test1,
               getUser1:getUser1,
               url:url
           },
           success: function (data) {
               console.log(data)
           }
       });
       window.location.href="goPay.html?"+url+""
   });


$(".footer").css("margin-top","0");


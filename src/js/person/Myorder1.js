var getUser1=sessionStorage.getItem("myUser");
var mySite="";
var fukuang1=0;
var fukuang2=0;
var fukuang3=0;
window.onload=function () {
    $.ajax({
        url:"/Myorder.do",
        type:"post",
        async:false,
        data:{
            getUser1:getUser1,
            state:"待付款"
        },
        success:function (data) {
            var shopHtml="";
            for(var i=0;i<data.length;i++){
                shopHtml+='<div class="col-md-12 col-xs-12 mymodule">'+
                    '<div class="goods">'+
                    '<div class="goodsText">'+
                    '<br>'+
                    '<span class="price">￥'+data[i].o_zongjia+'</span>'+
                    '<span class="text-gray">总价:￥'+(data[i].o_zongjia+data[i].o_youhui)+'</span>'+
                '<span class="text-gray">优惠: -￥'+data[i].o_youhui+'</span>'+
                '<div class="number">'+
                    '<span class="text-gray">单号</span>'+
                    '<span class="text-gray">:</span>'+
                '<span class="text-gray">'+data[i].o_number+'</span>'+
                    '</div>'+
                    '<div class="address">'+
                    '<span class="text-gray">收货信息</span>'+
                    '<span class="text-gray">:</span>'+
                '<span class="text-gray myCirculation1"></span>'+
                '</div>'+
                '<button class="pay" myvlue='+data[i].o_id+'>去付款</button>'+
                    '<span aria-hidden="true" class="del text-gray">&times;</span>'+
                '<div class="linear"></div>'+
                    '<br>'+
                    '<div class="row myCirculation" myvlue='+data[i].o_id+'></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
            }
            $("#shopCh").html(shopHtml);
        }
    });
    $.ajax({
        url:"/Myorder1.do",
        type:"post",
        async:false,
        data:{
            getUser1:getUser1
        },
        success:function (data) {
            mySite=data[0].ua_name+" / "+data[0].ua_phone+" / "+data[0].a_sheng+" / "+data[0].a_shi+" / "+data[0].a_xian+" / "+data[0].a_detail;
        }
    });
    for(let i=0;i<$(".myCirculation1").length;i++){
        $(".myCirculation1")[i].innerHTML=mySite;
    }
    for(let i=0;i<$(".myCirculation").length;i++){
        var shopHtml="";
        $.ajax({
            url:"/Myorder2.do",
            type:"post",
            async:false,
            data:{
                id:$(".myCirculation")[i].getAttribute("myvlue")
            },
            success:function (data) {
                for(let i=0;i<data.length;i++){
                     shopHtml+='<div class="col-md-4">'+
                        '<a href="" class="bed">'+
                        '<img src='+data[i].p_img+' class="img-responsive" alt="">'+
                        '<span class="wrap"></span>'+
                        '</a>'+
                        '<div class="confirm">'+
                        '<span class="goodsName">'+data[i].p_subject+'</span>'+
                        '<span style="font-size: 18px;">¥'+data[i].p_price+'<span aria-hidden="true" style="font-size: 18px;">&times;</span>'+data[i].o_goodNum+'</span>'+
                    '<div class="type">'+
                        '<span class="text-gray">'+data[i].p_text+'</span>'+
                    '</div>'+
                    '<div class="time">'+
                        '<img src="../images/person-member/time.png" alt="">'+
                        '<span class="text-gray">'+data[i].o_goodTime+'</span>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
                }
            }
        });
        $(".myCirculation")[i].innerHTML=shopHtml
    }
    $(".pay").click(function () {
        window.location.href="Payconfirm.html?"+this.getAttribute("myvlue")+"";
    });
    $.ajax({
        url:"/Myorderb.do",
        type:"post",
        async:false,
        data:{
            getUser1:getUser1,
        },
        success:function (data) {
            console.log(data);
            console.log("测试数据");
           for(let i=0;i<data.length;i++){
               if(data[i].o_state=="待付款"){
                   fukuang1++
               }else if(data[i].o_state=="待发货" || data[i].o_state=="已发货"){
                   fukuang2++
               }else if(data[i].o_state=="已入手"){
                   fukuang3++
               }
           }
        }
    });
    $("#fukuang1").text("("+fukuang1+")");
    $("#fukuang2").text("("+fukuang2+")");
    $("#fukuang3").text("("+fukuang3+")");
};





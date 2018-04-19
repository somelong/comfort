var getUser1=sessionStorage.getItem("myUser");
var fukuang1=0;
var fukuang2=0;
var fukuang3=0;
window.onload=function () {
    $.ajax({
        url: "/Myordera.do",
        type: "post",
        data: {
            getUser1: getUser1,
            state: "待发货",
            state1: "已发货"
        },
        success: function (data) {
            console.log(data);
            var shopHtml = "";
            for (var i = 0; i < data.length; i++) {
                shopHtml +='<div class="areadyPay"><!--已付款-->'+
                    '<span aria-hidden="true" class="del text-gray">&times;</span>'+
                '<a href="" class="tableDesk">'+
                    '<img src='+data[i].p_img+' class="img-responsive" alt="">'+
                    '</a>'+
                    '<div class="textTopay">'+
                    '<span class="goodsName">'+data[i].p_subject+'</span>'+
                '<span class="price1" style="font-size: 18px;">¥'+data[i].p_price+'<span aria-hidden="true" style="font-size: 18px;">&times;</span>'+data[i].o_goodNum+'</span>'+
                '<div class="type">'+
                    '<span class="text-gray">'+data[i].p_color+'</span>'+
                    '</div>'+
                    '<br>'+
                    '<div class="number1">'+
                    '<span class="text-gray">单号</span>'+
                    '<span class="text-gray">:</span>'+
                '<span class="text-gray">'+data[i].o_number+'</span>'+
                    '</div>'+
                    '<div class="address1">'+
                    '<span class="text-gray">收货信息</span>'+
                    '<span class="text-gray">:</span>'+
                '<span class="text-gray">'+data[i].o_address+'</span>'+
                '</div>'+
                '<button class="takeGoods" onclick="takeGoods('+data[i].o_id+')">确认收货</button>'+
                    '</div>'+
                    '</div>'
            }
            $("#shopCh").html(shopHtml);
        }
    });
    $.ajax({
        url:"/Myorderb.do",
        type:"post",
        async:false,
        data:{
            getUser1:getUser1,
        },
        success:function (data) {
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
function takeGoods(obj) {
    console.log(obj);
    $.ajax({
        url: "/goPay1.do",
        type: "post",
        data: {
            url: obj,
            state:"已入手"
        },
        success:function (data) {

        }
    });
    window.location.href="Myorder3.html"
}

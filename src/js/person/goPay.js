var url = decodeURI(location.search).substr(1);
var getUser1=sessionStorage.getItem("myUser");
var myture=false;
window.onload=function () {
    $.ajax({
        /*页面加载的时候*/
        url: "/payconfirm.do",
        type: "post",
        async: false,
        data: {
            getUser1: getUser1,
            url: url
        },
        success: function (data) {
            $("#mytest").text("¥" + data[0].o_zongjia);
            $("#mytest1").text(data[0].o_address);
            $("#mytest2").text(data[0].invoice);
            $("#mytest3").text(data[0].user_note);
            var shopHtml = "";
            for (let i = 0; i < data.length; i++) {
                shopHtml += '<div class="goodsText">'+
                    '<img src='+data[i].p_img+' alt="">'+
                    '<span class="text-gray">'+data[i].p_subject+'</span>'+
                '<span class="text-gray">'+data[i].o_goodNum+'件</span>'+
                '<span class="text-gray">¥'+data[i].p_price+'</span>'+
                    '</div>'
            }
            $("#shopHtml").html(shopHtml)
        }
    });
};
$(".mycheckbox").change(function () {
    for(let i=0;i<$(".mycheckbox").length;i++){
        $(".mycheckbox")[i].checked=false;
    }
    this.checked=true;
});
$("#confirmPay").click(function () {
   if($("#test")[0].checked){
       myture=true
   }
    if($("#test1")[0].checked){
        myture=true
    }
    if($("#test2")[0].checked){
        myture=true
    }
    if($("#test3")[0].checked){
        myture=true
    }
    if(myture==true){

        $.ajax({
            url: "/goPay1.do",
            type: "post",
            data: {
                url: url,
                state:"待发货"
            },
            success:function (data) {

            }
        });
        window.location.href="Myorder2.html"
    }
});
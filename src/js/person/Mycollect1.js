let lcu_id=sessionStorage.getItem("u_id");
window.onload=function () {
    $.ajax({
        /*页面加载的时候*/
        url: "/Mycollect1.do",
        type: "post",
        data: {
            uid :lcu_id,
        },
        success:function (data) {
            var shopHtml="";
            for (let i=0;i<data.length;i++) {
                shopHtml+='<div class="good text-center">'+
                    '<a href="">'+
                    '<img src='+data[i].p_img+' class="img-responsive" alt="">'+
                    '</a>'+
                    '<p>'+data[i].p_subject+'™</p>'+
                '<p class="text-red">¥'+data[i].p_price+'</p>'+
                    '<div class="text-red" onclick="mygoumai('+data[i].p_id+')">购买</div>'+
                    '</div>'
            }
            $("#shopHtml").html(shopHtml)
        }
    })
};
function mygoumai(obj) {
    console.log(typeof obj);
    if(obj==16||obj==17){
        window.location.href="goodxxxx"
    }else {
        window.location.href="goodxx"
    }
}
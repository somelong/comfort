var getUser1=sessionStorage.getItem("myUser");
var uid=sessionStorage.getItem("u_id");
var fukuang1=0;
var fukuang2=0;
var fukuang3=0;
window.onload=function () {
    $.ajax({
        url: "/Myordera.do",
        type: "post",
        data: {
            getUser1: getUser1,
            state: "已入手"
        },
        success: function (data) {
            console.log(data);
            var shopHtml = "";
            for (var i = 0; i < data.length; i++) {
                shopHtml +='<div class="areadyTake" data-toggle="collapse" data-target="#mypanel" aria-expanded="true" aria-controls="mypanel">'+<!--已收货-->
                    '<span aria-hidden="true" class="del text-gray">&times;</span>'+
                '<a href="" class="tableDesk">'+
                    '<img src='+data[i].p_img+' class="img-responsive" alt="">'+
                    '</a>'+
                    '<div class="textTopay">'+
                    '<span class="goodsName">'+data[i].p_subject+'™</span>'+
                '<span style="font-size: 18px;">¥'+data[i].p_price+'<span aria-hidden="true" style="font-size: 18px;">&times;</span>'+data[i].o_goodNum+'</span>'+
                '<div class="type">'+
                    '<span class="text-gray">'+data[i].p_color+'</span>'+
                    '</div>'+
                    '<span class="text-gray haveGoods">已收货</span>'+
                    '<span style="cursor: pointer" class="talkGoods" onclick="talkGoods(this,'+data[i].p_id+','+data[i].o_id+')">评价</span>'+
                    '<div class="jumpText">'+<!--申请售后等-->
                    '<a href="">订单详情</a>'+
                    '<a href="">申请售后</a>'+
                    '<a href="">投诉商家</a>'+
                    '</div>'+
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
var ininhtml="";
var myture=false;
function talkGoods(obj,pid,oid) {
    $("#mypanel").remove();
    myture=!myture;
    ininhtml='<div class="MarginPing margin-top-30 collapse" id="mypanel">'+
        '<div class="row ">'+
        '<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 comentMargin" >'+
        '<span class="redStar">*</span>评价内容：'+
        '</div>'+
        '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">'+
        '<textarea name="" id="b" cols="80" rows="6"    style="resize:none;padding: 10px;border-radius: 5px; border: 1px silver solid" placeholder="请给购买的人亲们留下你宝贵的评语！"></textarea>'+
        '<div><span id="a">已输入:0/200 字符</span></div>'+
    '</div>'+
    '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">'+
        '<div class="labelBtn">'+
        '<div class="btnDiv">外观美观</div>'+
        '<div class="btnDiv">性价比高</div>'+
        '<div class="btnDiv">结实耐用</div>'+
        '<div class="btnDiv">小巧方面</div>'+
        '<div class="btnDiv">操作简单</div>'+
        '<div class="btnDiv">趣味性强</div>'+
        // '<div class="btnDiv">+添加标签</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="row margin-top-30">'+
        '<div class="col-xs-1 text-right">'+
        '<div class="onloadImg"> <span class="redStar">*</span>上传图片：</div>'+
    '</div>'+
    '<div class="col-xs-6 comentMargin">'+
        '<div id="upload"></div>'+
        '</div>'+
        '<div class="col-xs-2 comentMargin">'+
        '<button class="submit addSubmit margin-top-30" onclick="addSubmit('+pid+','+oid+')">提交评论</button>'+
        '</div>'+
        '</div>'+
        '</div>';
    if(myture){
        $(obj).parent().parent().after(ininhtml);
        huaji();
    }else {
        $("#mypanel").remove();
    }

}
//上传照片的js

let options = {
    // path: '/addCommentImg.do',
    onSuccess: function (res) {
        console.log(res);
    },
    onFailure: function (res) {
        console.log(res);
    }
};
function huaji() {
    let upload = tinyImgUpload('#upload', options);  //调用上传的方法
    // document.getElementsByClassName('submit')[0].onclick = function (e) {
    //     upload();
    // };
    document.documentElement.style.fontSize = document.documentElement.clientWidth*0.1+'px';


    $("#b").on("input propertychange", function() {
        var $this = $(this),
            _val = $this.val(),
            count = "";
        if (_val.length > 200) {
            $this.val(_val.substring(0, 200));
        }
        count = 200 - $this.val().length;
        $("#a").text(`已输入:${count}/200 字符`);
    });
//限制输入的字数
    $(".btnDiv").on("click",function(){
        if ($(this).attr("class").length > 6){
            $(this).attr("class","btnDiv");
        }else {
            $(this).attr("class","onbtnDiv btnDiv");
        }
    });
    $(".addSubmit").on("click",function(){
        // console.log($(this).parent());
    })
}
function addSubmit(pid,oid) {
    console.log(uid)
    $.ajax({
        url: "/goPay1.do",
        type: "post",
        data: {
            url: oid,
            state: "已入手"
        },
        success:function (data) {

        }
    });
    $.ajax({
        url: "/Myorderb11.do",
        type: "post",
        data: {
            img:"images/showImg/show1.jpg",
            text:$("#b").val(),
            uid: uid,
            pid:pid,
            getUser1: getUser1
        },
        success:function (data) {

        }
    });
    window.location.href="Myorder3.html"
}



$(function() {
    $('body').addClass('loaded');

    resizeUlnav();

    /*导航栏子菜单显示*/
    $(".leftNav>li").hover(function () {
        $($(this).children()[1]).css("display","block");
    },function () {
        $($(this).children()[1]).css("display","none");
    });

    /*导航的js鼠标悬停事件*/
    let imgsrc;
    $(".submenu li").hover(function () {
        imgsrc = $(this).children().children()[0].getAttribute("src");
        let huaji = imgsrc.split(".jpg");
        huaji.push("2");
        huaji.push(".jpg");
        let imgsrcH = huaji.join("");
        $(this).children().children()[0].setAttribute("src",imgsrcH);
        $($(this).children().children()[1]).css("color","white");
    },function () {
        $(this).children().children()[0].setAttribute("src",imgsrc);
        $($(this).children().children()[1]).css("color","#d8d8d8");
    });
    $(".submenusofa li").hover(function () {
        imgsrc = $(this).children().children()[0].getAttribute("src");
        let huaji = imgsrc.split(".jpg");
        huaji.push("2");
        huaji.push(".jpg");
        let imgsrcH = huaji.join("");
        $(this).children().children()[0].setAttribute("src",imgsrcH);
        $($(this).children().children()[1]).css("color","white");
    },function () {
        $(this).children().children()[0].setAttribute("src",imgsrc);
        $($(this).children().children()[1]).css("color","#d8d8d8");
    });

});
setTimeout(removeDiv,1000);
function removeDiv() {
    $('body').addClass('loaded');
    $('#loader-wrapper').remove();
}

$(window).resize(function () {
    resizeUlnav();
});

/*修改导航条的宽度*/
function resizeUlnav() {
    $(".submenu").css("width",$(window).width());
}


$(window).scroll(function () {
    //$(window).scrollTop()这个方法是当前滚动条滚动的距离
    //$(window).height()获取当前窗体的高度
    //$(document).height()获取当前文档的高度
    // if ((bot + $(window).scrollY()) >= ($(document).height() - $(window).height())) {
    //     //当底部基本距离+滚动的高度〉=文档的高度-窗体的高度时；
    //     //我们需要去异步加载数据了
    //     $.getJSON("url", { page: "2" }, function (str) { alert(str); });
    // // }
    // if($(window).scrollTop()>=260){
    //     $(".headerTop").css({top:"-45px"});
    //     $(".headerNav").css({top:"0"});
    // }
    // if($(window).scrollTop()<=260) {
    //     $(".headerTop").css({top:"0"});
    //     $(".headerNav").css({top:"-45px"});
    // }

    if ($(window).scrollTop()>=260){
        $(".backTop").slideDown()
    }else {
        $(".backTop").slideUp()
    }
});

/*===============================右侧的导航==========================================*/
$(".member").hover(function () {
    $(".member").children()[0].setAttribute("src","../images/nav/leftNav_41.png");
},function () {
    $(".member").children()[0].setAttribute("src","../images/nav/leftNav_43.png");
});
$(".shopCar").hover(function () {
    $(".shopCar").children()[0].setAttribute("src","../images/nav/shopCar1(2).png");
},function () {
    $(".shopCar").children()[0].setAttribute("src","../images/nav/shopCar.png");
});
$(".service").hover(function () {
    $(".service").children()[0].setAttribute("src","../images/nav/leftNav_23.png");
},function () {
    $(".service").children()[0].setAttribute("src","../images/nav/leftNav_31.png");
});
$(".backTop").hover(function () {
    $(".backTop").children()[0].setAttribute("src","../images/nav/leftNav_25.png");
},function () {
    $(".backTop").children()[0].setAttribute("src","../images/nav/leftNav_33.png");
});

/*==============购物车===============*/
$(".shopCar").click(function () {
    if ($(".leftMainNav").css("right")=="420px"){
        $(".leftMainNav").css("right","0");
        $(".shopCarDiv").css("right","-400px");
    }else {
        $(".leftMainNav").css("right","420px");
        $(".shopCarDiv").css("right","0");
    }

});


// 通过循环给所有的导航添绑定一个事件
(function addHref(){
    // 为一级导航条设置链接
    for(let i = 4 ;i<13 ; i++){
        $(".leftNav>li:nth-of-type("+i+")>a").attr("href","sofa.html?"+(i+10)+"");
        $(".leftNav>li:nth-of-type("+i+")>ul>li:nth-of-type(1)>a:nth-of-type(1)").attr("href","sofa.html?"+(i+10)+"");
        // console.log($(".leftNav>li:nth-of-type("+i+")>ul>li:nth-of-type(1)>a:nth-of-type(1)"));
    }
    // 为沙发下面的二级导航条设置链接
    for(let i = 1 ; i <10 ; i++) {
        $(".sofa>li:nth-of-type("+(i+1)+")>a").attr("href","sofa.html?"+((i+10)*100+i)+"");
    }
    // 为卓几下面的二级导航条设置链接
    for(let i = 1 ; i <10 ; i++) {
        $(".Stool>li:nth-of-type("+(i+1)+")>a").attr("href","sofa.html?"+(((i+10)+1)*100+i)+"");
    }
    // 为板凳下面的二级导航条设置链接
    for(let i = 1 ; i <10 ; i++) {
        $(".wooden>li:nth-of-type("+(i+1)+")>a").attr("href","sofa.html?"+(((i+10)+2)*100+i)+"");
    }
    // 为柜架下面的导航条设置链接
    for(let i = 1 ; i <10 ; i++) {
        $(".tankBracket>li:nth-of-type("+(i+1)+")>a").attr("href","sofa.html?"+(((i+10)+3)*100+i)+"");
    }
    // 为灯具下面的导航条设置链接
    for(let i = 1 ; i <10 ; i++) {
        $(".light>li:nth-of-type("+(i+1)+")>a").attr("href","sofa.html?"+(((i+10)+4)*100+i)+"");
    }
    // 为床、床品下面的导航条设置链接
    for(let i = 1 ; i <10 ; i++) {
        $(".bed>li:nth-of-type("+(i+1)+")>a").attr("href","sofa.html?"+(((i+10)+5)*100+i)+"");
    }
    // 为家纺下面的导航条设置链接
    for(let i = 1 ; i <10 ; i++) {
        $(".homeTextiles>li:nth-of-type("+(i+1)+")>a").attr("href","sofa.html?"+(((i+10)+6)*100+i)+"");
    }
    // 为装饰下面的导航条设置链接
    for(let i = 1 ; i <10 ; i++) {
        $(".decorate>li:nth-of-type("+(i+1)+")>a").attr("href","sofa.html?"+(((i+10)+7)*100+i)+"");
    }
    // 为餐具下面的导航条设置链接
    for(let i = 1 ; i <10 ; i++) {
        $(".tableware>li:nth-of-type("+(i+1)+")>a").attr("href","sofa.html?"+(((i+10)+8)*100+i)+"");
    }
})();


// ===========================个人中心的页面跳转======================================

let huaju_id=localStorage.getItem("u_id");
$(document).ready(function(){
    getUserID()
});
function getUserID(){
    $(".getUserID").attr("href","mydiscount.do?NUMSS="+huaju_id);
    $(".getUserIDinfo").attr("href","Myinformation.do?NUMSS="+huaju_id)
}

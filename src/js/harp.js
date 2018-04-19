var changeS=false;
var changeC=false;
var xxxxcolora=false;
var xxxxcolorb=false;


$(".outpad").click(function(){
    // console.log("huaji");
    $(this).addClass("huaji");
    $(this).css("color","black");
    $(this).siblings().removeClass("huaji");
    $(this).siblings().css("color","rgba(0, 0, 0, 0.49)")
});



$(".changeS").click(function () {
    changeS=true;
    let style=$(this).html();
    console.log(style)
    if(style=="全幅版三人座"){
        $(".changef")[0].src="../images/CofaL/CofaL_rgz_qfbsrz.jpg";
        $(".xxprice").html("54139")
    }else if(style=="全幅版单人座"){
        $(".changef")[0].src="../images/CofaL/CofaL_rgz_qfbdrz.jpg";
        $(".xxprice").html("21839")

    }else if(style=="全幅版脚墩"){
        $(".changef")[0].src="../images/CofaL/CofaL_rgz_qfbjd.jpg";
        $(".xxprice").html("8539")

    }else if(style=="精致版三人座"){
        $(".changef")[0].src="../images/CofaL/CofaL_rgz_jzbsrz.jpg";
        $(".xxprice").html("44639")

    }else if(style=="精致版单人座"){
        $(".changef")[0].src="../images/CofaL/CofaL_rgz_jzbdrz.jpg";
        $(".xxprice").html("19139")

    }
});

let color;
$(".changeC").click(function () {
    changeC=true;
    console.log($(this).html());
    color=$(this).html()
});

$(".xxxxcolora").click(function () {
    xxxxcolora=true;
    let color=$(this).html();
    if(color=="茶白"){
        $(".changxxxx")[0].src="../images/Harp/harpaaa.jpg"
    }else if(color=="抹绿"){
        $(".changxxxx")[0].src="../images/Harp/harpbbb.jpg"
    }
});
$(".xxxxcolorb").click(function () {
    xxxxcolorb=true;
});











$(".bb_row").mouseover(function () {
    $(this).css("border-bottom","2px black solid");
    $(this).siblings().css("border-bottom","none")
});
$(".bb_row").click(function () {
    var ss=$(this).children()[0].src;
    var s=ss.split("_");
    // console.log(ss)
    // console.log(s[1])
    $.ajax({
        type:"get",
        url:"walala.do",
        data:{
            id:s[1]
        },
        success:function (data) {
            console.log("拿到数据"+data);
            $("#a_row").children()[0].src=data
        },
        async:true
    })
});
var number11;
let getUser1=sessionStorage.getItem("myUser");
var url = decodeURI(location).substr(22);
$(".px442").click(function () {
    if(!getUser1){
        window.location.href="login.html";
        sessionStorage.setItem("mytiao",url);
        localStorage.setItem("mytiao",url);
    }else {
        if(xxxxcolora&&xxxxcolorb){
            $.ajax({
                type:"post",
                url:"/harp1.do",
                async:false,
                data:{
                    img:$(".changxxxx")[0].getAttribute("src")
                },
                success:function (data) {
                    number11=data[0].p_id
                },
            });
            $.ajax({
                type:"post",
                url:"/harp2.do",
                async:false,
                data:{
                    getUser1:getUser1,
                    number11:number11,
                    num1:$("#num1").val()
                },
                success:function (data) {

                },
            });
            window.location.href="shopCar.html"
        }
        if(changeS&&changeC){
            $.ajax({
                type:"post",
                url:"/harp1.do",
                async:false,
                data:{
                    img:$(".changef")[0].getAttribute("src")
                },
                success:function (data) {
                    number11=data[0].p_id
                },
            });
            $.ajax({
                type:"post",
                url:"/harp2.do",
                async:false,
                data:{
                    getUser1:getUser1,
                    number11:number11,
                    num1:$("#num2").val()
                },
                success:function (data) {

                },
            });
            window.location.href="shopCar.html"
        }
    }
});
$(".px441").click(function () {
    var random=Math.random()*100000000000000000;
    var order="未发货";
    var quantity=0;/*订单id*/
    var time=new Date();
    var time1="预计"+time.getFullYear()+"-"+(time.getMonth()+1)+"-"+(time.getDate()+2)+"前发货";
    console.log($(".fw_700").text());

    if(!getUser1){
        window.location.href="login.html";
        sessionStorage.setItem("mytiao",url);
        localStorage.setItem("mytiao",url);
    }else {
        if(xxxxcolora&&xxxxcolorb){
            $.ajax({
                url: "/shopCar3.do",
                type: "post",
                async:false,
                data: {
                    getUser1:getUser1,
                    random:random,
                    myShu3:$(".fw_700").text(),
                    myShu4:$(".fw_700").text(),
                    order:order
                },
                success:function (data) {
                }
            });
            $.ajax({
                url: "/shopCar4.do",
                type: "post",
                async:false,
                // data: {
                //     getUser1:getUser1,
                // },
                success:function (data) {
                    quantity=data.length
                }
            });
            $.ajax({
                type:"post",
                url:"/harp1.do",
                async:false,
                data:{
                    img:$(".changxxxx")[0].getAttribute("src")
                },
                success:function (data) {
                    number11=data[0].p_id
                },
            });
            $.ajax({
                url: "/shopCar5.do",
                type: "post",
                async:false,
                data: {
                    quantity:quantity,
                    product:number11,
                    numcer:$("#num1").val(),
                    time:time1
                },
                success:function (data) {
                }
            });
            window.location.href="Payconfirm.html?"+quantity+""
        }
        if(changeS&&changeC){
            $.ajax({
                url: "/shopCar3.do",
                type: "post",
                async:false,
                data: {
                    getUser1:getUser1,
                    random:random,
                    myShu3:$(".xxprice").text(),
                    myShu4:$(".xxprice").text(),
                    order:order
                },
                success:function (data) {
                }
            });
            $.ajax({
                url: "/shopCar4.do",
                type: "post",
                async:false,
                // data: {
                //     getUser1:getUser1,
                // },
                success:function (data) {
                    quantity=data.length
                }
            });
            $.ajax({
                type:"post",
                url:"/harp1.do",
                async:false,
                data:{
                    img:$(".changef")[0].getAttribute("src")
                },
                success:function (data) {
                    number11=data[0].p_id
                },
            });
            $.ajax({
                url: "/shopCar5.do",
                type: "post",
                async:false,
                data: {
                    quantity:quantity,
                    product:number11,
                    numcer:$("#num2").val(),
                    time:time1
                },
                success:function (data) {
                }
            });
            window.location.href="Payconfirm.html?"+quantity+""
        }
    }
});

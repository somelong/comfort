var getUser1=sessionStorage.getItem("myUser");
var time=new Date();
var myShu1=0;
var myShu2=0;
var myShu3=0;
var myShu4=0;
var myShu5=0;
var myShu6=0;
var shuzhu=[];
var mytime=[];
window.onload=function () {
    $.ajax({
        url:"/shopCar.do",
        type:"post",
        data:{
            getUser1:getUser1
        },
        success:function (data) {
            console.log("返回查询出来的数据");
            console.log(data);
           var time3=time.getDate();
            var shopHtml="";
            for(var i=0;i<data.length;i++){
                shuzhu.push(data[i].p_price);
                var suoji= Math.random()*10;
                if (parseInt(suoji)<4){
                    time3+=1
                }else if(parseInt(suoji)<=6){
                    time3+=2
                }else {
                    time3+=3
                }
                var time1=time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time3;
                shopHtml+="<div class='goodBox'>"+
                    "<div class='goodText'>"+
                    "<input type='checkbox'  onchange='mycheckbox(this,"+data[i].p_price+","+data[i].p_priceView+")' class='test' myvlue="+data[i].p_id+">"+
                    "<a class='goodJump' href=''>"+
                    "<img src="+data[i].p_img+" class='img-responsive' alt=''>"+
                    "<div></div>"+
                    "</a>"+
                    "<div class='introduce'>"+
                    "<span class='goodsName'>"+data[i].p_subject+"</span>"+
                "<span class='dateTime text-gray'>预计"+time1+"前发货</span>"+
                "<span class='mycolor'>"+data[i].p_color+"</span>"+
                "<span class='text-gray mygray'>修改</span>"+
                    "<span class='goodsPrice after' data-attr=¥"+data[i].p_priceView+" myvlue="+data[i].p_priceView+">¥"+data[i].p_price+"</span>"+
                    "</div>"+
                    "<div class='numChange'>"+
                    "<span onclick='myJian(this,"+data[i].s_id+")'>-</span>"+
                    "<span class='myGood'>"+data[i].good_num+"</span>"+
                    "<span onclick='myZheng(this,"+data[i].s_id+")'>+</span>"+
                    "</div>"+
                    "<span aria-hidden='true' onclick='myShanChu(this,"+data[i].s_id+")' class='close' myvlue="+data[i].s_id+">&times;</span>"+
                "</div>"+
                "</div>"
            }
            $("#shopCh").html(shopHtml);
        }
    });
};
function mycheckbox(obj,jia,jia1) {
var num=parseInt(obj.nextSibling.nextSibling.nextSibling.childNodes[1].innerText);
    if(obj.checked){
        myShu1=myShu1+num;
        myShu3+=jia*num;
        myShu4+=(jia1*num-jia*num)
    }else {
        myShu1=myShu1-num;
        myShu3=myShu3-(jia*num);
        myShu4=myShu4-(jia1*num-jia*num)
    }
    $("#mySpan").text(myShu1);
    $("#test3").text("¥"+myShu3);
    $("#test4").text("已优惠¥"+myShu4)
}


function myZheng(obj,id) {
    var num=parseInt(obj.previousSibling.innerText);
    num++;
    $.ajax({
        url: "/shopCar1.do",
        type: "post",
        data: {
            num:num,
            id:id
        },
        success:function (data) {

        }
    });
    obj.previousSibling.innerText=num;
}
function myJian(obj,id) {
    var num=parseInt(obj.nextSibling.innerText);
    if(num==1){
        num=1
    }else {
        num--;
    }
    $.ajax({
        url: "/shopCar1.do",
        type: "post",
        data: {
            num:num,
            id:id
        },
        success:function (data) {

        }
    });
    obj.nextSibling.innerText=num;
}
$("#test2").change(function () {
   if(this.checked){
       for (var i=0;i<$(".test").length;i++){
           if(!$(".test")[i].checked){
               $(".test")[i].checked=true;
           }
       }
       for (var i=0;i<$(".myGood").length;i++){
           myShu2+=parseInt($(".myGood")[i].innerText);
       }
       for(var i=0;i<$(".goodsPrice").length;i++){
           var number2=parseInt($(".goodsPrice")[i].getAttribute("myvlue"));/*真实价格*/
           var number1=parseInt($(".goodsPrice")[i].innerText.substr(1));/*原来价格*/
           myShu5+=number1*parseInt($(".myGood")[i].innerText);
           myShu6+=(number2*parseInt($(".myGood")[i].innerText)-number1*parseInt($(".myGood")[i].innerText));
       }
   }else {
       for (var i=0;i<$(".test").length;i++){
           $(".test")[i].checked=false;
       }
       myShu2=0;
       myShu1=0;
       myShu5=0;
       myShu6=0;
       myShu3=0;
       myShu4=0;

   }
    myShu3=myShu5;
    myShu4=myShu6;
    $("#mySpan").text(myShu2);
    $("#test3").text("¥"+myShu5);
    $("#test4").text("已优惠¥"+myShu6);
});
function myShanChu(obj,id) {
    var shopCh=document.getElementById("shopCh");
    $.ajax({
        url: "/shopCar2.do",
        type: "post",
        data: {
            id:id
        },
        success:function (data) {

        }
    });
    shopCh.removeChild(obj.parentNode.parentNode)
}
setInterval(mySpan,100);
 function mySpan() {
  if(myShu3==0){
     $("#payJump").css("background-color","#cdcdcd")
  } else {
      $("#payJump").css("background-color","#46976e");
  }
}
function payJump() {
    var getUser1=sessionStorage.getItem("myUser"); /*用户电话*/
    var random=Math.random()*100000000000000000;
    var order="待付款";
    var quantity=0;/*订单id*/
    var product=[];/*产品id*/
    var numcer=[];/*产品数量*/
    var shangping=[];/*商品id*/
    if(myShu3!=0){
        $.ajax({
            url: "/shopCar3.do",
            type: "post",
            async:false,
            data: {
                getUser1:getUser1,
                random:random,
                myShu3:myShu3,
                myShu4:myShu4,
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
        for(let i=0;i<$(".test").length;i++){
           if($(".test")[i].checked){
               product.push($(".test")[i].getAttribute("myvlue"));
               numcer.push($(".myGood")[i].innerText);
               shangping.push($(".close")[i].getAttribute("myvlue"));
               mytime.push($(".dateTime")[i].innerText)
           }
        }
        for(let i=0;i<shangping.length;i++ ){/*删除表数据*/
            shopCar2(shangping[i]);
            shopCar5(quantity,product[i],numcer[i],mytime[i])
        }
        window.location.href="Payconfirm.html?"+quantity+"";
    }
    function shopCar2(id) {
        $.ajax({
                url: "/shopCar2.do",
                type: "post",
                async:false,
                data: {
                    id:id
                },
                success:function (data) {
                }
            });
    }
    function shopCar5(quantity,product,numcer,time) {
        $.ajax({
            url: "/shopCar5.do",
            type: "post",
            async:false,
            data: {
                quantity:quantity,
                product:product,
                numcer:numcer,
                time:time
            },
            success:function (data) {
            }
        });
    }
}

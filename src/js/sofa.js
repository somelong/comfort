let href;
let allData = "";
let a = 1; // 行数

(function showView(){
    href = location.search.replace("?","");
    if(href.length == 4){
        console.log("点击的是下面的子菜单");
        minorAjax();
    }else if(href.length == 2){
        console.log("点击的是上面的主菜单");
        mainAjax();
    }
})();

function mainAjax(){
    $.ajax({
        url:"getMainCommodityView.do",
        type:"post",
        data:{
            href:href
        },
        success:function (data) {
            console.log("请求成功");
            xianshi(data);
        }
    })
}

function minorAjax(){
    $.ajax({
        url:"getMinorCommodityView.do",
        type:"post",
        data:{
            href:href
        },
        success:function (data) {
            console.log("请求成功");
            xianshi(data);
        }
    })
}

function xianshi(data){
    console.log(data);

    for(let i = 0 ;i<data.length ;i++){
        if(i == 0 || (i%4 == 0 && i>=4)){
            // console.log("生成一个头"+i);
            allData += " <div class=\"row text-center margin-top-20 sofaProductRow"+a+"\">";
            a++;
        }
        // if(i%4 != 0 || i == 0 || i == 4 || i == 8){
        //     console.log("生成一个内容"+i);
            allData +=  "<a class='changeherf' href=\""+data[i].p_number+"\">\n" +
                "            <div class=\"col-xs-3 sofaProduct\">\n" +
                "                <div class=\"showimg\">\n" +
                "                    <img src=\""+data[i].p_img+"\" class=\"img-responsive\">\n" +
                "                    <p class=\"sofaNmae\">"+data[i].p_name+"</p>\n" +
                "                    <p>\n" +
                "                        <span class=\"softDazhe\">￥"+data[i].p_price+"</span>\n" +
                "                        <span class=\"sofaPrice deletePrice\">"+data[i].p_priceView+"</span>\n" +
                "                    </p>\n" +
                "                    <p class=\"spfaOther\">\n" +
                "                        <span class=\"label_1\">"+data[i].p_discounts+"</span>\n" +
                // "                        <span class=\"label_2\">"+data[i].p_discounts+"</span>\n" +
                "                        <span class=\"label_3\">"+data[i].p_scolor+"</span>\n" +
                "                    </p>\n" +
                "                </div>\n" +
                "                <div class=\"hoverShow\">\n" +
                "                    <p>"+data[i].p_text+"</p>\n" +
                "                    <p>"+data[i].p_ecname+"</p>\n" +
                "                    <p>"+data[i].p_area+"</p>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </a>";
        // }
        if((i+1)%4 == 0 && i != 0){
            // console.log("生成一个尾"+i);
            allData += "</div>";
        }
    }

    if(data.length%4 != 0){
        // console.log("滑稽,生成一个尾");
        allData += "</div>";
    }

    $(".container").html(allData);
    addClass();
    changeHerf();
}


function addClass(){
    let num = 1;
    $(".sofaProductRow1").addClass("animated fadeInUp");
    $(function () {
        let numTime = setInterval(function () {
            num++;
            if (num == 4){
                clearInterval(numTime);
            }
            $(".sofaProductRow"+num+"").addClass("animated fadeInUp");
        },200);
    });
}

function changeHerf(){
    let alength = $(".changeherf").length;
    for(let i=0;i<alength;i++){
        if(($(".changeherf")[0].href.charAt($(".changeherf")[0].href.length - 1)) == 2){
            $(".changeherf")[i].setAttribute("href","goodxxxx");

        }else{
            $(".changeherf")[i].setAttribute("href","goodxx");
        }
    }
}
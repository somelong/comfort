$(function () {
    qingqiu();
});


function qingqiu() {
    $.ajax({
        url:"qingqiu.do",
        type:"get",
        data:{},
        async : false,
        success:function (data) {
            // console.log(data);
            // console.log("请求成功");
            addData(data);
        }
    })
}

// console.log("调用测试文件")
function addData(data){
    // console.log(data);
   var allData= "";
   var  a = 1;
    for(let i = 0 ;i<data.length ;i++) {
        if (i == 0 || (i % 4 == 0 && i >= 4)) { //0 4 8
            // console.log("生成一个头"+i);
            allData += " <div class=\"row text-center margin-top-20 sofaProductRow" + a + "\">";
            a++;
        }
            allData += "<a class='changeherf' href=\""+data[i].p_number+"\">\n" +
                "            <div class=\"col-xs-3 sofaProduct\">\n" +
                "                <div class=\"showimg\">\n" +
                "                    <img src=\"" + data[i].p_img + "\" class=\"img-responsive\">\n" +
                "                    <p class=\"sofaNmae\">" + data[i].p_name + "</p>\n" +
                "                    <p>\n" +
                "                        <span class=\"softDazhe\">￥" + data[i].p_price + "</span>\n" +
                "                        <span class=\"sofaPrice deletePrice\">" + data[i].p_priceView + "</span>\n" +
                "                    </p>\n" +
                "                    <p class=\"spfaOther\">\n" +
                "                        <span class=\"label_1\">" + data[i].p_discounts + "</span>\n" +
                // "                        <span class=\"label_2\">"+data[i].p_discounts+"</span>\n" +
                "                        <span class=\"label_3\">" + data[i].p_scolor + "</span>\n" +
                "                    </p>\n" +
                "                </div>\n" +
                "                <div class=\"hoverShow\">\n" +
                "                    <p>" + data[i].p_text + "</p>\n" +
                "                    <p>" + data[i].p_ecname + "</p>\n" +
                "                    <p>" + data[i].p_area + "</p>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </a>";
        if ((i+1)%4 == 0 && i != 0) {   //1 3 7 11  / / 0 1 2   6  9    10  4 5 8
            allData += "</div>";
        }
    }
    if((data.length)%4 != 0){
        allData += "</div>";
    }

    $(".ceshi").after(allData);
    changeHerf();
}

function changeHerf(){
    let alength = $(".changeherf").length;
    for(let i=0;i<alength;i++){
        if(($(".changeherf")[i].href.charAt($(".changeherf")[i].href.length - 1)) == 1){
            $(".changeherf")[i].setAttribute("href","goodxxxx");

        }else{
            $(".changeherf")[i].setAttribute("href","goodxx");
        }
    }
}
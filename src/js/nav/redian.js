// window.onload=function () {
//     redian()
// };
$(function () {
    redian()
});
function redian() {
    $.ajax({
        url:'redian.do',
        type:'get',
        data:{},
        async : false,
        success:function (data) {
            // console.log(data)
            nweS(data)
        }
    })
}
function nweS(data) {
    var Dou=''
    var a=1;
    for (var i=0;i<data.length;i++) { //0 2
        if(i==0||i%2==0){
            Dou+="<div class=\"row text-center content1\">"
            a++;
        }
        if (i%2==0) {
            Dou+="<div class=\"col-md-6 col-sm-6 col-xs-12 img-left text-left img-left1\">\n" +
                "                    <img src="+data[i].ac_img+" class=\"img-responsive\" alt=\"\">\n" +
                "                    <div class=\"zhe\"></div>\n" +
                "                    <div class=\" col-lg-12\">\n" +
                "                        <h4>"+data[i].ac_zt+"</h4>\n" +
                "                        <p>"+data[i].ac_ft+"</p>\n" +
                "                        <div class=\"col-md-3\"><p class=\"btn-info text-center\">"+data[i].ac_type+"</p></div>\n" +
                "                        <div class=\"col-md-9\">\n" +
                "                            <p class=\"text-right page-header more\">查看更多>></p>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>"
        }
        if (i%2==1) {
            Dou+="<div class=\"col-md-6 col-sm-6 col-xs-12 img-right text-left img-right1\">\n" +
                "                     <img src="+data[i].ac_img+" class=\"img-responsive\" alt=\"\">\n" +
                "                    <div class=\"zhe\"></div>\n" +
                "                    <div class=\" col-lg-12\">\n" +
                "                         <h4>"+data[i].ac_zt+"</h4>\n" +
                "                         <p>"+data[i].ac_ft+"</p>\n" +
                "                        <div class=\"col-md-3\"><p class=\"btn-info text-center\">"+data[i].ac_type+"</p></div>\n" +
                "                        <div class=\"col-md-9\">\n" +
                "                            <p class=\"text-right page-header more\">查看更多>></p>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>"
        }
    }
    if (data.length%2==0) {
        Dou+="</div>"
    }
    $(".redian").after(Dou)
}
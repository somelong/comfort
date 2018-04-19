$(function () {
    bananer()
});
function bananer() {
    $.ajax({
        url:'bananer.do',
        type:'post',
        data:{},
        async:false,
        success:function (data) {
            // console.log("少年，这是你的银斧头吗？")
            // console.log(data)
            addbanA(data)
            // console.log("shfjshfjshfkjashfjhaf")
        }
    })
}

function addbanA(data) {

    var addbanm='';
    for(let i=0;i<data.length;i++) {
            addbanm += "<li><a href=\"activity.html\"><img class=\"img-responsive\" src=\"" + data[i].ps_imgs + "\" alt=\"\"></a></li>\n"

    }$(".banan").html(addbanm)
}
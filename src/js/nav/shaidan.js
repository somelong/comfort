// window.onload=function () {
//
// };
$(function () {
    shaidan()
});
function shaidan() {
    $.ajax({
        url:'shaidan.do',
        type:'get',
        data:{},
        async : false,
        success:function (data) {
            console.log("dssssssssssssssssssssss")

        }
    })
}
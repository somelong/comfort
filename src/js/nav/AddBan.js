$(function () {
    Addban()


});

function Addban() {
    $.ajax({
        url:'Addbananer.do',
        type:'post',
        data:{},
        async:false,
        success:function () {
            console.log("少年2")
        }
    })
}

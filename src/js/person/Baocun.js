let mytiao=sessionStorage.getItem("mytiao");

function Baocun() {
    let phone=$("#exampleInputEmail1").val();
    let password=$("#exampleInputPassword1").val();
    $.ajax({
        /*页面加载的时候*/
        url: "/login.do",
        type: "post",
        data: {
            phone: phone,
            password: password
        },
        success:function (data) {
            if (data.length > 0){
                window.location.href=mytiao
            }else {
                window.location.href="zhucecode.html"
            }
        }
    });

    let username=document.getElementById("exampleInputEmail1").value;
    sessionStorage.setItem("myUser",username);
    localStorage.setItem("myUser",username);
}

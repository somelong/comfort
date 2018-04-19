var getUser1=sessionStorage.getItem("myUser");
function PersonMember11(){
    if(getUser1){
        window.location.href="Person-Member1.html";
    }else {
        window.location.href="login.html"
    }
    sessionStorage.setItem("mytiao","index.html");
    localStorage.setItem("mytiao","index.html");
}
function PersonMember2(){
    if(getUser1){
        window.location.href="ShopCar.html";
    }else {
        window.location.href="login.html"
    }
    sessionStorage.setItem("mytiao","index.html");
    localStorage.setItem("mytiao","index.html");
}



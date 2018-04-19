    $(function () {
        rediandele()

    });
    function rediandele() {
        $.ajax({
            url:'/rediandelet.do',
            type:'post',
            data:{},
            async:false,
            success:function () {
                console.log("少年")
            }
        })
    }
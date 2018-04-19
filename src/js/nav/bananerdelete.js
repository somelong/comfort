    $(function () {
        BananerBa()


    });

    function BananerBa() {
        $.ajax({
            url:'bananerde.do',
            type:'post',
            data:{},
            async:false,
            success:function () {
                console.log("少年2")
            }
        })
    }



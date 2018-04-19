        $(function () {
          stidBa()

        });
        function stidBa() {
            $.ajax({
                url:'/stdde.do',
                type:'get',
                data:{},
                async:false,
                success:function () {
                    console.log("少年")
                }
            })
        }
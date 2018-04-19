        $(function () {
            cpdele()

        });
        function cpdele() {
            $.ajax({
                url:'/canpindelete.do',
                type:'post',
                data:{},
                async:false,
                success:function () {
                    console.log("少年")
                }
            })
        }
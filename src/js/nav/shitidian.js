
    $(function () {
        shitidian();
    });


    function shitidian() {

        $.ajax({
            type: "get",
            url: "/shitidian.do",
             async:false,
            data:{

            },
            success: function (data) {
                // console.log("渔夫，这是你掉的金斧头吗！");
                addR(data)
            },

        })

    }


    function  addR(data) {
        var aLLd='';
        var a=1;
        for (let i = 0;i <2;i++){
            if (i == 0||i%2==0) {
                // console.log("生成一个头")
                aLLd+=" <div class=\"row\">"
                a++
            }
            if(i%2==0){
                // console.log("生成一个偶数内容")
                aLLd+=" <div class=\"col-md-6 col-xs-6 physicalStoreLeft\">\n" +
                    "                <a href=\"\"><img class=\"img-responsive\" src=\""+data[i].ps_img+"\" alt=\"\"></a>\n" +
                    "<p style='font-size: 16px; margin-top: 20px;'>"+data[i].ps_zt+"</p>"+
                    "<p style='font-size: 14px; color: #6d6d6d'>"+data[i].ps_ft+"</p>"+
                    "            </div>"
            }
            if(i%2==1){
                // console.log("生成一个基数内容")
                aLLd+="<div class=\"col-md-6 col-xs-6 physicalStoreRight\">\n" +
                    "                <a href=\"\"><img class=\"img-responsive\" src=\""+data[i].ps_img+"\" alt=\"\"></a>\n" +
                    "<p style='font-size: 16px; margin-top: 20px;'>"+data[i].ps_zt+"</p>"+
                    "<p style='font-size: 14px; color: #6d6d6d'>"+data[i].ps_ft+"</p>"+
                    "            </div>"
            }
        }if(data.length%2 == 0){
            // console.log("生成一个尾巴")
            aLLd+="</div>"

        }   $(".shitidian").after(aLLd)

    }


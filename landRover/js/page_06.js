/**
 * Created by Administrator on 2016/9/20.
 */
$("#header").load("data/01_header.php",function(){
    /*header>li添加点击事件*/
    $(document.body).on("click","#header li",function(){
        $(this).addClass("hover")
            .siblings(".hover").removeClass("hover");
    });
});
$("#allFooter").load("data/02_footer.php");

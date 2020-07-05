/**
 * Created by LiuweiPC on 2016/9/17.
 */
/*加载头部底部*/
$("#header").load("data/01_header.php",function(){
    /*header>li添加点击事件*/
    $(document.body).on("click","#header li",function(){
        $(this).addClass("hover")
            .siblings(".hover").removeClass("hover");
    });
});
$("#allFooter").load("data/02_footer.php",function(){
    $("#connect").remove();
});
/*****/
$("a.planDetails").click(function(e){
    e.preventDefault();
    $(this).parent().parent().parent().next().fadeIn(800);
});
$("span.closeDetails").click(function(){
    $(this).parent().fadeOut(500);
});
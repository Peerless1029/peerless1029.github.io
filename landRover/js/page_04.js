/**
 * Created by Administrator on 2016/9/19.
 */
/*加载头部底部*/
$("#header").load("data/01_header.php",function(){
    /*header>li添加点击事件*/
    $(document.body).on("click","#header li",function(){
        $(this).addClass("hover")
            .siblings(".hover").removeClass("hover");
    });
});
$("#allFooter").load("data/02_footer.php");
/**图片轮播**/
var imgs=[
    {"i":0,"img":"css/images/video_03.mp4","tagname":"video"},
    {"i":1,"img":"css/images/brand_02.jpg","tagname":"img"}
];
slider(imgs);
/**为sapn.down绑定页面滚动事件事件**/
$("#banner span.down").click(function(){
        var t = $("#founder")[0].offsetTop;
        $(document.body).animate(
            {scrollTop: t+'px'},
            1500);
    }
);
/**为图片绑定鼠标移入事件**/
$("div.right").mouseover(function(){
   $(this).children(".shadow").show();
});
$("div.right").mouseout(function(){
    $(this).children(".shadow").hide();
});
/**箭头滑动**/
$("div.tech").on("click","div.arrow>button",function(){
    var html=$(this).html();
    var currentNumber=parseInt(
        $(this).siblings(".currentnumber").html());
    var total=parseInt($(this).siblings(".total").data("value"));
    if(html=="&gt;"){
        currentNumber<total&&currentNumber++;
        $(this).siblings(".currentnumber").html(currentNumber);
    }else if(html=="&lt;"){
        currentNumber>1&&currentNumber--;
        $(this).siblings(".currentnumber").html(currentNumber);
    }
    if(currentNumber==total||currentNumber==1){
        $(this).addClass("noSlide");
    }
    else if(currentNumber!=total||currentNumber!=1){
        $("button").removeClass("noSlide");
    }
    $(this).parent().prev("ul").animate({
        "left":-(currentNumber-1)*1250+"px"
    },1000);
});

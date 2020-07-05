/**
 * Created by Administrator on 2016/9/18.
 */
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
$("#allFooter").load("data/02_footer.php");
/**图片轮播**/
var imgs=[
    {"i":0,"img":"css/images/expe_01.jpg","tagname":"img"},
    {"i":1,"img":"css/images/expe_02.jpg","tagname":"img"},
    {"i":2,"img":"css/images/expe_03.jpg","tagname":"img"},
    {"i":3,"img":"css/images/expe_04.jpg","tagname":"img"},
    {"i":4,"img":"css/images/expe_05.jpg","tagname":"img"},
    {"i":5,"img":"css/images/expe_06.jpg","tagname":"img"}
];
slider(imgs);
/**为sapn.down绑定页面滚动事件事件**/
$("#banner span.down").click(function(){
        //var t = $("#main")[0].offsetTop;
        $(document.body).animate(
            {scrollTop: 845+'px'},
            1500);
    }
);
/*为按钮绑定点击页面左右滑动事件*/
$("#expe").on("click","div.arrow>button",function(){
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
    $(this).parent().prev("ul").animate({
        "left":-(currentNumber-1)*1300+"px"
    },1000);
});

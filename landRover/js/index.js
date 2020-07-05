/**头部底部php加载**/
$("#header").load("data/01_header.php",function(){
	/*header>li添加点击事件*/
	$(document.body).on("click","#header li",function(){
		$(this).addClass("hover")
			   .siblings(".hover").removeClass("hover");
	});
});
$("#allFooter").load("data/02_footer.php");
var imgs=[
{"i":0,"img":"css/images/banner_01.jpg"},
{"i":1,"img":"css/images/banner_02.jpg"},
{"i":2,"img":"css/images/banner_03.jpg"},
{"i":3,"img":"css/images/banner_04.jpg"},
{"i":4,"img":"css/images/banner_05.jpg"},
{"i":5,"img":"css/images/banner_06.jpg"}
];
slider(imgs);
/**为sapn.down绑定页面滚动事件事件**/
$("#banner span.down").click(function(){
		var t = $("#main")[0].offsetTop;
	$(document.body).animate(
		{scrollTop: t+'px'},
		1500);
}
);
/**为header的搜索框绑定点击ajax异步请求**/

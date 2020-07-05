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
/**图片轮播**/
var imgs=[
    {"i":0,"img":"css/images/service_01.jpg","tagname":"img"},
    {"i":1,"img":"css/images/service_02.jpg","tagname":"img"}
];
slider(imgs);
/**为sapn.down绑定页面滚动事件事件**/
$("span.down").click(function(){
        var t = $("#service")[0].offsetTop;
        $(document.body).animate(
            {scrollTop:t+'px'},
            1500);
    }
);
/**查看经销商地图服务**/
FusionCharts.ready(function(){
    var chart = new FusionCharts({
            type: 'column2d',
            renderAt: 'saleNum',
            width: '650',
            height: '500',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "路虎品牌过去一年每月销量",
                    "xAxisName": "月份",
                    "theme": "fint"
                },
                "data": [
                    {"lebel":"1月","value":"5772"},
                    {"lebel":"10月","value":"6851"},
                    {"lebel":"11月","value":"5060"},
                    {"lebel":"12月","value":"3617"},
                    {"lebel":"1月","value":"7027"},
                    {"lebel":"2月","value":"6327"},
                    {"lebel":"3月","value":"4951"},
                    {"lebel":"4月","value":"6627"},
                    {"lebel":"5月","value":"3427"},
                    {"lebel":"6月","value":"5694"},
                    {"lebel":"7月","value":"7627"},
                    {"lebel":"8月","value":"7065"}
                ]
            }
        }
    );
    chart.render();
});

/***实现第三方百度地图功能***/
var map = new BMap.Map("bMap");
var point = new BMap.Point(114.321107,30.60342);
map.centerAndZoom(point,12);
/**显示控件**/
var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function(r){
    if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        alert('您的位置：'+r.point.lng+','+r.point.lat);
    }
    else {
        alert('failed'+this.getStatus());
    }
},{enableHighAccuracy: true});
/**页面加载完成后添加控件**/
$(function(){
    map.addControl(top_left_control);
    map.addControl(top_left_navigation);
    map.addControl(top_right_navigation);
});
var myKeys = ["路虎汽车"];
var local = new BMap.LocalSearch(map, {
    renderOptions:{map: map, panel:"result"},
    pageCapacity:5
});
local.searchInBounds(myKeys, map.getBounds());

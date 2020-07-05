/**
 * Created by Administrator on 2016/9/19.
 */
function slider(imgs){
    var adv={
        LIWIDTH:0,
        DISTANCE:0,
        DURATION:1000,
        STEPS:300,
        interval:0,
        step:0,
        moved:0,
        timer:null,
        WAIT:3000,
        canAuto:true,
        init:function(){
            this.LIWIDTH=parseFloat($("#banner").css("width"));
            this.interval=this.DURATION/this.SETPS;
            this.updateView();
            $("#index").on("click","li",function(e){
                var target=e.target;
                var n=parseInt($(target).html())-parseInt($("#index>li.hover").html());
                //console.log("---------执行一次移动---------------");
                this.move(n);
            }.bind(this));
            this.autoMove();
            $("#banner").mouseover(function(){
                this.canAuto=false;;
            }.bind(this));
            $("#banner").mouseout(function(){
                this.canAuto=true;
            }.bind(this));
        },
        updateView:function(){
            for(var i=0,htmlimg='',htmlidxs='';i<imgs.length;i++){
                var img=imgs[i];
                if(img.tagname=="video"){
                    htmlimg+="<li><video src="+img.img+" width=1300 height=731 autoplay loop></video></li>";
                }else{
                    htmlimg+="<li><img src="+img.img+" width=1300 height=731/></li>";
                }
                htmlidxs+="<li>"+(i+1)+"</li>";
            }
            $("#imgs").html(htmlimg);
            $("#index").html(htmlidxs);
            $("#index>li")[imgs[0].i].className="hover";
        },
        /*自动轮播*/
        autoMove:function(){
            this.timer=setTimeout(function(){
                    if(this.canAuto){
                        this.move(1);
                    }else{
                        this.autoMove();
                    }
                }.bind(this),this.WAIT
            );
        },
        /**左移一次**/
        move:function(n){
            clearInterval(this.timer);
            this.timer=null;
            if(n>0){
                var start=parseFloat($("#imgs").css("left"));
                var end=this.LIWIDTH*n;
            }else if(n<0){//如果右移
                //删除imgs结尾的n个元素，拼接到imgs开头
                imgs=imgs.splice(imgs.length+n,-n).concat(imgs);
                this.updateView();//更新页面
                $("#imgs").css("left",this.LIWIDTH*(n)+"px");
                //debugger;
                //获得id为imgs的ul的left
                var start=parseFloat($("#imgs").css("left"));
                var end=0;
            }
            this.DISTANCE=end-start;
            //console.log("总距离距离"+this.DISTANCE);
            this.step=this.DISTANCE/this.STEPS;
            //console.log("移一步"+this.step);
            this.timer=setInterval(
                this.moveStep.bind(this,n),this.interval
            );
        },
        /**左移一步**/
        moveStep:function(n){
            if(n>0){
                var left=parseFloat($("#imgs").css("left"));
                //console.log(left);
                $("#imgs").css("left",left-this.step+"px");
            }
            if(n<0){
                var left=parseFloat($("#imgs").css("left"));
                //console.log(left);
                $("#imgs").css("left",left+this.step+"px");
            }
            this.moved++;
            if(this.moved==this.STEPS){
                clearInterval(this.timer);
                this.timer=null;
                this.moved=0;
                if(n>0){
                    imgs=imgs.concat(imgs.splice(0,n));
                    this.updateView();
                }
                $("#imgs").css("left",0);
                this.autoMove();
            }
        }
        /**为index绑定进入事件**/
    };
    adv.init();
}
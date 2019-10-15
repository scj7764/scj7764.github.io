   //64-宋春建
var arr = new Array(""," 夜来妖.mp3","青狐媚.mp3","牵丝线.mp3","意外.mp3","天上一只猴.mp3");
$("#disc li:gt(0)").click(
function(){
	var i = $(this).index();
	$(this).siblings().removeClass("hl");
	$(this).addClass("hl");});
var mybtn=document.getElementById("btn");
mybtn.onclick=function(){
	if(ss.paused){
		ss.play();
		
		ps.className="s0";
		}else{
			ss.pause();
			
			ps.className="p0";
			}
		};
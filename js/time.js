window.onload=function(){
  window.setInterval("tiMe()",1000);
  this.inix();
}

window.onscroll=move;
function tiMe(){
  var year;
  var mon;
  var day;
  var hour;
  var min;
  var soud;
  var time=new Date();
  year=time.getFullYear();
  mon=time.getMonth();
  day=time.getDate();
  hour=time.getHours();
  min=time.getMinutes();
  soud=time.getSeconds();
  if (hour>6&&hour<8) {
      var hello="早上好！";
  }
  else if(hour>=8&&hour<12){
      var hello="上午好！";
  }
  else if(hour>=12&&hour<14){
      var hello="中午好！";
  }
  else if(hour>=14&&hour<17){
      var hello="下午好！";
  }
  else if(hour>=17&&hour<24){
      var hello="晚上好！";
  }
  else {
      var hello="夜深了！该休息了";
  }
  time="现在是"+year+"年"+mon+"月"+day+"日"+hour+"点"+min+"分 "+hello;
  document.getElementById("time").innerHTML="现在是"+year+"年"+mon+"月"+day+"日"+hour+"点"+min+"分 "+hello;
  console.log(time);
}


var adverTop; //层距页面顶端距离

var adverLeft;

var adverObj; //层对象

function inix(){

   adverObj=document.getElementById("adver"); //获得层对象

  

  
adverTop=parseInt(document.defaultView.getComputedStyle(adverObj,null).top);

   adverLeft=parseInt(document.defaultView.getComputedStyle(adverObj,null).left);

}



function move(){

adverObj.style.top=adverTop+parseInt(document.documentElement.scrollTop)+"px";

adverObj.style.left=adverLeft+parseInt(document.documentElement.scrollLeft)+"px";

}  

// function toP(){
//     adverObj.scrollTop=0+"px";
// }

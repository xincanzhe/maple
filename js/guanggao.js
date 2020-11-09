

// window.onload=inix;
























// //层对象
// var adverng; //层距页面顶端距离

//   var adverLeft;

//   var adverObject; 
//   adverObject=document.getElementById("adver"); 

// function inix(){

//   adverObject=document.getElementById("adver"); //获得层对象

//   adverng=parseInt(document.defaultView.getComputedStyle(adverObject,null).top);

//   // adverLeft=parseInt(document.defaultView.getComputedStyle(adverObject,null).left);


// }

// function move(){
  

//   adverObject.style.top=adverng+parseInt(document.body.scrollTop)+"px";

//   // adverObject.style.left=adverLeft+parseInt(document.body.scrollLeft)+"px";


// }  

// window.onload=inix;

// window.onscroll=move();

// window.onscroll=move();

// function top() {
//   bhObj.style.top=bhTop+parseInt(document.documentElement.scrollTop)+"px";
//   bhObj.style.left=bhLeft+parseInt(document.documentElement.scrollLeft)+"px";

// }


// var return_top = document.getElementById("bg");
// var sTop;
// window.onscroll = function(){
//     //sTop :滚动条距离顶部的距离数值
//     sTop = document.body.scrollTop||document.documentElement.scrollTop;
//     if(sTop>50){
//         return_top.className = "bg active";
//     }else{
//         return_top.className = "bg";
//     }
// }

// function return_Top(){
//     var termId = setInterval(function(){
//         sTop-=50;
//         if(sTop<=0){

//             clearInterval(termId);
//         }
//         window.scrollTo(0,sTop);

//     },1);       
// }
// function return_Down(){
//   var termId = setInterval(function(){
//       sTop-=50;
//       if(sTop<=0){

//           clearInterval(termId);
//       }
//       window.scrollTo(0,sTop);

//   },1);       
// }

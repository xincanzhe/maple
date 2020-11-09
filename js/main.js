function Style(li){
       var  subMenu=li.getElementsByTagName("ul")[0];
    subMenu.style.display="block";
    var Up=document.getElementsByClassName("fa-angle-down")[0];
    Up.style.transform="rotate("+180+"deg)";
    
}
function Styleout(li) {
    var  subMenu=li.getElementsByTagName("ul")[0];
    subMenu.style.display="none";
    var Down=document.getElementsByClassName("fa-angle-down")[0];
    Down.style.transform="rotate("+0+"deg)";
}


function Style2(li){
    var  subMenu=li.getElementsByTagName("ul")[0];
 subMenu.style.display="block";
 var Up2=document.getElementsByClassName("fa-angle-down")[1];
 Up2.style.transform="rotate("+180+"deg)";
 
}
function Styleout2(li) {
 var  subMenu=li.getElementsByTagName("ul")[0];
 subMenu.style.display="none";
 var Down2=document.getElementsByClassName("fa-angle-down")[1];
 Down2.style.transform="rotate("+0+"deg)";
}


function Style3(li){
    var  subMenu=li.getElementsByTagName("ul")[0];
 subMenu.style.display="block";
 var Up3=document.getElementsByClassName("fa-angle-down")[2];
 Up3.style.transform="rotate("+180+"deg)";
 
}
function Styleout3(li) {
 var  subMenu=li.getElementsByTagName("ul")[0];
 subMenu.style.display="none";
 var Down3=document.getElementsByClassName("fa-angle-down")[2];
 Down3.style.transform="rotate("+0+"deg)";
}

function user() {
    var user=document.getElementById("user").value;//获取用户名；
    if(user==""){
        document.getElementById("mrpass").innerText="*";
    }
    else if(/^[A-Za-z]\w{3,17}$/.test(user)){//控制用户名为字母开头4-16位；
        document.getElementById("span1").innerText="";
    }
    
    else{document.getElementById("span1").innerText="用户名格式错误";}
}
function key(){
    var pass=document.getElementById("key").value;
    if(pass==""){
        document.getElementById("span2").innerText="*";
    }
    else if(/^[a-zA-Z0-9]\w{5,12}$/.test(pass)){
        document.getElementById("span2").innerText="";
    }
    else {document.getElementById("span2").innerText="密码格式错误";}
}
function SignIn(){
    var user=document.getElementById("span1").value;
    var key=document.getElementById("span2").value;
    if(user==key){
        window.location.href='/web/2.html';
    }
}
function SignUp(){
    window.location.href='/web/SignUp.html';
}
/* 背景跟随效果 */
/* var adverTop;
var adverLeft;
var adverObj;
function inix(){
  adverObj=document.getElementById("bg");
  if(adverObj.currentStyle){
    adverTop=parseInt(adverObj.currentStyle.top);
    adverLeft=parseInt(adverObj.currentStyle.left);
  }
  else{
    adverTop=parseInt(document.defaultView.getComputedStyle(adverObj,null).top);
    adverLeft=parseInt(document.defaultView.getComputedStyle(adverObj,null).left);
  }
}
function move(){
  adverObj.style.top=adverTop+parseInt(document.documentElement.scrollTop)+"px";
  adverObj.style.left=adverLeft+parseInt(document.documentElement.scrollLeft)+"px";
}
window.onload=inix();
window.onscroll=move(); */

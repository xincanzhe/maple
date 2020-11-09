var goIndex=document.getElementsByClassName("index");
var dian=document.getElementsByClassName("li");
var upBut=document.getElementById("goUP");
var nextBut=document.getElementById("goDown");

var index=0;//表示当前图片；
var clearGo=function () {
for (var i=0;i<goIndex.length;i++)
{
  goIndex[i].className="index";
  dian[i].className='li';
}
}

var goNext=function () {
    clearGo();
    // console.log(index);
    goIndex[index].className='index go';
    dian[index].className='li le';
}
var goinDex=function(){
if(index<4){
  index++;
}
else {index=0;}
goNext();
}
var goUp=function(){
if(index>0){
  index--;
}
else {index=4;}
goNext();
}

for( var i=0;i<dian.length;i++)
{
dian[i].addEventListener('click',function(){
 var line=this.getAttribute('data-index');
 index=line;
 goNext();
 // console.log(line);
 ine=0;
})
}
nextBut.addEventListener('click',function () {
    goinDex();
})

upBut.addEventListener('click',function () {
    goUp();
})
var ine=0;
setInterval(function(){
ine++;
if(ine==2){
goinDex();
ine=0;
}
},1000);


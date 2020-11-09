function xianShi(){
    var Wen=document.getElementsByClassName("text-1")[0];
    var zhu=document.getElementsByClassName("tu1")[0];
    zhu.style.filter="blur(5px)";
    Wen.style.display="block";
}
function huanYuan(){
    var Wen=document.getElementsByClassName("text-1")[0];
    var zhu=document.getElementsByClassName("tu1")[0];
    zhu.style.filter="blur(0px)";
    Wen.style.display="none";
}
function item(){
    var Wen=document.getElementsByClassName("text-2")[0];
    var zHu=document.getElementsByClassName("tu2")[0];
    zHu.style.filter="blur(5px)";
    Wen.style.display="block";
}
function itemout(){
    var Wen=document.getElementsByClassName("text-2")[0];
    var zhu=document.getElementsByClassName("tu2")[0];
    zhu.style.filter="blur(0px)";
    Wen.style.display="none";
}
function item2(){
    var Wen=document.getElementsByClassName("text-3")[0];
    var zHu=document.getElementsByClassName("tu3")[0];
    zHu.style.filter="blur(5px)";
    Wen.style.display="block";
}
function itemout2(){
    var Wen=document.getElementsByClassName("text-3")[0];
    var zhu=document.getElementsByClassName("tu3")[0];
    zhu.style.filter="blur(0px)";
    Wen.style.display="none";
}
function item3(){
    var Wen=document.getElementsByClassName("text-4")[0];
    var zHu=document.getElementsByClassName("tu4")[0];
    zHu.style.filter="blur(5px)";
    Wen.style.display="block";
}
function itemout3(){
    var Wen=document.getElementsByClassName("text-4")[0];
    var zhu=document.getElementsByClassName("tu4")[0];
    zhu.style.filter="blur(0px)";
    Wen.style.display="none";
}

function item4(){
    var Wen=document.getElementsByClassName("text-5")[0];
    var zHu=document.getElementsByClassName("tu5")[0];
    zHu.style.filter="blur(5px)";
    Wen.style.display="block";
}
function itemout4(){
    var Wen=document.getElementsByClassName("text-5")[0];
    var zhu=document.getElementsByClassName("tu5")[0];
    zhu.style.filter="blur(0px)";
    Wen.style.display="none";
}


function item5(){
    var Wen=document.getElementsByClassName("text-6")[0];
    var zHu=document.getElementsByClassName("tu6")[0];
    zHu.style.filter="blur(5px)";
    Wen.style.display="block";
}
function itemout5(){
    var Wen=document.getElementsByClassName("text-6")[0];
    var zhu=document.getElementsByClassName("tu6")[0];
    zhu.style.filter="blur(0px)";
    Wen.style.display="none";
}


function item6(){
    var Wen=document.getElementsByClassName("text-7")[0];
    var zHu=document.getElementsByClassName("tu7")[0];
    zHu.style.filter="blur(5px)";
    Wen.style.display="block";
}
function itemout6(){
    var Wen=document.getElementsByClassName("text-7")[0];
    var zhu=document.getElementsByClassName("tu7")[0];
    zhu.style.filter="blur(0px)";
    Wen.style.display="none";
}

function item7(){
    var Wen=document.getElementsByClassName("text-8")[0];
    var zHu=document.getElementsByClassName("tu8")[0];
    zHu.style.filter="blur(5px)";
    Wen.style.display="block";
}
function itemout7(){
    var Wen=document.getElementsByClassName("text-8")[0];
    var zhu=document.getElementsByClassName("tu8")[0];
    zhu.style.filter="blur(0px)";
    Wen.style.display="none";
}


function item8(){
    var Wen=document.getElementsByClassName("text-9")[0];
    var zHu=document.getElementsByClassName("tu9")[0];
    zHu.style.filter="blur(5px)";
    Wen.style.display="block";
}
function itemout8(){
    var Wen=document.getElementsByClassName("text-9")[0];
    var zhu=document.getElementsByClassName("tu9")[0];
    zhu.style.filter="blur(0px)";
    Wen.style.display="none";
}


/* 轮播按钮 */
function but(){
    var Wen=document.getElementsByClassName("but")[0];
    var zhu=document.getElementById("goDown");
    zhu.style.display="flex";
    Wen.style.display="block";
}
function butout(){
    var Wen=document.getElementsByClassName("but")[0];
    var zhu=document.getElementById("goDown");
    zhu.style.display="none";
    Wen.style.display="none";
}


/* 主页透明效果 */
function mian(){
    
        var zhu=document.getElementById("mian");
        zhu.style.display="block";
    }
    function mianout(){
        var zhu=document.getElementById("mian");
        zhu.style.display="none";
    }

/* 大图函数 */
function datu(tusrc){
    {
  
      document.getElementById("bg").src="../img/"+tusrc;
      
      }
      
  }
  function datuout(tusrc){
    {
  
      document.getElementById("bg").src="../img/"+tusrc;
      
      }
      
  }
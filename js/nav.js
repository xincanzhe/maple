function Nav(){
    var Nav=document.getElementById("navx")[0];
    Nav.style.backgroundColor="#fffff";
}
setTimeout(setInterval('ulget()', 6000));
setTimeout(setInterval('ulout()', 12000));

function ulget(){
    NaStyle=document.getElementsByClassName("nav-main")[0];
    NaStyle.style.backgroundColor="#686868";
  }
  function ulout() {
    NaStyle=document.getElementsByClassName("nav-main")[0];
    NaStyle.style.backgroundColor="#111213";
  }
  
const tosetting = document.getElementById("tosetting");
const home = document.getElementById("home");
const setting = document.getElementById("setting");


tosetting.addEventListener("click",function(){
    home.classList.add("none");
    setting.classList.remove("none");
})
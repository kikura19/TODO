const tohome = document.getElementById("tohome");
const tosetting = document.getElementById("tosetting");
const home = document.getElementById("home");
const setting = document.getElementById("setting");


tosetting.addEventListener("click",function(){
    home.classList.add("none");
    setting.classList.remove("none");
})

tohome.addEventListener("click",function(){
    home.classList.remove("none");
    setting.classList.add("none");
})
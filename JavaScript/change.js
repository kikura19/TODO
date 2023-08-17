const tohome = document.getElementById("tohome");
const tosetting = document.getElementById("tosetting");
const home = document.getElementById("home");
const setting = document.getElementById("setting");
const calenders = document.getElementById("calenders");
const tocalenders = document.getElementById("tocalenders");

tohome.addEventListener("click",function(){
    home.classList.remove("none");
    setting.classList.add("none");
    calenders.classList.add("none");
})

tosetting.addEventListener("click",function(){
    home.classList.add("none");
    setting.classList.remove("none");
    calenders.classList.add("none");
})

tocalenders.addEventListener("click",function(){
    home.classList.add("none");
    setting.classList.add("none");
    calenders.classList.remove("none");
})
const tohome = document.getElementById("tohome");
const tosetting = document.getElementById("tosetting");
const home = document.getElementById("home");
const setting = document.getElementById("setting");


tohome.addEventListener("click",function(){
    home.classList.toggle("none");
    setting.classList.toggle("none");
    tohome.classList.toggle("green");
    tohome.classList.toggle("white");
    tosetting.classList.toggle("green");
    tosetting.classList.toggle("white");
})

tosetting.addEventListener("click",function(){
    home.classList.toggle("none");
    setting.classList.toggle("none");
    tohome.classList.toggle("green");
    tohome.classList.toggle("white");
    tosetting.classList.toggle("green");
    tosetting.classList.toggle("white");
})
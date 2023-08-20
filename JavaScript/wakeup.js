const wakeup = document.getElementById("wakeup");
const registerTime = document.getElementById("registerTime");
const alert = document.getElementById("alert");
const weeks = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const wtimes = JSON.parse(localStorage.getItem("wtimes")) || {};

wakeup.innerHTML = displayWakeup();//for文の下にすると、うまく表示されない

for (let day of weeks) {
  const theDay = document.getElementById(day);
  theDay.value = wtimes[day];
}


registerTime.addEventListener("click",function(){  
    TimeSaving(); 
    alertPop();
    wakeup.innerHTML = displayWakeup();
});

function alertPop(){
    alert.classList.remove('none');
    alert.classList.add('popup-message');

    alert.addEventListener('animationend',()=>{
        alert.classList.remove('popup-message');
        alert.classList.add('none');
    })
}

function TimeSaving(){
    for (let day of weeks) {
        const theDay = document.getElementById(day);
        wtimes[day] = theDay.value;
      }
    localStorage.setItem("wtimes",JSON.stringify(wtimes)); 
};

function displayWakeup(){ 
    const theday = new Date();
    theday.setDate(theday.getDate() + 1);
    const dayOfWeek = theday.getDay();  
    const dayOfWeekString = weeks[dayOfWeek];
    if (wtimes[dayOfWeekString]){
        return `${wtimes[dayOfWeekString]}`;
    }else{
        return `未設定`;
    }    
}




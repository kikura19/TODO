const wakeup = document.getElementById("wakeup");
const registerTime = document.getElementById("registerTime");
const alert = document.getElementById("alert");
const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const wtimes = JSON.parse(localStorage.getItem("wtimes")) || {};

for (let day of week) {
  const theDay = document.getElementById(day);
  theDay.value = wtimes[day];
}

wakeup.innerHTML = displayWakeup();

registerTime.addEventListener("click",function(){  
    TimeSaving();  
    alertPop();
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
    for (let day of week) {
        const theDay = document.getElementById(day);
        wtimes[day] = theDay.value;
      }
    localStorage.setItem("wtimes",JSON.stringify(wtimes));
    displayWakeup();
};

function displayWakeup(){  
    const wtimes = JSON.parse(localStorage.getItem("wtimes"));

    const theday = new Date();
    theday.setDate(theday.getDate() + 1);
    const DayOfWeek = theday.getDay(); 
    const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];  
    const DayOfWeekString = week[DayOfWeek];

    if (wtimes && wtimes[DayOfWeekString]){
        const wakeTime = wtimes[DayOfWeekString];
        return `${wakeTime}`;
    }else{
        return `未設定`;
    }    
}




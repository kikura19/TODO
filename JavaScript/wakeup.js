const wakeup = document.getElementById("wakeup");
const registerTime = document.getElementById("registerTime");
const alert = document.getElementById("alert");
const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const wtimes = JSON.parse(localStorage.getItem("wtimes")) || {};

for (const day of week) {
  const theDay = document.getElementById(day);
  if (theDay) {
    theDay.value = wtimes[day];
  }
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
    wtimes.mon = mon.value;
    wtimes.tue = tue.value;
    wtimes.wed = wed.value;
    wtimes.thu = thu.value;
    wtimes.fri = fri.value;
    wtimes.sat = sat.value;
    wtimes.sun = sun.value;
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




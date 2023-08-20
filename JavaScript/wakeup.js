const mon = document.getElementById("mon");
const tue = document.getElementById("tue");
const wed = document.getElementById("wed");
const thu = document.getElementById("thu");
const fri = document.getElementById("fri");
const sat = document.getElementById("sat");
const sun = document.getElementById("sun");
const registerTime = document.getElementById("registerTime");
const wakeup = document.getElementById("wakeup");
let wtimes = JSON.parse(localStorage.getItem("wtimes")) || {};

const alert = document.getElementById("alert");

wakeup.innerHTML = displayWakeup();
// mon.value = '07:00';
// tue.value = '07:00';
// wed.value = '07:00';
// thu.value = '07:00';
// fri.value = '07:00';
// sat.value = '07:30';
// sun.value = '07:30';

mon.value = wtimes.mon;
tue.value = wtimes.tue;
wed.value = wtimes.wed;
thu.value = wtimes.thu;
fri.value = wtimes.fri;
sat.value = wtimes.sat;
sun.value = wtimes.sun;


registerTime.addEventListener("click",function(){  
    wtimes = {};
    TimeSaving();  
    alert.classList.remove('none');
    alert.classList.add('popup-message');
});

alert.addEventListener('animationend',()=>{
    alert.classList.remove('popup-message');
    alert.classList.add('none');
})

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
    // 明日の日付を取得します
    const theday = new Date();
    theday.setDate(theday.getDate() + 1);

    // 曜日に対応する時刻を取得します
    const DayOfWeek = theday.getDay();
    const DayOfWeekString = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][DayOfWeek];
    if (wtimes && wtimes[DayOfWeekString]){
        const wakeTime = wtimes[DayOfWeekString];
        return `${wakeTime}`;
    }else{
        return `未設定`;
    }    
}




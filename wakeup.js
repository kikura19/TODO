const mon = document.getElementById("mon");
const tue = document.getElementById("tue");
const wed = document.getElementById("wed");
const thu = document.getElementById("thu");
const fri = document.getElementById("fri");
const sat = document.getElementById("sat");
const sun = document.getElementById("sun");
const registerTime = document.getElementById("registerTime");
let wtimes = JSON.parse(localStorage.getItem("wtimes")) || {};

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
});

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
    const wakeup = document.getElementById("wakeup");
    const wtimes = JSON.parse(localStorage.getItem("wtimes"));
    // 明日の日付を取得します
    const theday = new Date();
    theday.setDate(theday.getDate() + 1);

    // 曜日に対応する時刻を取得します
    const DayOfWeek = theday.getDay();
    const DayOfWeekString = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][DayOfWeek];
    if (wtimes && wtimes[DayOfWeekString]){
        const wakeTime = wtimes[DayOfWeekString];
        wakeup.textContent = `${wakeTime}`;
        document.getElementById('wakeup').style.fontSize = '60px';
    }else{
        const wakeTime = '時刻が設定されていません';
        
        wakeup.textContent = `${wakeTime}`;
        document.getElementById('wakeup').style.fontSize = '16px';
    }
    
    // 時刻を表示します

    
}

window.addEventListener("DOMContentLoaded", displayWakeup);




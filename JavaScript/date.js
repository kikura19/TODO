const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const date3 = document.getElementById("date3");
const currentDay = new Date();
const weekName = ["日", "月", "火", "水", "木", "金", "土"];

date1.innerHTML = showToday();
date2.innerHTML = showToday();
date3.innerHTML = showToday();

function showToday(){   
    let y = currentDay.getFullYear();
    let m = currentDay.getMonth();
    let day = currentDay.getDate();
    let dayOfWeek = currentDay.getDay();    
    let date = y + "/" + (m + 1) + "/" + day + " (" + weekName[dayOfWeek] + ")";
    return date;
}
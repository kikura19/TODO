const date = document.getElementById("date");
const currentDay = new Date();
const weekName = ["日", "月", "火", "水", "木", "金", "土"];

date.innerHTML = showToday();

function showToday(){   
    let y = currentDay.getFullYear();
    let m = currentDay.getMonth();
    let day = currentDay.getDate();
    let dayOfWeek = currentDay.getDay();    
    let date = y + "/" + (m + 1) + "/" + day + " (" + weekName[dayOfWeek] + ")";
    return date;
}
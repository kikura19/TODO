const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const date3 = document.getElementById("date3");

window.onload = function(){
    const today = new Date();
    const week = ["日", "月", "火", "水", "木", "金", "土"];
    const y = today.getFullYear();
    const m = today.getMonth();
    const day = today.getDate();
    const dayOfWeek = today.getDay();
    date1.innerHTML = y + "/" + (m + 1) + "/" + day + " (" + week[dayOfWeek] + ")";
    date2.innerHTML = y + "/" + (m + 1) + "/" + day + " (" + week[dayOfWeek] + ")";
    date3.innerHTML = y + "/" + (m + 1) + "/" + day + " (" + week[dayOfWeek] + ")";
}
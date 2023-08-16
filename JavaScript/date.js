function displayDate() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let dayOfWeek = currentDate.getDay();
    let weekdays = ["日", "月", "火", "水", "木", "金", "土"];
    let formattedDate = year + "/" + month + "/" + day + " (" + weekdays[dayOfWeek] + ")";
    document.getElementById("date").innerHTML = formattedDate;
  }
window.onload = displayDate;
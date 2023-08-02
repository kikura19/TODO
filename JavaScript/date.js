function displayDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    var dayOfWeek = currentDate.getDay();
    var weekdays = ["日", "月", "火", "水", "木", "金", "土"];
    var formattedDate = year + "/" + month + "/" + day + " (" + weekdays[dayOfWeek] + ")";
    document.getElementById("date").innerHTML = formattedDate;
  }
window.onload = displayDate;
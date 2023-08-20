const YM = document.getElementById("y-m");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const calendar = document.getElementById("calender");
const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();

let showDate = new Date(today.getFullYear(), today.getMonth(), 1);

window.onload = function(){
    showProcess(today, calendar);
    }

theDate.addEventListener("click",function(){
    showDate.setMonth(today.getMonth());
    showProcess(showDate);
})

prev.addEventListener("click",function(){
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
})
next.addEventListener("click",function(){
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
})

function showProcess(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    YM.innerHTML = year + "年 " + (month + 1) + "月";
    let calen = createProcess(year, month);
    calendar.innerHTML = calen;
}

function createProcess(year, month){
    let frame = "<table><tr class='dayOfWeek'>";
    for(i = 0; i < week.length; i++){
        frame += "<th>" + week[i] + "</th>";
    }
    frame += "</tr>";

    let count = 0;
    let startDayOfWeek = new Date(year, month, 1).getDay();
    let endDate = new Date(year, month + 1, 0).getDate();
    let lastMonthEndDate = new Date(year, month, 0).getDate();
    let row = Math.ceil((startDayOfWeek + endDate)/ week.length);

    for(i = 0; i < row; i++){
        frame += "<tr>";

        for(j = 0; j < week.length; j++){
            if (i == 0 && j < startDayOfWeek){
                frame += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>"; 
            }else if (count >= endDate) {
                count++;
                frame += "<td class='disabled'>" + (count - endDate) + "</td>";
            }else{
                count++;
                if(year == today.getFullYear() && month == (today.getMonth()) && count == today.getDate()){
                    frame += "<td class='today'>" + count + "</td>";
                }else{
                    frame += "<td>" + count + "</td>";
                }
            }
        }
        frame += "</tr>";
    }
    return frame;
}

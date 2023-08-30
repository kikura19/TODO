const RegisterTime = document.getElementById("registerTime");
const train = document.getElementById("train");
let times = JSON.parse(localStorage.getItem("times")) || {};
const Weeks = ['sund', 'mond', 'tues', 'wedn', 'thur', 'frid', 'satu'];

train.innerHTML = displayTrain();//for文の下にすると、うまく表示されない

for (let day of Weeks) {
  const theDay = document.getElementById(day);
  if(theDay){
    theDay.value = times[day];
}
}
if(RegisterTime){
    RegisterTime.addEventListener("click",function(){   
        TimeSave();
        train.innerHTML = displayTrain();
    });
}

function TimeSave(){
    for (let day of Weeks) {
        const theDay = document.getElementById(day);
        times[day] = theDay.value;
      }
    localStorage.setItem("times",JSON.stringify(times));
}

function displayTrain(){   
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const DayOfWeek = tomorrow.getDay();
    const DayOfWeekString = Weeks[DayOfWeek];
    if (times[DayOfWeekString]){
        return `${times[DayOfWeekString]}`;
    }else{
        return `未設定`;
    }
    
}

   


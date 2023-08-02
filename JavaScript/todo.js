const form = document.getElementById("form");
const input =document.getElementById("input");
const deadlineInput = document.getElementById("deadlineInput");
const register = document.getElementById("register");
const ultodo = document.getElementById("ultodo");//未完了
const uldone = document.getElementById("uldone");//完了済み
const ulcoming = document.getElementById("ulcoming");//待機中
const todos = JSON.parse(localStorage.getItem("todos"));

const doneDate = document.createElement('span');
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
doneDate.innerHTML = "(完了日: " + year + "/" + month + "/" + day + ")" ;


//カレンダー
flatpickr(deadlineInput, {
    enableTime: false,
    dateFormat: "Y/m/d",
    minDate: "today"
  });

if (todos){
    todos.forEach(todo=>{
        add(todo);
    });
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    add();
})

register.addEventListener("click",function(){
    add(register.value);
})

function add(todo){
    let todoText = input.value + " (締切日: " + deadlineInput.value + ")";

    if (todo){
        todoText = todo.text;
    }
    if (todoText){
        const li = document.createElement("li");//タスクリストにつける
        li.innerText = todoText;
        

        const check = document.createElement('a');//完了ボタン
        check.classList.add('check');
        check.classList.add('bt-todo');
        check.innerHTML = '完了';
        const del = document.createElement('a');//削除ボタン
        del.classList.add('del');
        del.classList.add('bt-todo');
        del.innerHTML = '削除';
        const wanto = document.createElement('a');//開始ボタン
        wanto.classList.add('wanto');
        wanto.classList.add('bt-todo');
        wanto.innerHTML = '開始';
        del.addEventListener("click",function(){//削除押したら消す
            li.remove();
            saveData();
        })
        check.addEventListener("click",function(){//完了押したら、完了済みに移る
            li.classList.toggle("done");
            check.remove();
            del.remove()
            //締切日消す
            li.innerHTML = li.innerHTML.substring(li.innerHTML.length-18,0);
            li.appendChild(doneDate);
            li.appendChild(del);
            uldone.appendChild(li);            
            saveData();
        })
        wanto.addEventListener("click",function(){//開始押したら、未完了に移る
            wanto.remove();
            li.appendChild(check);
            li.appendChild(del);
            li.classList.toggle("doing");
            ultodo.appendChild(li);
            saveData();
        })
        if (todo&&todo.completed){//完了だったら完了済みへ
            li.appendChild(del);
            uldone.appendChild(li);
            li.classList.toggle("done");
        }else if (todo&&todo.incompleted){//未完了は未完了へ
            li.appendChild(check);
            ultodo.appendChild(li);
            li.appendChild(del);
            li.classList.toggle("doing");
            
        }else{//待機は待機中
            li.appendChild(wanto);
            li.appendChild(del);
            ulcoming.appendChild(li);           
        }
        input.value = "";
        deadlineInput.value = "";
        saveData();
    }
}

function getDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    doneDate = "(完了日: " + year + "/" + month + "/" + day + ")" ;
  }

function saveData(){
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach(list => {
        if (list.classList.contains("done")){
            const listtext = list.innerText;
            let todo={
                text:listtext.substring(listtext.length-2,0),
                completed: list.classList.contains("done"),
                
            }
            todos.push(todo);
        }else if(list.classList.contains("doing")){
            const listtext = list.innerText;
            let todo={
                text:listtext.substring(listtext.length-4,0),
                completed: list.classList.contains("done"),
                incompleted: list.classList.contains("doing")
            }
            todos.push(todo);
        }else{
            const listtext = list.innerText;
            let todo={
                text:listtext.substring(listtext.length-4,0),
                completed: list.classList.contains("done"),
                incompleted: list.classList.contains("doing")
            }
            todos.push(todo);
        }
        
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}





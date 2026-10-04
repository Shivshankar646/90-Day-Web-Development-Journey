// let user = {
//     name: "Shiv",
//     age: 22
// };

// let userString = JSON.stringify(user);

// console.log(userString);
// console.log(typeof userString);


// let user = {
//     name: "Shiv",
//     age: 22
// };

// let userString = JSON.stringify(user);
// localStorage.setItem("user",userString)
// let storedUser = localStorage.getItem("user");
// console.log(JSON.parse(storedUser));
// console.log(typeof storedUser);



// let gettask =localStorage.getItem("tasks");
// let addTask =JSON.parse(gettask);
// addTask.push("Practice React");
// localStorage.setItem("tasks",JSON.stringify(addTask));
// let output =localStorage.getItem("tasks");
// console.log(JSON.parse(output));


// let tasks ;
// if (stored === null) {
    //     tasks =[];
    // }else{
        //    tasks = JSON.parse(stored);
        // }

        // tasks = ["Study JavaScript", "Practice React"];
        // tasks.push("Build project");
        // localStorage.setItem("tasks",JSON.stringify(tasks));

window.addEventListener("DOMContentLoaded",function() {
let cleantodo = JSON.parse(localStorage.getItem("tasks")) || [];
cleantodo.forEach(task => {
   let li = document.createElement("li");
let span = document.createElement("span");
let btn1 =document.createElement("button");
btn1.textContent ="Delete";
btn1.classList.add("delete")
let btn2 =document.createElement("button");
btn2.classList.add("completed");
btn2.textContent ="Complete"
span.textContent=task.task;
if (task.completed === true) {
    span.style.textDecoration = "line-through";
}
li.appendChild(span);
li.appendChild(btn1);
li.appendChild(btn2);
todoList.appendChild(li);
});
})

let todoInput = document.getElementById("todoInput");
let addbtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");

addbtn.addEventListener("click", function() {
  let gettodo =localStorage.getItem("tasks");
  let cleantodo =JSON.parse(gettodo);
  cleantodo.push({
    task: todoInput.value,
    completed: false
});
todoList.textContent = "";
cleantodo.forEach(task => {
   let li = document.createElement("li");
let span = document.createElement("span");
let btn1 =document.createElement("button");
btn1.textContent ="Delete";
btn1.classList.add("delete")
let btn2 =document.createElement("button");
btn2.classList.add("completed");
btn2.textContent ="Complete"
span.textContent=task.task;
li.appendChild(span);
li.appendChild(btn1);
li.appendChild(btn2);
todoList.appendChild(li);

});
localStorage.setItem("tasks",JSON.stringify(cleantodo));
todoInput.value ="";
});

todoList.addEventListener("click",function(event) {
    if (event.target.classList.contains("completed")) {
        let gettodo =localStorage.getItem("tasks");
        let cleantodo =JSON.parse(gettodo);
        let todoitem =event.target.parentElement;
        let todotext =todoitem.querySelector("span").textContent;
        let findtodo = cleantodo.find(todo => todo.task == todotext);
        findtodo.completed =true;
todoitem.querySelector("span").style.textDecoration= "line-through";
        localStorage.setItem("tasks",JSON.stringify(cleantodo));
    }
})
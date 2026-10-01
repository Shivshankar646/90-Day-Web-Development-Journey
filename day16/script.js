// let title = document.getElementById("title");
// title.textContent = "JavaScript DOM";
// console.log(title);
// title.style.color ="blue";
// title.style.fontSize ='40px';
// title.style.backgroundColor = "lightgray";
// let message = document.getElementById("message");
// message.textContent ="I can manipulate HTML using JavaScript";
// console.log(message);

// let btn = document.getElementById("btn");
// btn.textContent = "Start Learning";
// btn.setAttribute("disabled","");

// let card =document.querySelector(".card h2");
// card.textContent ="Laptop";

// let skill =document.querySelectorAll(".skill");
// console.log(skill.length);
// // let skill1 = document.querySelector(".skill");
// skill[0].textContent ="HTML5";

// let link = document.getElementById("link");
// link.textContent="Visit Google";
// link.setAttribute("href","https://google.com");

// let input =document.getElementById("username");
// input.setAttribute("placeholder","Enter your name");

// let message = document.getElementById("message");
// message.classList.add("highlight");
// console.log(message.classList);

// let btn = document.getElementById("btn");
// btn.classList.add("active");
// btn.classList.toggle("active");
// console.log(btn.classList);

// let p =document.createElement("p");
// p.textContent = "I created this using JavaScript";
// container.appendChild(p);

// let div =document.createElement("div");
// div.textContent ="JavaScript Card";
// div.classList.add("card");
// container.appendChild(div);
// let container = document.getElementById("container");

// let skills = ["HTML", "CSS", "JavaScript"];
// skills.forEach(skill => {
    //     let p = document.createElement("p");
    //     p.textContent =skill;
    //     container.appendChild(p);
    
    // });
    
//     let students = [
//         { name: "Shiv", marks: 75 },
//         { name: "Rahul", marks: 82 },
//         { name: "Amit", marks: 65 }
//     ];
//     console.log(students);
//     students.forEach(student =>
// {
//     let p = document.createElement("p");
//     p.textContent = `${student.name}-${student.marks}`;
//     console.log(student.marks)
//     container.appendChild(p);
// }
// )

// let p = document.getElementById("message");

// p.remove();
// let container = document.getElementById("container");
// let p = document.getElementById("two");
// container.removeChild(p);

// let btn =document.getElementById("btn");
// let message =document.getElementById("message")
// btn.addEventListener("click",function() {
//     message.textContent ="Button was clicked!";
// })

// let btn = document.getElementById("btn");
// let  box = document.getElementById("box");
// btn.addEventListener("click",function() {
//     box.classList.toggle("dark")
// })

// let btn = document.getElementById("btn");
// btn.addEventListener("click",function() {
//     let input =document.getElementById("nameInput");
//     console.log(input.value)
//     let output = document.getElementById("output");
//     output.textContent =input.value;
// })

// let nameInput = document.getElementById("nameInput");
// nameInput.addEventListener("input",function() {
//     let output = document.getElementById("output");
//     output.textContent =nameInput.value;
//     console.log(nameInput.value)
// })

let counter =0;
let count = document.getElementById("count");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
increase.addEventListener("click",function() {
   counter++;
   count.textContent=counter;

})
decrease.addEventListener("click",function() {
    if (counter > 0) {
        
        counter--;
    } 
   count.textContent =counter;
})

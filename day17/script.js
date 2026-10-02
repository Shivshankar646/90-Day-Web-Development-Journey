// let btn =document.getElementById("btn");
// let message = document.getElementById("message");

// btn.addEventListener("click",function() {
//     message.textContent = "Button was clicked!";
// });

// let textInput = document.getElementById("textInput");
// let count = document.getElementById("count");
// textInput.addEventListener("input",function() {
//     count.textContent = textInput.value;
// })

// let textInput = document.getElementById("nameInput");
// let count = document.getElementById("output");
// textInput.addEventListener("input",function() {
//     count.textContent = textInput.value;
// })

// let city =document.getElementById("city");
// let result =document.getElementById("result");

// city.addEventListener("change",function() {
//     result.textContent =city.value;
// })


// let myForm =document.getElementById("myForm");
// let username = document.getElementById("username");
// let message = document.getElementById("message");
// myForm.addEventListener("submit",function(event) {
// event.preventDefault();
//     message.textContent =username.value;
// })

let parent = document.getElementById("parent");
let child = document.getElementById("child");
parent.addEventListener("click",function() {
    console.log("parent clicked");
})
child.addEventListener("click",function() {
    console.log("child clicked");
})
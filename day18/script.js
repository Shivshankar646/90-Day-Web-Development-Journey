// let form =document.getElementById("form");
// let name =document.getElementById("name");
// let error =document.getElementById("error");
// form.addEventListener("submit",function(event) {
//  event.preventDefault();
//        if (name.value === "") {
//         error.textContent ="Name is required";
//  } else {
//         error.textContent ="Form submitted";
//          }
//  })


let form =document.getElementById("form");
 let name =document.getElementById("name");
 let email= document.getElementById("email");
 let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 let nameError = document.getElementById("nameError");
 let emailError = document.getElementById("emailError");
 let password = document.getElementById("password");
 let passwordError =document.getElementById("passwordError");
 form.addEventListener("submit",function(event) {
    event.preventDefault();
    if (name.value === "") {
        nameError.textContent="Name is required";
    } else if(email.value === "") {
        nameError.textContent="";
        emailError.textContent ="Email is required";
    }  else if (!emailPattern.test(email.value)) {
        emailError.textContent ="";
    emailError.textContent = "Enter a valid email";
   } else if (password.value === "") {
    emailError.textContent =""
    passwordError.textContent ="Password is required";
   }else if (password.value.length < 8) {
    passwordError.textContent="";
    passwordError.textContent ="Password must be at least 8 characters";
   }else{
    passwordError.textContent="";
        nameError.textContent ="";
        emailError.textContent="";
       let p=document.getElementById("success");
       p.textContent ="Form Submitted";
    }
 })
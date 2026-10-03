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


// let form =document.getElementById("form");
//  let name =document.getElementById("name");
//  let email= document.getElementById("email");
//  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//  let nameError = document.getElementById("nameError");
//  let emailError = document.getElementById("emailError");
//  let password = document.getElementById("password");
//  let passwordError =document.getElementById("passwordError");
//  form.addEventListener("submit",function(event) {
//     event.preventDefault();
//     if (name.value === "") {
//         nameError.textContent="Name is required";
//     } else if(email.value === "") {
//         nameError.textContent="";
//         emailError.textContent ="Email is required";
//     }  else if (!emailPattern.test(email.value)) {
//         emailError.textContent ="";
//     emailError.textContent = "Enter a valid email";
//    } else if (password.value === "") {
//     emailError.textContent =""
//     passwordError.textContent ="Password is required";
//    }else if (password.value.length < 8) {
//     passwordError.textContent="";
//     passwordError.textContent ="Password must be at least 8 characters";
//    }else{
//     passwordError.textContent="";
//         nameError.textContent ="";
//         emailError.textContent="";
//        let p=document.getElementById("success");
//        p.textContent ="Form Submitted";
//     }
//  })
let select =0;
let total =0;
let productContainer = document.getElementById("product-container");
let selectedCount = document.getElementById("selected-count");
let totalPrice = document.getElementById("total-price");

let products = [{
name:"Laptop",
price:50000,
},{
    name:"Mouse",
    price:1000
},{
    name:"Keyboard",
    price:2000
}]

for (let i = 0; i < products.length; i++) {
let div =document.createElement("div");
div.classList.add("product");
let h3 = document.createElement("h3");
h3.textContent =products[i].name;
let p =document.createElement("p");
p.textContent =`₹${products[i].price}`;
let btn = document.createElement("button");
btn.classList.add("select-btn")
let span =document.createElement("span");
span.textContent="Select";

div.appendChild(h3);
div.appendChild(p);
btn.appendChild(span);
div.appendChild(btn);
productContainer.appendChild(div);
}

function select1() {
    select++;
    selectedCount.textContent =select;
}

// let selectBtn =document.querySelector(".select-btn");
// selectBtn.addEventListener("click",function(event) {
    //     select++;
    // });
    
    productContainer.addEventListener("click", function(event) {
        let button = event.target.closest(".select-btn");
        let product = button.closest(".product");
         let priceElement = product.querySelector("p");
           let final =priceElement.textContent;
           let last =final.slice(1);
           let lastone =Number(last)
        if (!product.classList.contains("selected")) {
            product.classList.add("selected");
           total+=lastone;
           console.log(total)
           totalPrice.textContent =`Total: ₹${total}`;
           
           
           select1();
        }else{
            product.classList.remove("selected");
            select--;
            selectedCount.textContent =select;
            total-=lastone;
            totalPrice.textContent =`Total: ₹${total}`;
            

            
        }
});
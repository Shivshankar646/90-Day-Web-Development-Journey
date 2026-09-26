function sayHello() {
    console.log("Hello Shivshankar")
}

sayHello();
sayHello();
sayHello();


function greet(name) {
    console.log(`Hello ${name}`)
}

greet("shivshankar");
greet("Rahul");
greet("Amit");


function calculateArea(length,width) {
    return length * width;
}

let area = calculateArea(10,5);
console.log(area);

function calculateDiscount(price,discount=10) {
  discount =price * discount / 100;
  return price-discount;
}

let discount1= calculateDiscount(1000,20);
let discount2 = calculateDiscount(1000);
console.log(discount1);
console.log(discount2);

let square = function(number) {
    return number * number;
}

let  result =square(5);
console.log(result);

const multiply = (a,b) => a*b;
// const multiply = (a,b) =>{
//     return a * b;
// }

let result1 = multiply(5,10);
console.log(result1);


let calculate = (a,b,operator)=>{
   if (operator === "+") {
    return a+b;
} else if(operator === "-") {
       return a-b;
    
   } else if (operator === "*") {
        return a *b;
    } else if (operator === "/") {
       return a / b;
    
   } else {
    return "Something Wrong Input";
   }
}

let result3= calculate(10,5,"+");
console.log(result3);

let result4= calculate(10, 5, "-")
console.log(result4);

let result5= calculate(10,5,"*");
console.log(result5);

let result6= calculate(10,5,"/");
console.log(result6);
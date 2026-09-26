// function sayHello() {
//     console.log("Hello Shivshankar")
// }

// sayHello();
// sayHello();
// sayHello();


// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// greet("shivshankar");
// greet("Rahul");
// greet("Amit");


// function calculateArea(length,width) {
//     return length * width;
// }

// let area = calculateArea(10,5);
// console.log(area);

// function calculateDiscount(price,discount=10) {
//   discount =price * discount / 100;
//   return price-discount;
// }

// let discount1= calculateDiscount(1000,20);
// let discount2 = calculateDiscount(1000);
// console.log(discount1);
// console.log(discount2);

// let square = function(number) {
//     return number * number;
// }

// let  result =square(5);
// console.log(result);

// const multiply = (a,b) => a*b;
// // const multiply = (a,b) =>{
// //     return a * b;
// // }

// let result1 = multiply(5,10);
// console.log(result1);


// let calculate = (a,b,operator)=>{
//    if (operator === "+") {
//     return a+b;
// } else if(operator === "-") {
//        return a-b;
    
//    } else if (operator === "*") {
//         return a *b;
//     } else if (operator === "/") {
//        return a / b;
    
//    } else {
//     return "Something Wrong Input";
//    }
// }

// let result3= calculate(10,5,"+");
// console.log(result3);

// let result4= calculate(10, 5, "-")
// console.log(result4);

// let result5= calculate(10,5,"*");
// console.log(result5);

// let result6= calculate(10,5,"/");
// console.log(result6);


let analyzeStudent = (name, marks) =>{
    let averageMarks = 0;
    let lowestMarks = 99;
    let total = 0;
let passed = 0;
let highestMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        total+=marks[i]
        if (highestMarks < marks[i]) {
            highestMarks=marks[i];
        }
        if( lowestMarks> marks[i]){
            lowestMarks = marks[i];
        }
        if (marks[i] >= 40) {
            passed++;
        }

     
    }
averageMarks =total/marks.length;
    
if (averageMarks >= 90) {
    console.log("90+ → A+");
} else if(averageMarks >= 80) {
    console.log("80–89 → A");
    
} else if (averageMarks >= 70) {
    console.log("70–79 → B");
    
} else if(averageMarks >= 60) {
    console.log("60–69 → C");
    
}else if(averageMarks >= 40) {
    console.log("40–59 → D");
    
} else{
    console.log("Below 40 → F")
}
let person ={
    Student:`${name}`,
    Total:total,
    Average:averageMarks,
    Highest:highestMarks,
    Lowest:lowestMarks,
    Passed:passed,

}
return person;
}


let final =analyzeStudent("Shiv", [78, 65, 91, 54, 82]);
console.log(final)

// let numbers = [10, 20, 30, 40, 50];
// numbers.forEach(function(number) {
//     console.log(number * 2);
// });

// let prices = [100, 200, 300, 400];

// let hike = prices.map(function(price) {
//     return price + price/10;
// });

// console.log(hike);

// let numbers = [12, 45, 7, 89, 34, 23, 50, 18];

// let bhao = numbers.filter(function(number) {
//     return number > 30;
// })
// console.log(bhao);
// let greater = numbers.filter(number => number > 30);
// console.log(greater);


// let numbers = [5, 12, 18, 25, 30];

// let result = numbers.find(number => number > 20)

// console.log(result);


// let students = [
//     { name: "Shiv", marks: 65 },
//     { name: "Rahul", marks: 82 },
//     { name: "Amit", marks: 45 },
//     { name: "Raj", marks: 90 }
// ];

// let result = students.find(student => student.marks > 80);
// console.log(result);


// let numbers = [10, 25, 40, 55, 70];

// let result = numbers.findIndex(number => number > 50);
// console.log(result);

// let numbers = [20, 45, 80, 120, 60];

// let result = numbers.some(number => number > 100);
// console.log(result);


// let students = [
//   { name: "Shiv", marks: 65 },
//   { name: "Rahul", marks: 82 },
//   { name: "Amit", marks: 35 },
//   { name: "Raj", marks: 90 }
// ];

// let passed = students.every(student => student.marks >= 40);
// console.log(passed);

// let bhai = students.every(function(student) {
//     return student.marks >=40;
// });
// console.log(bhai);

// Method	            Purpose	                     Returns
// forEach()	 Do something for each	                 —
// map()	     Transform each	                       New array
// filter()	     Keep matching	                      New array
// find()	     First matching	                      Element
// findIndex()	 First matching	                       Index
// some()	     At least one matches?	              true/false
// every()	     All match?	                          true/false

// let prices = [100, 250, 50, 300];

// let result1 = prices.sort((a,b) => a-b);
// console.log(result1)
// let result = prices.reduce(function(total,number) {
//     return total + number;
// },0);
// console.log(result);

// let bhai = prices.reduce((total,number)=> total+number,0)
// console.log(bhai);


// let students = [
//   { name: "Shiv", marks: 65 },
//   { name: "Rahul", marks: 82 },
//   { name: "Amit", marks: 35 },
//   { name: "Raj", marks: 91 },
//   { name: "Neha", marks: 76 }
// ];

// let seventyScored = students.filter(student => student.marks >= 70);
// let seventyPlusName = seventyScored.map(student => student.name);
// console.log(seventyPlusName);
// let firstNienty = students.find(student => student.marks >= 90);
// console.log(firstNienty);

// let total = students.reduce((total,student)=> total+student.marks,0);
// console.log(total);

let products = [
    { name: "Laptop", price: 55000, category: "Electronics", stock: 5 },
    { name: "Phone", price: 25000, category: "Electronics", stock: 0 },
    { name: "Shoes", price: 3000, category: "Fashion", stock: 12 },
    { name: "Watch", price: 5000, category: "Fashion", stock: 3 },
    { name: "Headphones", price: 2000, category: "Electronics", stock: 8 }
];

let result =function analyzeProducts(products) {
    // code
}

console.log(result);
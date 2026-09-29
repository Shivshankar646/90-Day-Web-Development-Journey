// let product ={
//     name:"Laptop",
//     price:50000,
//     brand:"HP",
//     stock:10,
// }

// console.log(product["name"]);
// console.log(product.price);


// let student = {
//     name: "Shiv",
//     marks: 82,
//     branch: "ENTC"
// };

// let property = "marks";
// console.log(student[property]);

// let student = {
//     name: "Shiv",
//     marks: 65,
//     branch: "ENTC"
// };
// student.marks = 75;
// student.branch = "Computer";
// console.log(student);


// let product = {
//     name: "Laptop",
//     price: 50000,
//     brand: "HP"
// };

// product.stock=10;
// product.category = "Electronics";
// delete product.brand;
// console.log(product);

// let user ={
//     name:"shiv",
//     age:22,
//      introduce:function(name) {
//         console.log(`Hello, my name is ${this.name}`);
//      }
// }

// user.introduce();
// let product={
//     name:"Laptop",
//     price:50000,
//     details:{
//         brand:"HP",
//         warranty:2,
//     }
// }

// console.log(product.name);
// console.log(product.details.brand);
// console.log(product.details.warranty);


// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Phone", price: 20000 },
//     { name: "Mouse", price: 1000 }
// ];

// console.log(products[1].name);
// console.log(products[2].price);
// console.log(products[2].name);


let products = [
    { name: "Laptop", price: 50000, stock: 5 },
    { name: "Phone", price: 20000, stock: 0 },
    { name: "Mouse", price: 1000, stock: 10 },
    { name: "Keyboard", price: 2000, stock: 3 }
];

let filterProducts = [...products].filter(product => product.stock > 0);
console.log(filterProducts);
let findFirstProduct = products.find(product => product.price < 5000);
console.log(findFirstProduct);
let finalTotal = products.reduce((total,product)=> total+product.price,0);
console.log(finalTotal);
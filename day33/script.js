// const employee = {
//     name: "Amit",
//     department: {
//         name: "IT"
//     }
// };

// console.log(employee.department?.name);
// console.log(employee.department?.managerName ?? "Not Assigned");


const product = {
    name: "Laptop",
    price: 50000
};

let Discount = product.discount ?? 0;
console.log(Discount);


const students = [
    { name: "Amit", marks: 65 },
    { name: "Neha", marks: 85 },
    { name: "Raj", marks: 90 }
];

let result = students.find(student => student.marks >= 90);
console.log(result);


const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 }
];

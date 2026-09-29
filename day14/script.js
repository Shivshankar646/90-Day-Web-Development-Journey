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


// let products = [
//     { name: "Laptop", price: 50000, stock: 5 },
//     { name: "Phone", price: 20000, stock: 0 },
//     { name: "Mouse", price: 1000, stock: 10 },
//     { name: "Keyboard", price: 2000, stock: 3 }
// ];

// let filterProducts = [...products].filter(product => product.stock > 0);
// console.log(filterProducts);
// let findFirstProduct = products.find(product => product.price < 5000);
// console.log(findFirstProduct);
// let finalTotal = products.reduce((total,product)=> total+product.price,0);
// console.log(finalTotal);


function analyzeEmployees(employees) {
    
let employeNames = employees.map(employe => employe.name);
let onlyItEmployees = employees.filter(employe => employe.department === "IT");
let finalOnlyItEmployees = onlyItEmployees.map(employe => employe.name);
let highSalaryEmployees = employees.filter(employe => employe.salary >= 50000);
let nameOfHighSalaryEmployees = highSalaryEmployees.map(employe => employe.name);
let averageSalary = employees.reduce((total,employe) => total+employe.salary,0)
let finalAverageSalary = averageSalary / employees.length;
let highestPaidEmploye = [...employees].sort((a,b) => b.salary - a.salary);
let finalHighestPaidEmploye = highestPaidEmploye[0].name;

for (let i = 0; i < employees.length; i++) {
    for (let j = 0; j < employees[i].skills.length; j++) {
        let skill = employees[i].skills[j];

        if (skill === "JavaScript") {
            let bhai = true;
        }
    }
}
let checkExperience = employees.every(employe => employe.experience >=1)

let itTotalSalary = employees.filter(employe => employe.department === "IT");
let finalITTotalSalary = itTotalSalary.reduce((total,employe) => total+employe.salary,0);

// let reactEmploye = checkEmployeSkills.sort(employe => employe === "React");

let salaryHighestToLowest = highestPaidEmploye.map(employe => employe.name)

let uniqueSkills = employees.skills
    return {
    employeeNames: employeNames,
    itEmployees: finalOnlyItEmployees,
    highSalaryEmployees: nameOfHighSalaryEmployees,
    averageSalary: finalAverageSalary,
    highestPaidEmployee: finalHighestPaidEmploye,
    hasJavaScript: bhai,
    allExperienced: checkExperience,
    totalITSalary: finalITTotalSalary,
    reactEmployee: "",
    sortedBySalary: salaryHighestToLowest,
    uniqueSkills: ""
}
}



let employees = [
    {
        name: "Shiv",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Rahul",
        department: "Finance",
        salary: 35000,
        experience: 1,
        skills: ["Excel", "Tally"]
    },
    {
        name: "Amit",
        department: "IT",
        salary: 70000,
        experience: 4,
        skills: ["JavaScript", "React", "Node"]
    },
    {
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 3,
        skills: ["Recruitment", "Communication"]
    },
    {
        name: "Neha",
        department: "IT",
        salary: 60000,
        experience: 3,
        skills: ["HTML", "CSS", "React"]
    }
];


let result = analyzeEmployees(employees);
console.log(result);
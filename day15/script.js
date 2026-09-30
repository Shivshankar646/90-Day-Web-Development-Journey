// let product = {
//     name: "Laptop",
//     price: 50000,
//     brand: "HP"
// }

// let {name,price,brand} = product;
// console.log(name);
// console.log(price);

// let user = {
//     name: "Shiv",
//     age: 22,
//     city: "Nanded"
// };

// let {name:userName,age:userAge,city:userCity} = user;
// console.log(userName);
// console.log(userAge);
// console.log(userCity);


// let numbers = [10, 20, 30, 40];

// let [first,second,third] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);


// let colors = ["Red", "Green", "Blue", "Yellow"];
// let [first, ,third] = colors;
// console.log(first);
// console.log(third);


// let frontend = ["HTML", "CSS"];
// let backend = ["Node", "Express"];

// let fullstack = [...frontend,...backend];
// console.log(fullstack);


// let numbers = [10, 20, 30];
// let newNumbers = [...numbers];
// newNumbers.push(40);
// console.log(newNumbers);

// // let user = {
// //     name: "Shiv",
// //     age: 22
// // };

// // let updatedUser ={
// //     ...user,
// //     city:"Nanded"
// // }

// console.log(updatedUser);

// let product = {
//     name: "Laptop",
//     price: 50000,
//     stock: 5
// };

// let updatedProduct ={
//     ...product,
//     price:45000,
//     stock:10
// }
// console.log(updatedProduct);

// function calculateTotal(...numbers) {
//    return numbers.reduce((total,number) => total+number,0);

// }

// let total =calculateTotal(100, 200, 50);
// console.log(total);

// let user = {
//     name: "Shiv",
    
// };

// console.log(user.profile?.phone);


// let user = {
//     name: "Shiv",
//     profile: {
//         email: "shiv@gmail.com"
//     },
//     skills: ["HTML", "CSS", "JavaScript"]
// };




// function showUser(userData, city = "Unknown") {
//     let {name,profile,skills} = userData;
//     console.log("Name:",name);
//     console.log("Email:",profile?.email)
// let copy =[...skills];
// console.log("Phone:",profile.phone??"Not Available");
// console.log("City:",city);
// console.log("Skills:",...copy)


// }

// showUser(user);

// function showProduct(productData) {
//    let {name,price,details} = productData;
//    console.log("Name:",name);
//    console.log("Price:",price);
//    console.log("Brand:",details?.brand ?? "Unknown Brand");
//    let copy = {...productData,
//     price:45000

//    };
//    console.log("Discounted Price:",copy.price)
   
// } 

// let product = {
//     name: "Laptop",
//     price: 50000,
//     details: {
//         brand: "HP"
//     }
// };

// showProduct(product);



// function createProfile(userData, role = "Student") {
//     let {name,email,address,skills} = userData;
//     let copy = [...skills];
//     copy.push("React");
//     console.log(`Name:${name}`);
//     console.log(`Email:${email}`);
//     console.log(`City:${address?.city ?? "Unknown City"}`);
//     console.log("Role:",role);
//     console.log("Skills:",...copy);
// }

// let user = {
//     name: "Shiv",
//     email: "shiv@gmail.com",
//     address: {
//         city: "Nanded"
//     },
//     skills: ["HTML", "CSS", "JavaScript"]
// };

// createProfile(user);

// function processOrder(orderData, discount = 0) {
//     let {customer,items,price} = orderData;
//     let copy =[...items];
//     copy.push("Keyboard");

//     let finalPrice = price * discount /100;
//     let lastFinal = price-finalPrice;
//     return {
//     name: customer?.name,
//     city: customer?.city,
//     phone: customer?.phone ?? "Not Provided",
//     items:copy,
//     finalPrice: lastFinal
// }
// }

// let order = {
//     customer: {
//         name: "Shiv",
//         city: "Nanded"
//     },
//     items: ["Laptop", "Mouse"],
//     price: 51000
// };

// let result =processOrder(order);
// console.log(result);
// console.log(processOrder(order, 10));


// function findSkillEmployees(employees) {

//     let skill =[]
// for (let i = 0; i < employees.length; i++) {
   
//     for (let j = 0; j < employees[i].skills.length; j++) {
        
//         if (employees[i].skills[j] === "React") {
//        skill.push(employees[i].name);
//     }
    
    
// }

// }
// console.log(skill)

// }


// let employees = [
//     { name: "Shiv", skills: ["HTML", "CSS", "JavaScript"] },
//     { name: "Amit", skills: ["JavaScript", "React", "Node"] },
//     { name: "Neha", skills: ["HTML", "CSS", "React"] }
// ];

// findSkillEmployees(employees);


// function findSkillEmployees(employees) {
//     let final = []
// employees.map(employe => 
//     employe.skills.filter(skill => {

//         if (skill === "React") {
//             final.push(employe.name);
//         }
//     }
// )
// )
// console.log(final)
// }


// let employees = [
//     { name: "Shiv", skills: ["HTML", "CSS", "JavaScript"] },
//     { name: "Amit", skills: ["JavaScript", "React", "Node"] },
//     { name: "Neha", skills: ["HTML", "CSS", "React"] }
// ];

// findSkillEmployees(employees);



function analyzeEmployees(employees) {
    
let itDepartemnet = employees.filter(employe => employe.department === "IT");
let finalIT = itDepartemnet.map(employe => employe.name);
let react = []
let reactEmploye = employees.map(employe => 
    employe.skills.filter(skill => {

        if (skill === "React") {
            react.push(employe.name)
        }
    }
    )
)


let finalHighest =[...employees].sort((a,b) => b.salary-a.salary);
let lastFinalHighest = [finalHighest[0].name,finalHighest[1].name]
let totalSalary = employees.reduce((total,employe) => total+employe.salary,0);
let highestPaid = finalHighest[0].name;

   return {
    itEmployees: finalIT,

    reactEmployees: react,

    highSalaryEmployees: lastFinalHighest,

    totalITSalary: totalSalary,

    highestPaidEmployee: highestPaid
}
}

let employees = [
    {
        name: "Shiv",
        department: "IT",
        salary: 45000,
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Amit",
        department: "IT",
        salary: 70000,
        skills: ["JavaScript", "React", "Node"]
    },
    {
        name: "Neha",
        department: "HR",
        salary: 50000,
        skills: ["Communication", "Excel"]
    },
    {
        name: "Rahul",
        department: "IT",
        salary: 60000,
        skills: ["HTML", "CSS", "React"]
    }
];

console.log(analyzeEmployees(employees));
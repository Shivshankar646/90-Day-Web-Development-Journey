// let age = 16;
// if (age >=18) {
//     console.log(`You can vote.`);
// } else {
//     console.log("You cannot vote");
// }

// let marks =82;

// if (marks >=90) {
//     console.log("Excellent");
// } else if(marks >=75) {
//     console.log("Very Good");
// } else if (marks >=50) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// let age = 60;

// if (age <= 12) {
//     console.log("Child");
// } else if(13 >=age && age <=17) {
//     console.log("Teenager");
// } else if (age >=18 && age <= 59) {
//     console.log("Adult");
// } else {
//     console.log("Senior Citizen");
// }

// let age = 16;
// let status = age >= 18? "Adult":"Minor";
// console.log(status);
// let hasId =true;

// if (age < 18) {
//     console.log("Not eligible");
// } else{
//         if (hasId) {
//             console.log("Eligible");
//         } else {
//             console.log("ID require");
//         }  
// } 

// let age =20;
// let hasTicket =true;
// let isBanned = false;

// if (age >= 18 && hasTicket && !isBanned ) {
//     console.log("Entry allowed")
// }
// let age = 25;
// let salary = 30000;
// let creditScore = 720;

// if (age >= 21 && salary >= 25000 && creditScore >= 700) {
//     console.log("Loan approved");
// } else {
//     console.log("Loan rejected")
// }
let finalPrice ;
let discountAmount;
let purchaseAmount =5000;
if (purchaseAmount >= 5000) {
discountAmount = purchaseAmount * 0.20
    finalPrice = purchaseAmount-discountAmount;
    console.log(`Discount = ${discountAmount} Final Price = ${finalPrice}`);
} else if (purchaseAmount >= 2000) {
    discountAmount = purchaseAmount * 0.10
    finalPrice = purchaseAmount-discountAmount;
    console.log(`Discount = ${discountAmount} Final Price = ${finalPrice}`);

}else if (purchaseAmount >= 1000) {
      discountAmount = purchaseAmount * 0.05
    finalPrice = purchaseAmount-discountAmount;
    console.log(`Discount = ${discountAmount} Final Price = ${finalPrice}`);
}else {
      discountAmount = purchaseAmount * 0
    finalPrice = purchaseAmount-discountAmount;
    console.log(`Discount = ${discountAmount} Final Price = ${finalPrice}`);
}

let  username = "shiv";
let  password = "1234";
let  isBlocked = false;

if (isBlocked) {
    console.log("Account blocked");
} else if(username === "shiv" && password === "1234") {
    console.log("Login successful");
} else {
    console.log("Invalid username or password")
}


// let balance = 10000;
// let withdrawal = 1000;
// let pinCorrect = true;

// if (pinCorrect) {
//     if (withdrawal >balance) {
//         console.log("Insufficient balance");
//     } else{
//         console.log("Withdrawal successful");
//         console.log(`Remaining Balance:${balance-withdrawal}`);
//     }

// } else {
//     console.log("Incorrect PIN");
// }

let balance = 10000;
let withdrawal = 1000;
let pinCorrect = true;

if (pinCorrect && withdrawal <= balance ) {
    console.log("Withdrawal successful");
        console.log(`Remaining Balance:${balance-withdrawal}`);
    
} else if ( pinCorrect) {
    console.log("Insufficient balance");
} else{
    console.log("Incorrect PIN");

}

//practicing problems
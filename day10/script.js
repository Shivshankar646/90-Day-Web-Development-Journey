// for (let i = 1; i <= 10; i++) {
//     console.log(5*i); 
    
// }

// let sum = 1;
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 1) {
//     console.log(i)
//   }
    
// }
// let factorial = 1;

// for (let i = 1; i <= 5; i++) {
//    factorial =factorial * i;
// }
// console.log(`Factorial of 5!=${factorial}`);

// let i =10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//      continue;
//   }
//   console.log(i)
// }

// for (let i = 1; i <= 5; i++) {
  
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//   row += "*";
// }
// console.log(row);
// }

for (let i = 1; i <= 30; i++) {
   if(i% 3 === 0 && i%5 === 0){
      console.log("FizzBuzz");
     continue;
} else if(i % 5 === 0){
  console.log("Buzz");
  continue;
  
} else if(i % 3 === 0 ) { 
  console.log("Fizz");
  continue;

} else {
  console.log(i);
}
  
}
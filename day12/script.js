// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let add = fruits.push("bhai")
// let removed = fruits.pop();
// console.log(add);
// console.log(removed);
// console.log(fruits);


// let total =0;
// let numbers = [10, 20, 30, 40, 50];
// for (let i = 0; i < numbers.length; i++) {
//    console.log(numbers[i] * 2);
//    total+=numbers[i];
   
// }
// console.log(total);


// let numbers = [12, 45, 7, 89, 34, 23];
// let highestNumber = 0;
// for (let i = 0; i < numbers.length; i++) {
// if (highestNumber < numbers[i] ) {
//     highestNumber=numbers[i]
// } 
    
// }
// console.log(highestNumber);

// let smallestNumber =9999;
// let numbers = [12, 45, 7, 89, 34, 23];

// for (let i = 0; i < numbers.length; i++) {
//        if (smallestNumber > numbers[i] ) {
//             smallestNumber=numbers[i];
//        }

// }
// console.log(smallestNumber);
// let count =0;
// let numbers = [12, 45, 7, 89, 34, 23, 50, 18];
// for (let i = 0; i < numbers.length; i++) {
//     if (30 < numbers[i]) {
//         count++;
//     }
    
// }

// console.log(count);
// let total = 0;
// let sumGreaterThanThirty=0;
// let count = 0;
// let numbers = [12, 45, 7, 89, 34, 23, 50, 18];
// let largestNumber = numbers[0];
// let smallestNumber=numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     total+=numbers[i]
//     if (largestNumber < numbers[i]) {
//         largestNumber=numbers[i];
//     }
//     if (smallestNumber > numbers[i] ) {
//         smallestNumber=numbers[i];
//     }
//     if (30 < numbers[i]) {
//         count++;
//         sumGreaterThanThirty += numbers[i];

//     }
// }
// console.log("Total:",total);
// console.log(`Largest:${largestNumber}`);
// console.log(`Smallest:${smallestNumber}`);
// console.log(`Greater than 30: ${count}`);
// console.log(`Sum of greater than 30: ${sumGreaterThanThirty}`);

// let even = 0;
// let evenSum = 0;
// let odd = 0;
// let oddSum= 0;
// let fourtyNum =0;
// let fourtyGreaterNumberSum =0; 
// let numbers = [12, 45, 7, 89, 34, 23, 50, 18];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         even++;
//         evenSum+=numbers[i];
//     }
//     if (numbers[i] % 2 === 1) {
//         odd++;
//         oddSum+=numbers[i];
//     }
//     if (40 < numbers[i]) {
//         fourtyNum++;
//         fourtyGreaterNumberSum+=numbers[i];
//     }
//     if (23 === numbers[i]) {
//         console.log("Yes 23 Present in the array.")
//     }
    
// }

// console.log("EVen Numbers:",even);
// console.log("Odd Numbers:",odd);
// console.log("Even Number Sum:",evenSum);
// console.log("Odd Number Sum:",oddSum);







// let total = 0;
// let sumGreaterThanThirty=0;
// let count = 0;
// let numbers = [12, 45, 7, 89, 34, 23, 50, 18];
// let largestNumber = numbers[0];
// let smallestNumber=numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     total+=numbers[i]
//     if (largestNumber < numbers[i]) {
//         largestNumber=numbers[i];
//     }
//     if (smallestNumber > numbers[i] ) {
//         smallestNumber=numbers[i];
//     }
//     if (30 < numbers[i]) {
//         count++;
//         sumGreaterThanThirty += numbers[i];

//     }
// }
// console.log("Total:",total);
// console.log(`Largest:${largestNumber}`);
// console.log(`Smallest:${smallestNumber}`);
// console.log(`Greater than 30: ${count}`);
// console.log(`Sum of greater than 30: ${sumGreaterThanThirty}`);

// function analyzeNumbers(numbers) {
//     let total = 0;
//     let sumGreaterThanThirty=0;
//     let count = 0;
//     let even=0;
//     let odd =0;
//     let largestNumber = numbers[0];
//     let smallestNumber=numbers[0];
//     let average =0;
//     for (let i = 0; i < numbers.length; i++) {
//         total+=numbers[i]
//         if (largestNumber < numbers[i]) {
//             largestNumber=numbers[i];
//         }
//         if (smallestNumber > numbers[i] ) {
//             smallestNumber=numbers[i];
//         }
//         if (30 < numbers[i]) {
//             count++;
//             sumGreaterThanThirty += numbers[i];
            
//         }
//          if (numbers[i] % 2 === 0) {
//         even++;
//     }
//     if (numbers[i] % 2 === 1) {
//         odd++;
//     }
//     }
//     average=total/numbers.length;
//     return {total:total,
// average:average,largest:largestNumber,
// smallest:smallestNumber,evenCount:even,
// oddCount:odd,greaterThan30:count,
// greaterThan30Sum:sumGreaterThanThirty,
//     }

// }


// let numbers = [12, 45, 7, 89, 34, 23, 50, 18];
// let result = analyzeNumbers(numbers);
// console.log(result);




// function analyzeStudents(students) {
// let totalMarks=0;
// let averageMarks = 0;
// let passedCount = 0;
// let failedCount = 0;
// let topStudent=students[0].name;
// let highestMarks = students[0].marks;
// let lowestMarks = students[0].marks;
//     for (let i = 0; i < students.length; i++) {
//    totalMarks+=students[i].marks
//         if (highestMarks < students[i].marks) {
//             highestMarks=students[i].marks;
//                         topStudent =students[i].name;
//         }
//         if (lowestMarks > students[i].marks) {
//             lowestMarks=students[i].marks;
//         }
//         if (40 < students[i].marks) {
//             passedCount++;
//         } else{
//             failedCount++;
//         }

        
//     }
//   averageMarks=totalMarks/students.length;
//     return{
// totalStudents:students.length,
// totalMarks:totalMarks,
// averageMarks: averageMarks,
// highestMarks: highestMarks,
// lowestMarks: lowestMarks,
// passedStudents: passedCount ,
// failedStudents: failedCount ,
// topStudent: topStudent,
//     }
// }

// let students = [
//     { name: "Shiv", marks: 78 },
//     { name: "Rahul", marks: 65 },
//     { name: "Amit", marks: 91 },
//     { name: "Priya", marks: 54 },
//     { name: "Neha", marks: 82 }
// ];

// let result2 = analyzeStudents(students);
// console.log(result2);

function processStudents(students) {

let passedCount = 0;
let failedCount = 0;
let topStudentName = students[0].name;
let topMarks = students[0].marks;
let highestScoreStudent = [];
let failedstudent = [];
   for (let i = 0; i < students.length; i++) {
    

    if (students[i].marks >= 40) {
        passedCount++;
    }
    if (students[i].marks  < 40) {
        failedCount++;
    }
    if (topMarks < students[i].marks) {
        topMarks=students[i].marks;
        topStudentName = students[i].name;
    }

    if (80 <= students[i].marks) {
        highestScoreStudent.push(students[i]);
        console.log(`High scorer:${students[i].name}`)
    }

    if (40 > students[i].marks) {
        failedstudent.push(students[i].name);
        console.log(`Failed:${students[i].name}`)
    }
    
   }
   return{
    totalStudents:students.length,
    passedStudents:passedCount,
    failedStudents:failedCount,
     topStudent:topStudentName,
     topMarks:topMarks,
      highScorers: highestScoreStudent,
    failedNames: failedstudent,

   }
}

let students = [
    { name: "Shiv", marks: 78 },
    { name: "Rahul", marks: 35 },
    { name: "Amit", marks: 91 },
    { name: "Priya", marks: 54 },
    { name: "Neha", marks: 28 },
    { name: "Rohan", marks: 82 }
];

let result = processStudents(students);
console.log(result);


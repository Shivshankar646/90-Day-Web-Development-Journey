// function createCounter() {
//     let count = 0;

//    return function inner() {
//         count++;
//         console.log(count);
        
//     }
   
// }
// createCounter()(); 


// const user = {
//     name: "Shiv",

//     greet: function () {
//         const say = () => {
//             console.log(this.name);
//         };

//         say();
//     }
// };

// user.greet();
const user = {
    name: "Shiv",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();
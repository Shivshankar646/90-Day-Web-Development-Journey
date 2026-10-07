

// function createCounter() {
    
//     let count = 0;
//     function inner() {
//           count++;
//           return count;
//     }
//     return inner;
// }
// let counter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


function processNumber(number,operation) {
    return operation(number);
}
    function square(number) {
        return number*number;
    }
    function double(number) {
        return number*2;
    }


console.log(processNumber(5, double)); // 10
console.log(processNumber(5, square)); // 25


function greetUser(name,callback) {
    
    callback(name)
}
function sayHello(name) {
    console.log("hello",name)
}

greetUser("Shiv", sayHello);
// Hello Shiv
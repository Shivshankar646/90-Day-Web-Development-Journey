
function double(number) {
   return number * 2;
  
}

function processNumber(number,callback) {
   return callback(number);
}

console.log(processNumber(7, double))

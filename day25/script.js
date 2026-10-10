function getEvenNumbers(numbers) {
    let result = numbers.filter(num => {
        num % 2 === 0;
    });
   return result;

}
let bhai =getEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(bhai)

// let calculateTotal = (price,quantity) =>{
//     return price * quantity;
// }

// let result =calculateTotal(250,3);
// console.log(result);

   function calculateTotal(prices) {
         let total = prices.reduce((total, price) => total + price, 0);
       return total;
    }

const calculateBill = (prices) =>{
let total1 = calculateTotal(prices);

          if (total1 >= 2000) {
            return  total1 -total1*10/100;
        } else{
            return total1;
        }
   
    }




    

const prices = [400, 500];

let result =calculateBill([400, 500]);
console.log(result);
// let result2 =calculateTotal(prices);
// console.log(result2);

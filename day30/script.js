// let promise = new Promise((resolve) => {
//     resolve("Payment successful");
// })
// .then((result) => {
//     console.log(result);
// })
// const payment = Promise.reject("Payment failed");

// payment.catch((error) => {
//     console.log(error);
// });

// const network = Promise.reject("Network error");
// network.catch((error) =>{
//     console.log(error);
// })

// let promise = new Promise((resolve, reject) => {
//     reject("Payment failed")
// })
// .then((result) =>{
//     console.log(result);
// })
// .catch((error) =>{
//     console.log(error);
// })

function getUser() {
    return Promise.resolve("shiv");
}

async function showUser() {
    let result = await getUser();
    console.log(result);
}
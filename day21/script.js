
// async function getUser() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users/');
//         if (response.ok) {
//             let data = await response.json();
//                console.log("Name:",data[0].name)
//         console.log("Email:",data[0].email);
//         console.log("City:",data[0].address.city)
//         } else {
//            throw new Error("Server Error");
//         }

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// getUser();


// async function getUser() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users/");
//         if (response.ok) {
//             let data =await response.json();
//             data.forEach(user => {
//                 console.log("User:",user.name);
//                 console.log("City:",user.address.city);
//             });
//         } else{
//             throw new Error("Server Error");
            
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
// }


// getUser();


let search = document.getElementById("search");
let btn =document.getElementById("btn");
let result =document.getElementById("result")
let status =document.getElementById("status");
async function getUser() {
    try {
        status.textContent ="Loading...";
       let response = await fetch("https://jsonplaceholder.typicode.com/users");
console.log(response);
        if (response.ok) {
            let data =await response.json();
            if (search.value === "") {
    console.log("input is Empty")
    return;
}
       let getdata = data.filter(user => user.name.includes(search.value));
       getdata.forEach(user => {
        result.textContent +=user.name;
        result.textContent = "";
        if (getdata.length === 0) {
   result.textContent ="user not found"
}
       });
     
        } else{
            throw new Error("Server Error");
            
        }
    } catch (error) {
        status.textContent = "Failed to load users";
console.log(error.message);
    }
}


// btn.addEventListener("click",function() {
//     getUser();
// })

btn.addEventListener("click", function() {
    console.log("Button clicked");
    getUser();
});

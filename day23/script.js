let search = document.getElementById("search");
let btn = document.getElementById("btn");
let status = document.getElementById("status");
let result = document.getElementById("result");



async function getdata() {
    try {
        if (search.value.trim() === "") {
            result.textContent = "Please enter a user name";
            return;
        } else{

        
        status.textContent = "Loading...";
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response.ok) {
            status.textContent = "Users loaded";
             let data = await response.json(); 
             result.textContent = "";
let resultofName  = data.filter(user => user.name.toLowerCase().includes(search.value.toLowerCase()));
if (resultofName.length === 0) {
    result.textContent ="User not found";
} else {
   resultofName.forEach(user => {
    let div= document.createElement("div");
    let p1 =document.createElement("p");
    let p2 =document.createElement("p");
    let p3 =document.createElement("p");
    p1.textContent = user.name;
    p2.textContent = user.email;
    p3.textContent = user.address.city;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    result.appendChild(div);
});
}
search.value ="" 
  
        } else {
           status.textContent ="Failed to load users";
        }
    } 
    } catch (error) {
        status.textContent =error.message;
    }
}

btn.addEventListener("click",function() {
getdata();
})



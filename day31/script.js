async function getUser() {
    let loading = true;
    let user = null;
    let error = null;
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            if (!response.ok) {
            throw new Error("User not found");
        }
         user = await response.json();
        
    } catch (err) {
       error = err.message;
    }
    finally{
        loading =false;
    }
    console.log(loading , user , error)
}
getUser()
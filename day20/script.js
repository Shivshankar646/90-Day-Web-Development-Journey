// function processTask(task, callback) {
//     console.log("Processing: " + task);

//    callback();
// }


// processTask("Download", function() {
//     console.log("Task completed");
// });


// let promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
        
//         resolve("User data loaded");
//     }, 2000);
// });


// async function getUserData() {

//     try {
//         let result = await promise;
//     console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
    
// }
// getUserData();


// let promise =new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("User data loaded");
//     }, 2000);
// })

// async function getUserData() {
//     try {
//         let result = await promise;
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// console.log("Finished")
// getUserData()


// function processUser() {
//     let promise = new Promise((resolve) => {
        
//     setTimeout(() => {
//         resolve({ name: "Shiv", age: 22 });
//     }, 2000);
// })
// return promise;

// }

// async function getUser() {
//     try {
//         let result = await processUser();
//         let {name,age} =result;
//         console.log(name,age);
//     } catch (error) {
//         console.log("Failed to load user");
//     }
// }

// getUser()
// console.log("Program continues...");
// processUser()

// function fetchUser() {
//     let promise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//   id: 101,
//   name: "Shiv"
// })
//         }, 2000);
//     })
//     return promise;
// }

// function fetchPosts(userId) {
//     let promise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//   "JavaScript Practice",
//   "React Project",
//   "PolicePrep"
// ])
//         }, 1000);
//     })
//     return promise;
// }

// async function getUserData() {
//     try {
//         let result = await fetchUser()
//         let {id,name} = result;
//         console.log("User:",name);
//         let fetchpost = await fetchPosts(id);
//         console.log("Post:")
//         fetchpost.forEach(post => {
//             console.log(post);
//         });
//     } catch (error) {
//         console.log("Failed to load data")
//     }
// }

// getUserData()

// console.log("Program continues...")


function fetchUser() {
    let promise = new Promise((resolve) => {
       setTimeout(() => {
         resolve({
  id: 101,
  name: "Shiv"
})
       }, 1000);
    })
    return promise;
}

function fetchPosts() {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve([
  { id: 1, title: "JavaScript" },
  { id: 2, title: "React" }
])
        }, 1500);
    })
    return promise;
}


function fetchComments() {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve([
  "Great post!",
  "Very useful"
])
        }, 1000);
    })
    return promise;
}

async function loadUserData() {
    try {
        let result = await fetchUser();
        let {id,name} =result;
        console.log("User:",name);
        let postLoad = await fetchPosts(id);
        
        postLoad.forEach(post => {
            console.log("Post:",post.title);
            async function loadComments() {
                let loadComments = await fetchComments(post.id);
                loadComments.forEach(Comment =>{
               console.log("Comment:",Comment);
                })
            }
            loadComments();

        });
    } catch (error) {
        console.log("Failed to load user data");
    }
}

console.log("Program continues...");
loadUserData();



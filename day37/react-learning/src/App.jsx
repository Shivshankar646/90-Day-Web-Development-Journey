// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count+1)}>Increase</button>
//       <button onClick={() => setCount(count > 0 ? count-1:0)}>Decrease</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// export default App;



// function App() {
  //   const [name, setName] = useState("");
  
  //   return (
    //     <div>
    //       <input value={name} type="text" onChange={(event) => setName(event.target.value)}  />
    //       <h1>
    //   {name === "" ? `Please enter your name` : `Welcome, ${name}!`}
    // </h1>
    //       <h2>Character count:{name.length}</h2>
    //       <button onClick={() => setName("")}>Clear Name</button>
    //     </div>
    //   );
    // }
    
    // export default App;
    
    import { useState } from "react";

function App() {
  const [name,setName] = useState("");
  const [submittedName,setSubmitName] = useState("");
  return(
    <div>
      <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
      
      <h2>Character count:{name.trim().length}</h2>
      <button onClick={() => {setSubmitName(""); setName("");}}>Clear Name</button>
     <button onClick={() => setSubmitName(name.trim() === ""? `Please enter your name.`: `Welcome, ${name.trim()}!`)}>submit</button>
     <h1>name:{submittedName}</h1>
    </div>
  )
}

export default App;
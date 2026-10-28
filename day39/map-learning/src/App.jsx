
// function App() {
//   const students = [
//   { id: 1, name: "Amit", marks: 75 },
//   { id: 2, name: "Rahul", marks: 82 },
//   { id: 3, name: "Shiv", marks: 90 }
// ];

//     return(
//       <div>
//         <h1>Student Results</h1>
// {students.map((student) => (
//   <p key={student.id}>
//     {student.name} — Marks: {student.marks} — {
//       student.marks >= 80
//         ? "Excellent"
//         : student.marks >= 60
//           ? "Good"
//           : "Needs Improvement"
//     }
//   </p>
// ))}
//       </div>
//     )
    
//   }

//   export default App;

// function App() {

// const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mouse", price: 500 },
//   { id: 3, name: "Keyboard", price: 1500 }
// ];
// return(
//   <div>
// <h1>Product List</h1>
// {
//   products.map((product) =>
//   <p key={product.id}>{product.name} - {product.price} - {product.price > 1000 ? "Expensive" : "Affordable"}</p>
//   )
// }
//   </div>
// );
// }

// export default App;


// function App() {
//   const students = [
//   { id: 1, name: "Amit", marks: 45 },
//   { id: 2, name: "Rahul", marks: 80 },
//   { id: 3, name: "Shiv", marks: 35 },
//   { id: 4, name: "Neha", marks: 65 }
// ];
// return(
//   <div>
//     <h1>Student List</h1>
//     {
//       students.filter((student) =>
//         student.marks > 50
//       )
//       .map((student) => 
//       <p key={student.id}>{student.name} - {student.marks}</p>
//       )
//     }
//   </div>
// )
// }

// export default App;

import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [passed,setPassed] = useState("");
  const students = [
  { id: 1, name: "Amit", marks: 45 },
  { id: 2, name: "Rahul", marks: 80 },
  { id: 3, name: "Shiv", marks: 35 },
  { id: 4, name: "Neha", marks: 65 }
];
return(
  <div>
    <h1>Student Result Dashboard</h1>
      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      
    <h2>All Students:</h2>
    {
      students
      .filter((student) => 
    student.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((student) =>
      <p key={student.id}>{student.name} - {student.marks}</p>
      )
      
      
    }
    <h2>Passed Students:</h2>
    <input
        type="text"
        placeholder="Search student..."
        value={passed}
        onChange={(event) => setPassed(event.target.value)}
      />
    {
      students
          .filter((student) => 
          student.marks >=50 && student.name.toLowerCase().includes(passed.toLowerCase()))
          .map((student) => 
           <p key={student.id}>{student.name} - {student.marks}</p>
          )
    }
     <h3>Student Count: {students.length}</h3>
  </div>
);
}

export default App;
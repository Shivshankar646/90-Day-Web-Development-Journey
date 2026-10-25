// function Student(props) {
//   return <h2>{props.name} is {props.age} years old. </h2>
// // }


// function App() {
//   return (
//     <div>
//       <Student name = "Shivshankar" age={21}/>
//       <Student name = "Rahul" age={22}/>
//       <Student name = "Amit" age={20}/>
//     </div>
//   );
// }

// export default App;

// function Product({name,price}) {
//   let display;
//   if (price > 20000) {
//     display="Expensive";
//   }
//   return <h2>{name} costs ₹{price} {display?? "Affordable"}</h2>
// }

// function App() {
//   return(
//     <div>
//       <Product name="Laptop" price={20000}/>
//       <Product name="Mobile" price={15000}/>
//     </div>
//   );
// }
// export default App;

// function Employee({name,salary}) {
//   return <h2>{name} earns ₹{salary}</h2>
// }

// function App() {
//   return(
//     <div>
//       <Employee name="Shiv" salary={30000} />
//       <Employee name="Rahul" salary={45000} />
//     </div>
//   );
// }

// export default App;


// function Message(props) {
//   return(
//     <div>
//       {props.children}
//     </div>
//   );
// }
// function App() {
//   return(
//     <div>
//       <Message>
//   <h2>Namaste Shiv!</h2>
//   <p>You are learning React.</p>
// </Message>
//     </div>
//   );
// }

// export default App;

function Card(props) {
  return(
    <div>
      {props.children}
    </div>
  )
}

function Student({name,marks}) {
 
  return(
<h2>{name} and {marks} {marks >=50 ? "Passed" :"Failed"} {marks === 100 && "Excellent!"}</h2>
  ) 
}
function App() {
  return(
    <div>
     <Card>
  <Student name="Shiv" marks={100} />
</Card>

<Card>
  <Student name="Rahul" marks={35} />
</Card>
    </div>
  );
}

export default App;
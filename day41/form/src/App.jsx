import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course,setCourse] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
   if (name.trim() === "" && email.trim() === "" && course.trim() === "") {
      alert(`Please enter your name!
             Please enter your email!
             Please enter your course!
        `)
    } else if (name.trim() === "") {
      alert(`Please enter your name!`)
    } else if (email.trim() === "") {
      alert("Please enter your email!");
    } else if (course.trim() === "") {
      alert("Please enter your course!")
    }else{
      alert(`
        Welcome, ${name}! 
        Your Email is, ${email}
        your Coarse is, ${course} 
        `);
        }
  }

  return (
    <div>
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
    <input type="email" placeholder="Enter Your Email" value={email} onChange={(event) => setEmail(event.target.value)} />
    <input type="text" placeholder="Enter Your Coarse" value={course} onChange={(event) => setCourse(event.target.value)}/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
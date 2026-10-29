import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const [passed, setPassed] = useState("");

  const students = [
    { id: 1, name: "Amit", marks: 45 },
    { id: 2, name: "Rahul", marks: 80 },
    { id: 3, name: "Shiv", marks: 35 },
    { id: 4, name: "Neha", marks: 65 }
  ];

  // Pehle matching students filter karo
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );
const filteredPassedStudents= students.filter(
          (student) =>
            student.marks >= 50 &&
            student.name.toLowerCase().includes(passed.toLowerCase())
        );
  return (
    <div>
      <h1>Student Result Dashboard</h1>

      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <h2>All Students:</h2>

      {filteredStudents.length === 0 ? (
        <p>No students found!</p>
      ) : (
        filteredStudents.map((student) => (
          <p key={student.id}>
            {student.name} - {student.marks}
          </p>
        ))
      )}

      <h2>Passed Students:</h2>

      <input
        type="text"
        placeholder="Search student..."
        value={passed}
        onChange={(event) => setPassed(event.target.value)}
      />

      
      {filteredPassedStudents.length === 0 ? (
        <p>No passed students found!</p>
      ) : (
        filteredPassedStudents.map((student) => (
          <p key={student.id}>
            {student.name} - {student.marks}
          </p>
        ))
      )}

      <h3>Student Count: {students.length}</h3>
    </div>
  );
}

export default App;
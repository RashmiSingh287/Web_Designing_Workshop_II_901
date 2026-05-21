import React from "react";
import "./App.css";

// Student Component
function Student(props) {
  return (
    <div className="student-card">
      <h2>Student Details</h2>

      <p>
        <b>Name:</b> {props.name}
      </p>

      <p>
        <b>Course:</b> {props.course}
      </p>

      <p>
        <b>Marks:</b> {props.marks}
      </p>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div className="container">
      <h1>React Components using JSX and Props</h1>

      {/* Using Student Component Multiple Times */}

      <Student
        name="Rashmi Singh"
        course="B.Tech CSE"
        marks="92"
      />

      <Student
        name="Aman Kumar"
        course="BCA"
        marks="85"
      />

      <Student
        name="Priya Sharma"
        course="MCA"
        marks="88"
      />
    </div>
  );
}

export default App;
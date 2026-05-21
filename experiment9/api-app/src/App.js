// App.js
import React, { useState } from "react";
import "./App.css";

function App() {

  // State Variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error State
  const [error, setError] = useState("");

  // Success Message
  const [success, setSuccess] = useState("");

  // Form Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (name === "") {
      setError("Name cannot be empty");
      setSuccess("");
    }
    else if (!email.includes("@")) {
      setError("Email must contain @");
      setSuccess("");
    }
    else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setSuccess("");
    }
    else {
      setError("");
      setSuccess("Registration Successful!");
    }
  };

  return (
    <div className="main">

      <div className="form-box">

        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button */}
          <button type="submit">
            Register
          </button>

        </form>

        {/* Error Message */}
        {error && <p className="error">{error}</p>}

        {/* Success Message */}
        {success && <p className="success">{success}</p>}

      </div>

    </div>
  );
}

export default App;
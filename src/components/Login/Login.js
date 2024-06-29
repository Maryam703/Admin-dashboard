import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Handelsubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Login-container">
      <form onSubmit={Handelsubmit}>
        <div className="logo">SAPPHIRE</div>
        <input
          type="text"
          className="input"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="input"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button">Login</button>
      </form>
    </div>
  );
}

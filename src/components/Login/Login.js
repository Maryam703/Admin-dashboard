import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Config/FirebaseConfig";
import { query, where, collection, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Handelsubmit = async (e) => {
    e.preventDefault();

    try {
      const users = await signInWithEmailAndPassword(auth, email, password);

      try {
        const q = query(
          collection(db, "users"),
          where("uid", "==", users?.user?.uid)
        );

        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));

          if (user) {
            localStorage.setItem("users", JSON.stringify(user));

            setEmail("");
            setPassword("");
            if (user.role === "admin") {
              navigate("/Dashboard");
            } else {
              navigate("/login");
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Login-container">
      <form onSubmit={Handelsubmit}>
        <div className="logo">SAPPHIRE</div>
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

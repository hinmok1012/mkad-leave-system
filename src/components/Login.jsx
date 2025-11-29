import { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      onLogin(res.user);
    } catch (e) {
      alert(e.message);
    }
  };

  const signup = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      onLogin(res.user);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4CD7C8, #2CC5A7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* Logo + Title */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10z"></path>
        </svg>

        <h1 style={{ marginTop: 10, fontSize: 26 }}>MKAD</h1>
      </div>

      {/* Username */}
      <input
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "80%",
          padding: "15px",
          borderRadius: "25px",
          border: "none",
          marginBottom: "15px",
          textAlign: "center",
        }}
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "80%",
          padding: "15px",
          borderRadius: "25px",
          border: "none",
          marginBottom: "8px",
          textAlign: "center",
        }}
      />

      {/* Login Button */}
      <button
        onClick={login}
        style={{
          width: "80%",
          padding: "12px",
          marginTop: "20px",
          borderRadius: "25px",
          background: "white",
          color: "#2CC5A7",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Login
      </button>

      {/* Signup Button */}
      <button
        onClick={signup}
        style={{
          width: "80%",
          padding: "12px",
          marginTop: "10px",
          borderRadius: "25px",
          border: "2px solid white",
          background: "transparent",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Sign Up
      </button>

      {/* Forgot Password */}
      <div
        style={{
          marginTop: "15px",
          fontSize: "12px",
          opacity: 0.8,
          cursor: "pointer",
        }}
      >
        Forgot password?
      </div>
    </div>
  );
}

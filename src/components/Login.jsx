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
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(180deg, #4CD7C8, #2CC5A7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
        padding: 0,
        margin: 0,
      }}
    >
      {/* ⭐ Middle wrapper perfectly centered */}
      <div
        style={{
          width: "100%",
          maxWidth: 330,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          margin: 0,
          padding: 0,
        }}
      >
        {/* Logo */}
        <div style={{ margin: 0 }}>
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
        </div>

        {/* App Name */}
        <h1 style={{ margin: 0, fontSize: 28 }}>MKAD請假系統</h1>

        {/* Username */}
        <input
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "25px",
            border: "none",
            textAlign: "center",
            background: "#333",
            color: "white",
          }}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "25px",
            border: "none",
            textAlign: "center",
            background: "#333",
            color: "white",
          }}
        />

        {/* Login */}
        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "12px",
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

        {/* Signup */}
        <button
          onClick={signup}
          style={{
            width: "100%",
            padding: "12px",
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

        {/* Forgot */}
        <div
          style={{
            fontSize: "12px",
            opacity: 0.8,
            cursor: "pointer",
          }}
        >
          Forgot password?
        </div>
      </div>
    </div>
  );
}

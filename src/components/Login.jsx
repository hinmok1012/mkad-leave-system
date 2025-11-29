import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

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
        {/* Calendar Logo */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="3" ry="3"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>

        <h1 style={{ margin: 0, fontSize: 28 }}>MKAD請假系統</h1>

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

        {/* Login Only */}
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
      </div>
    </div>
  );
}

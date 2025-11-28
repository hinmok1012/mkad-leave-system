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
    <div>
      <h2>登入 / 註冊</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="密碼"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>登入</button>
      <button onClick={signup}>註冊</button>
    </div>
  );
}

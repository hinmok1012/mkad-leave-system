import { useState } from "react";
import { auth } from "./firebase";

import Login from "./components/Login";
import LeaveForm from "./components/LeaveForm";
import LeaveList from "./components/LeaveList";
import ApproveList from "./components/ApproveList";
import Dashboard from "./components/Dashboard";
import Calendar from "./components/Calendar";

export default function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("employee");

  const managerEmails = ["moksaihin852@gmail.com"];

  const handleLogin = (u) => {
    setUser(u);
    setRole(managerEmails.includes(u.email) ? "manager" : "employee");
  };

  if (!user) return <Login onLogin={handleLogin} />;

  return (
    <div style={{ padding: 20, background: "#f3f4f6", minHeight: "100vh" }}>
      <h1>假期系統</h1>
      <p>登入者：{user.email}</p>

      {role === "employee" && (
        <>
          <LeaveForm user={user} />
          <LeaveList user={user} />
        </>
      )}

      {role === "manager" && <ApproveList />}

      <Calendar />
      <Dashboard />

      <button
        onClick={() => auth.signOut().then(() => setUser(null))}
        style={{ marginTop: 20 }}
      >
        登出
      </button>
    </div>
  );
}

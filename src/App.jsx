import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

import Layout from "./components/Layout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import LeaveList from "./components/LeaveList";
import LeaveForm from "./components/LeaveForm";

export default function App() {
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState("cycle");
  const [loading, setLoading] = useState(true);

  // ⭐ Firebase 自動登入維持
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!user) return <Login onLogin={setUser} />;

  // ⭐ Tab 對應的頁面
  const pages = {
    cycle: <Dashboard />,
    list: <LeaveList user={user} />,
    form: <LeaveForm user={user} />,
  };

  // ⭐ Tab 對應的標題
  const titles = {
    cycle: "大循環",
    list: "請假名單",
    form: "申請",
  };

  const logout = () => signOut(auth);

  return (
    <Layout
      title={titles[tab]}
      tab={tab}
      setTab={setTab}
      user={user}
      onLogout={logout}
    >
      {pages[tab]}
    </Layout>
  );
}

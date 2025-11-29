import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import Login from "./components/Login";
import Layout from "./components/Layout";

import Dashboard from "./components/Dashboard";
import LeaveList from "./components/LeaveList";
import LeaveForm from "./components/LeaveForm";

export default function App() {
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState("cycle");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!user) return <Login onLogin={setUser} />;

  const pages = {
    cycle: <Dashboard />,
    list: <LeaveList user={user} />,
    form: <LeaveForm user={user} />,
  };

  const titles = {
    cycle: "大循環",
    list: "請假名單",
    form: "申請",
  };

  return (
    <Layout title={titles[tab]} tab={tab} setTab={setTab}>
      {pages[tab]}
    </Layout>
  );
}

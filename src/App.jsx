import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

import Layout from "./components/Layout";   // ⭐ 必須加這行
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import LeaveList from "./components/LeaveList";
import LeaveForm from "./components/LeaveForm";


export default function App() {
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

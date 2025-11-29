import { useState } from "react";
import TopBar from "./TopBar";
import BottomTabs from "./BottomTabs";
import DrawerMenu from "./DrawerMenu";

export default function Layout({ title, tab, setTab, user, onLogout, children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#F4F5F7",
      }}
    >
      <TopBar title={title} onMenuClick={() => setDrawerOpen(true)} />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {children}
      </div>

      <BottomTabs tab={tab} setTab={setTab} />

      <DrawerMenu
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        user={user}
        setTab={setTab}
        onLogout={onLogout}
      />
    </div>
  );
}

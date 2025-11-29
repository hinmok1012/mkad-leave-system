import React, { useState } from "react";
import TopBar from "./TopBar";
import BottomTabs from "./BottomTabs";
import DrawerMenu from "./DrawerMenu";

export default function Layout({
  title,
  tab,
  setTab,
  user,
  onLogout,
  children,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#F4F5F7",
      }}
    >
      <TopBar
        title={title}
        onMenuClick={() => setDrawerOpen(true)}
        onSearch={setSearchKeyword}
      />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {children && searchKeyword
          ? React.cloneElement(children, { searchKeyword })
          : children}
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

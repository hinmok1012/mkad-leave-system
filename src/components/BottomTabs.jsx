export default function BottomTabs({ tab, setTab }) {
  const tabStyle = (isActive) => ({
    textAlign: "center",
    flex: 1,
    padding: "6px 0",
    color: isActive ? "black" : "#444",
    fontWeight: isActive ? "bold" : "normal",
    background: "#FFA500",
    cursor: "pointer",
  });

  return (
    <div
      style={{
        height: 55,
        display: "flex",
        background: "#FFA500",
        borderTop: "1px solid #ddd",
      }}
    >
      <div style={tabStyle(tab === "cycle")} onClick={() => setTab("cycle")}>
        <div style={{ fontSize: 20 }}>📅</div>
        <div style={{ fontSize: 12 }}>大循環</div>
      </div>

      <div style={tabStyle(tab === "list")} onClick={() => setTab("list")}>
        <div style={{ fontSize: 20 }}>📋</div>
        <div style={{ fontSize: 12 }}>請假名單</div>
      </div>

      <div style={tabStyle(tab === "form")} onClick={() => setTab("form")}>
        <div style={{ fontSize: 20 }}>✉️</div>
        <div style={{ fontSize: 12 }}>申請</div>
      </div>
    </div>
  );
}

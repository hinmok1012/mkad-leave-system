export default function BottomTabs({ tab, setTab }) {
  const tabStyle = (isActive) => ({
    flex: 1,
    textAlign: "center",
    padding: "6px 0",
    cursor: "pointer",
    background: "#FFA500",
    color: isActive ? "black" : "#555",
    fontWeight: isActive ? "bold" : "normal",
    borderTop: isActive ? "3px solid black" : "3px solid transparent",
  });

  const iconStyle = (isActive) => ({
    fontSize: 20,
    opacity: isActive ? 1 : 0.6,
  });

  return (
    <div
      style={{
        height: 55,
        display: "flex",
        borderTop: "1px solid #ddd",
        background: "#FFA500",
      }}
    >
      {/* 大循環 */}
      <div style={tabStyle(tab === "cycle")} onClick={() => setTab("cycle")}>
        <div style={iconStyle(tab === "cycle")}>📅</div>
        <div style={{ fontSize: 12 }}>大循環</div>
      </div>

      {/* 請假名單 */}
      <div style={tabStyle(tab === "list")} onClick={() => setTab("list")}>
        <div style={iconStyle(tab === "list")}>📋</div>
        <div style={{ fontSize: 12 }}>請假名單</div>
      </div>

      {/* 申請 */}
      <div style={tabStyle(tab === "form")} onClick={() => setTab("form")}>
        <div style={iconStyle(tab === "form")}>✉️</div>
        <div style={{ fontSize: 12 }}>申請</div>
      </div>
    </div>
  );
}

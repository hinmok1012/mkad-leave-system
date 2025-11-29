export default function TopBar({ title, onMenuClick }) {
  return (
    <div
      style={{
        height: 55,
        background: "#FFA500",
        display: "flex",
        alignItems: "center",
        padding: "0 15px",
        justifyContent: "space-between",
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
      }}
    >
      <div
        style={{ fontSize: 22, cursor: "pointer" }}
        onClick={onMenuClick}
      >
        ☰
      </div>

      <div>{title}</div>

      <div style={{ display: "flex", gap: 15, fontSize: 20 }}>
        <div style={{ cursor: "pointer" }}>🔍</div>
        <div style={{ cursor: "pointer" }}>🔄</div>
      </div>
    </div>
  );
}

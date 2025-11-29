export default function DrawerMenu({ open, onClose, user, setTab, onLogout }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: open ? "block" : "none",
        zIndex: 999,
      }}
    >
      {/* 背景遮罩 */}
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.4)",
        }}
      />

      {/* Drawer Panel */}
      <div
        style={{
          width: 260,
          height: "100vh",
          background: "white",
          padding: 20,
          position: "absolute",
          top: 0,
          left: 0,
          boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <h3>使用者</h3>
        <div style={{ marginBottom: 10 }}>{user.email}</div>

        <h3>導航</h3>

        <div
          onClick={() => {
            setTab("cycle");
            onClose();
          }}
          style={{ padding: "10px 0", cursor: "pointer" }}
        >
          📅 大循環
        </div>

        <div
          onClick={() => {
            setTab("list");
            onClose();
          }}
          style={{ padding: "10px 0", cursor: "pointer" }}
        >
          📋 請假名單
        </div>

        <div
          onClick={() => {
            setTab("form");
            onClose();
          }}
          style={{ padding: "10px 0", cursor: "pointer" }}
        >
          ✉️ 申請
        </div>

        <hr />

        <div
          onClick={onLogout}
          style={{
            padding: "10px 0",
            cursor: "pointer",
            color: "red",
            fontWeight: "bold",
          }}
        >
          🔓 登出
        </div>
      </div>
    </div>
  );
}

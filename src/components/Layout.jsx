import TopBar from "./TopBar";
import BottomTabs from "./BottomTabs";

export default function Layout({ title, tab, setTab, children }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#F4F5F7",
      }}
    >
      <TopBar title={title} />

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
    </div>
  );
}

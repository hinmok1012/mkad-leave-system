import { useState } from "react";

export default function TopBar({ title, onMenuClick, onSearch }) {
  const [searchMode, setSearchMode] = useState(false);
  const [keyword, setKeyword] = useState("");

  const toggleSearch = () => {
    if (searchMode) {
      setKeyword("");
      onSearch("");
    }
    setSearchMode(!searchMode);
  };

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
      {/* Menu */}
      <div style={{ cursor: "pointer" }} onClick={onMenuClick}>
        ☰
      </div>

      {/* Title OR Search Input */}
      {searchMode ? (
        <input
          autoFocus
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            onSearch(e.target.value);
          }}
          placeholder="搜尋..."
          style={{
            flex: 1,
            marginLeft: 10,
            marginRight: 10,
            padding: "6px 10px",
            borderRadius: 10,
            border: "none",
            outline: "none",
            fontSize: 16,
          }}
        />
      ) : (
        <div>{title}</div>
      )}

      {/* Search / Close Icons */}
      <div style={{ display: "flex", gap: 15 }}>
        <div style={{ cursor: "pointer" }} onClick={toggleSearch}>
          {searchMode ? "✖" : "🔍"}
        </div>

        <div style={{ cursor: "pointer" }}>🔄</div>
      </div>
    </div>
  );
}

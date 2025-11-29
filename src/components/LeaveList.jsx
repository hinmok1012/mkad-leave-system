import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function LeaveList({ user, searchKeyword = "" }) {
  const [leaves, setLeaves] = useState([]);

  // ⭐ 從 Firestore 讀取請假紀錄
  useEffect(() => {
    const q = query(
      collection(db, "leaves"),
      where("user", "==", user.email)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setLeaves(list);
    });

    return () => unsub();
  }, [user.email]);

  // ⭐ 搜尋過濾邏輯
 const filtered = leaves.filter((item) => {
  const lower = searchKeyword.toLowerCase();

  // date 是字串 → 直接用
  const dateStr = (item.date || "").toLowerCase();

  // createdAt 是 Timestamp → 轉 YYYY-MM-DD
  const createdAtStr = item.createdAt?.toDate
    ? item.createdAt.toDate().toISOString().substring(0, 10)
    : "";

  return (
    (item.type || "").toLowerCase().includes(lower) ||
    (item.status || "").toLowerCase().includes(lower) ||
    (item.name || "").toLowerCase().includes(lower) ||
    dateStr.includes(lower) ||
    createdAtStr.includes(lower)
  );
});


  return (
    <div>
      {filtered.length === 0 ? (
        <div style={{ opacity: 0.6 }}>沒有符合搜尋的資料</div>
      ) : (
        filtered.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "10px",
              marginBottom: "10px",
              background: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <div><b>類型：</b>{item.type}</div>
            <div><b>日期：</b>{item.date}</div>
            <div><b>狀態：</b>{item.status}</div>
          </div>
        ))
      )}
    </div>
  );
}

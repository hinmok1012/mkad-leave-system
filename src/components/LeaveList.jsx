import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export default function LeaveList({ user }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "leaves"),
      where("name", "==", user.email),
      orderBy("createdAt", "desc")
    );

    return onSnapshot(q, (snap) =>
      setLeaves(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
  }, [user]);

  return (
    <div>
      <h3>我的申請</h3>
      {leaves.map((l) => (
        <div key={l.id}>
          {l.date} — {l.type} — {l.status}
        </div>
      ))}
    </div>
  );
}

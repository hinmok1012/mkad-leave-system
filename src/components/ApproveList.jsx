import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  orderBy,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

export default function ApproveList() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "leaves"),
      where("status", "==", "Pending"),
      orderBy("createdAt", "asc")
    );

    return onSnapshot(q, (snap) =>
      setLeaves(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
  }, []);

  const approve = (id) =>
    updateDoc(doc(db, "leaves", id), { status: "Approved" });

  const reject = (id) =>
    updateDoc(doc(db, "leaves", id), { status: "Rejected" });

  return (
    <div>
      <h3>待審批</h3>
      {leaves.map((l) => (
        <div key={l.id}>
          {l.name} — {l.date} — {l.type}
          <button onClick={() => approve(l.id)}>核准</button>
          <button onClick={() => reject(l.id)}>拒絕</button>
        </div>
      ))}
    </div>
  );
}

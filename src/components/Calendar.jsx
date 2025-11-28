import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function Calendar() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    return onSnapshot(collection(db, "leaves"), (snap) =>
      setLeaves(snap.docs.map((d) => d.data()))
    );
  }, []);

  return (
    <div>
      <h3>月曆（簡易版）</h3>
      {leaves.map((l, i) => (
        <div key={i}>
          {l.date} — {l.type} — {l.name}
        </div>
      ))}
    </div>
  );
}

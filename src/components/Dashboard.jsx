import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    return onSnapshot(collection(db, "leaves"), (snap) => {
      const count = {};
      snap.docs.forEach((d) => {
        const t = d.data().type;
        count[t] = (count[t] || 0) + 1;
      });
      setStats(count);
    });
  }, []);

  return (
    <div>
      <h3>統計</h3>
      {Object.entries(stats).map(([t, n]) => (
        <div key={t}>
          {t}: {n}
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function LeaveForm({ user }) {
  const [type, setType] = useState("VL");
  const [date, setDate] = useState("");

  const submitLeave = async () => {
    if (!date) return alert("請選擇日期");

    await addDoc(collection(db, "leaves"), {
      name: user.email,
      type,
      date,
      status: "Pending",
      createdAt: serverTimestamp(),
    });

    alert("已送出！");
    setDate("");
    setType("VL");
  };

  return (
    <div>
      <h3>假期申請</h3>

      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        {["VL", "CL", "ROTA", "SL", "AA", "ASVL", "SD", "Course", "Other"].map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <button onClick={submitLeave}>送出</button>
    </div>
  );
}

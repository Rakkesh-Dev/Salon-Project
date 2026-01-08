import React, { useState } from "react";

export default function DailyExpense() {
  const [rows, setRows] = useState([
    { type: "Expense", desc: "", staff: "", amount: "" }
  ]);

  const update = (i, key, value) => {
    const copy = [...rows];
    copy[i][key] = value;
    setRows(copy);
  };

  const addRow = () =>
    setRows([...rows, { type: "Expense", desc: "", staff: "", amount: "" }]);

  const income = rows.filter(r => r.type === "Income").reduce((s, r) => s + Number(r.amount || 0), 0);
  const expense = rows.filter(r => r.type === "Expense").reduce((s, r) => s + Number(r.amount || 0), 0);

  return (
    <div>
      <h1>Daily Expense</h1>

      {rows.map((r, i) => (
        <div key={i} className="row">
          <select onChange={e => update(i, "type", e.target.value)}>
            <option>Expense</option>
            <option>Income</option>
          </select>
          <input placeholder="Description" onChange={e => update(i, "desc", e.target.value)} />
          <input placeholder="Staff" onChange={e => update(i, "staff", e.target.value)} />
          <input placeholder="Amount" onChange={e => update(i, "amount", e.target.value)} />
        </div>
      ))}

      <button onClick={addRow}>+ Add Row</button>

      <div style={{ marginTop: 16 }}>
        <strong>Income:</strong> ₹{income} &nbsp;&nbsp;
        <strong>Expense:</strong> ₹{expense}
      </div>
    </div>
  );
}

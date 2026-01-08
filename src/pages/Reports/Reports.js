import React, { useState } from "react";
import { reportsData } from "../../data/mockData";

export default function Reports() {
  const [type, setType] = useState("Sales List");

  return (
    <div>
      <h1>Reports</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <select onChange={e => setType(e.target.value)}>
          <option>Sales List</option>
          <option>Service Sales</option>
          <option>Product Sales</option>
          <option>Staff Sales</option>
          <option>Combined</option>
          <option>Daily Expense</option>
        </select>

        <select>
          <option>Today</option>
          <option>Yesterday</option>
          <option>Last 7 Days</option>
          <option>Current Month</option>
          <option>Last Month</option>
        </select>

        <button>PDF</button>
        <button>Excel</button>
      </div>

      <div className="card-grid">
        <div className="card"><div className="card-title">Total Bills</div><div className="card-value">42</div></div>
        <div className="card"><div className="card-title">Total Clients</div><div className="card-value">38</div></div>
        <div className="card"><div className="card-title">Total Value</div><div className="card-value">₹32,500</div></div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Bill ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Payment</th>
            <th>Net</th>
            <th>Gross</th>
          </tr>
        </thead>
        <tbody>
          {reportsData.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.date}</td>
              <td>{r.customer}</td>
              <td>{r.mode}</td>
              <td>₹{r.net}</td>
              <td>₹{r.gross}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

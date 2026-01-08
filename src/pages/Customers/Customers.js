import React from "react";
import { customers } from "../../data/mockData";

export default function Customers() {
  return (
    <div>
      <h1>Customers</h1>

      <div className="card-grid">
        <div className="card"><div className="card-title">Total Customers</div><div className="card-value">{customers.length}</div></div>
        <div className="card"><div className="card-title">New Customers</div><div className="card-value">6</div></div>
        <div className="card"><div className="card-title">High Value</div><div className="card-value">4</div></div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Visits</th>
            <th>Total Spend</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.mobile}</td>
              <td>{c.visits}</td>
              <td>₹{c.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

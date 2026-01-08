import React from "react";
import { dashboardMetrics, todaySchedule } from "../../data/mockData";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="card-grid">
        {dashboardMetrics.map(item => (
          <div key={item.label} className="card">
            <div className="card-title">{item.label}</div>
            <div className="card-value">{item.value}</div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "24px" }}>Today’s Schedule</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Service</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todaySchedule.map((row, index) => (
            <tr key={index}>
              <td>{row.customer}</td>
              <td>{row.service}</td>
              <td>{row.time}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

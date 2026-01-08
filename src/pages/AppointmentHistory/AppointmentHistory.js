import React from "react";
import { appointmentHistory } from "../../data/mockData";

export default function AppointmentHistory() {
  return (
    <div>
      <h1>Appointment History</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointmentHistory.map((a, i) => (
            <tr key={i}>
              <td>{a.customer}</td>
              <td>{a.service}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>₹{a.amount}</td>
              <td>{a.billed ? "Billed" : "Not Billed"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

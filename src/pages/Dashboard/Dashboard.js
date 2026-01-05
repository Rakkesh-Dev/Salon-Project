import { useState } from "react";
import "../../styles/dashboard.css";

export default function Dashboard() {
  const [viewType, setViewType] = useState("appointment");
  const [showBilled, setShowBilled] = useState(false);

  const kpis = [
    { label: "Total Bills", value: 42 },
    { label: "Total Revenue", value: "₹56,400" },
    { label: "Cash / Card / UPI", value: "₹18k / ₹22k / ₹16k" },
    { label: "Total Customers", value: 120 },
    { label: "New Customers", value: 8 },
    { label: "High Value Customers", value: 5 },
  ];

  const allAppointments = [
    {
      customer: "Ravi Kumar",
      service: "Haircut",
      time: "10:30 AM",
      status: "billed",
    },
    {
      customer: "Anita Sharma",
      service: "Facial",
      time: "12:00 PM",
      status: "pending",
    },
    {
      customer: "Arjun Singh",
      service: "Hair Spa",
      time: "03:00 PM",
      status: "pending",
    },
  ];

  const filteredAppointments = allAppointments.filter((item) => {
    if (!showBilled && item.status === "billed") {
      return false;
    }
    return true;
  });

  return (
    <div className="dashboard">
      {/* KPI CARDS */}
      <div className="kpi-grid">
        {kpis.map((item, index) => (
          <div className="kpi-card" key={index}>
            <h4>{item.label}</h4>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      {/* CONTROLS */}
      <div
        className="section"
        style={{ display: "flex", gap: "20px", alignItems: "center" }}
      >
        <select
          value={viewType}
          onChange={(e) => setViewType(e.target.value)}
        >
          <option value="appointment">Appointment / Billing</option>
          <option value="upcoming">Upcoming</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="checkbox"
            checked={showBilled}
            onChange={() => setShowBilled(!showBilled)}
          />
          View Billed Appointments
        </label>
      </div>

      {/* TODAY'S SCHEDULE */}
      <div className="section">
        <h3>Today's Schedule</h3>

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
            {filteredAppointments.map((item, index) => (
              <tr key={index}>
                <td>{item.customer}</td>
                <td>{item.service}</td>
                <td>{item.time}</td>
                <td>
                  <span className={`status ${item.status}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredAppointments.length === 0 && (
          <p style={{ marginTop: "10px", color: "#6b7280" }}>
            No appointments to show.
          </p>
        )}
      </div>
    </div>
  );
}

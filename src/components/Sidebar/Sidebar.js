import React, { useState } from "react";
import ConfirmLogoutModal from "../Modals/ConfirmLogoutModal";

const MENU = [
  { key: "Dashboard", label: "Dashboard" },
  { key: "MyStore", label: "My Store" },
  { key: "Inventory", label: "Inventory" },
  { key: "Reports", label: "Reports" },
  { key: "Customers", label: "Customers" },
  { key: "DailyExpense", label: "Daily Expense" },
  { key: "AppointmentHistory", label: "Appointment History" },
  { key: "MyAccount", label: "My Account" }
];

export default function Sidebar({ activePage, setActivePage, onLogout }) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-title">Salon Partner</div>

        {MENU.map(item => (
          <button
            key={item.key}
            className={
              activePage === item.key ? "nav-item active" : "nav-item"
            }
            onClick={() => setActivePage(item.key)}
          >
            {item.label}
          </button>
        ))}

        <div style={{ marginTop: "auto" }}>
          <button
            className="nav-item"
            style={{ color: "#ff4d00", fontWeight: 600 }}
            onClick={() => setShowConfirm(true)}
          >
            Sign Out
          </button>
        </div>
      </aside>

      {showConfirm && (
        <ConfirmLogoutModal
          onCancel={() => setShowConfirm(false)}
          onConfirm={onLogout}
        />
      )}
    </>
  );
}

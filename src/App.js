import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login/Login";

import Dashboard from "./pages/Dashboard/Dashboard";
import MyStore from "./pages/MyStore/MyStore";
import Inventory from "./pages/Inventory/Inventory";
import Reports from "./pages/Reports/Reports";
import Customers from "./pages/Customers/Customers";
import DailyExpense from "./pages/DailyExpense/DailyExpense";
import AppointmentHistory from "./pages/AppointmentHistory/AppointmentHistory";
import MyAccount from "./pages/MyAccount/MyAccount";

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [role, setRole] = useState(null); // null | partner | admin

  if (!role) {
    return <Login onLogin={setRole} />;
  }

  if (role === "admin") {
    return (
      <div style={{ padding: 40 }}>
        <h1>Super Admin Panel</h1>
        <p>Future scope: manage partners, subscriptions, analytics.</p>
        <button onClick={() => setRole(null)}>Logout</button>
      </div>
    );
  }

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;
      case "MyStore":
        return <MyStore />;
      case "Inventory":
        return <Inventory />;
      case "Reports":
        return <Reports />;
      case "Customers":
        return <Customers />;
      case "DailyExpense":
        return <DailyExpense />;
      case "AppointmentHistory":
        return <AppointmentHistory />;
      case "MyAccount":
        return <MyAccount />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <MainLayout 
      activePage={activePage}
      setActivePage={setActivePage}
      onLogout={() => setRole(null)}
    >
      {renderPage()}
    </MainLayout>
  );
}

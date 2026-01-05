export default function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        backgroundColor: "#1f2933",
        color: "#ffffff",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Salon Partner</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <span>Dashboard</span>
        <span>Billing</span>
        <span>Customers</span>
        <span>Appointments</span>
        <span>Inventory</span>
        <span>Reports</span>
        <span>My Account</span>
      </nav>
    </aside>
  );
}

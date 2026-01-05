export default function Topbar() {
  return (
    <header
      style={{
        height: "60px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <strong>Dashboard</strong>

      <div style={{ display: "flex", gap: "16px" }}>
        <span>WhatsApp</span>
        <span>Chat</span>
        <button>Add Bill</button>
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>
  );
}

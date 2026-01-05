import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

export default function MainLayout({ children }) {
  const [showBillModal, setShowBillModal] = useState(false);
  const [services, setServices] = useState([
    { service: "", staff: "", qty: 1, price: 0, gst: 0 },
  ]);

  const addServiceRow = () => {
    setServices([
      ...services,
      { service: "", staff: "", qty: 1, price: 0, gst: 0 },
    ]);
  };

  const removeServiceRow = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const updateService = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const calculateRowTotal = (row) => {
    const base = row.qty * row.price;
    return base + (base * row.gst) / 100;
  };

  const grandTotal = services.reduce(
    (sum, row) => sum + calculateRowTotal(row),
    0
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar onAddBill={() => setShowBillModal(true)} />

        <main style={{ padding: "20px" }}>{children}</main>

        {showBillModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Add Bill</h3>

              <input type="text" placeholder="Customer Name" />
              <input type="text" placeholder="Mobile Number" />

              <h4>Services</h4>

              {services.map((row, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 60px 80px 60px 80px auto",
                    gap: "6px",
                    marginBottom: "8px",
                    alignItems: "center",
                  }}
                >
                  <select
                    value={row.service}
                    onChange={(e) =>
                      updateService(index, "service", e.target.value)
                    }
                  >
                    <option value="">Service</option>
                    <option>Haircut</option>
                    <option>Facial</option>
                    <option>Hair Spa</option>
                  </select>

                  <select
                    value={row.staff}
                    onChange={(e) =>
                      updateService(index, "staff", e.target.value)
                    }
                  >
                    <option value="">Staff</option>
                    <option>Ramesh</option>
                    <option>Suresh</option>
                  </select>

                  <input
                    type="number"
                    min="1"
                    value={row.qty}
                    onChange={(e) =>
                      updateService(index, "qty", Number(e.target.value))
                    }
                  />

                  <input
                    type="number"
                    value={row.price}
                    onChange={(e) =>
                      updateService(index, "price", Number(e.target.value))
                    }
                  />

                  <input
                    type="number"
                    value={row.gst}
                    onChange={(e) =>
                      updateService(index, "gst", Number(e.target.value))
                    }
                  />

                  <strong>₹{calculateRowTotal(row)}</strong>

                  {services.length > 1 && (
                    <button onClick={() => removeServiceRow(index)}>✕</button>
                  )}
                </div>
              ))}

              <button onClick={addServiceRow}>+ Add Service</button>

              <h3 style={{ marginTop: "16px" }}>
                Grand Total: ₹{grandTotal}
              </h3>

              <div className="modal-actions">
                <button onClick={() => setShowBillModal(false)}>
                  Cancel
                </button>
                <button>Save Bill</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

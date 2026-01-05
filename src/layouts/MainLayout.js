import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

export default function MainLayout({ children }) {
  const [showBillModal, setShowBillModal] = useState(false);

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

              <select>
                <option>Select Service</option>
                <option>Haircut</option>
                <option>Facial</option>
                <option>Hair Spa</option>
              </select>

              <input type="number" placeholder="Total Amount" />

              <div className="modal-actions">
                <button onClick={() => setShowBillModal(false)}>
                  Cancel
                </button>
                <button>Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

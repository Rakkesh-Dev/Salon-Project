import React from "react";

export default function ConfirmLogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal" style={{ maxWidth: 420 }}>
        <h3>Confirm Logout</h3>

        <p style={{ marginTop: 8 }}>
          Are you sure you want to sign out?
        </p>

        <div className="modal-actions" style={{ marginTop: 20 }}>
          <button onClick={onCancel}>Cancel</button>
          <button className="btn-primary" onClick={onConfirm}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

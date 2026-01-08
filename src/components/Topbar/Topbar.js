import React, { useState } from "react";
import AddBillModal from "../Modals/AddBillModal";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <div className="topbar-actions">
          <button className="btn-primary" onClick={() => setOpen(true)}>
            Add Bill
          </button>
          <div className="avatar">P</div>
        </div>
      </header>

      {open && <AddBillModal onClose={() => setOpen(false)} />}
    </>
  );
}

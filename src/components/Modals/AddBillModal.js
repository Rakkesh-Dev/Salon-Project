import React, { useState, useEffect } from "react";

const emptyRow = {
  item: "",
  staff: "",
  qty: "",
  price: "",
  gst: "",
  total: 0
};

export default function AddBillModal({ onClose }) {
  const [customer, setCustomer] = useState({ name: "", mobile: "" });
  const [services, setServices] = useState([{ ...emptyRow }]);
  const [products, setProducts] = useState([{ ...emptyRow }]);

  const calculateRowTotal = row => {
    const qty = Number(row.qty) || 0;
    const price = Number(row.price) || 0;
    const gst = Number(row.gst) || 0;
    const base = qty * price;
    return base + (base * gst) / 100;
  };

  const updateRow = (type, index, field, value) => {
    const list = type === "services" ? [...services] : [...products];
    list[index][field] = value;
    list[index].total = calculateRowTotal(list[index]);
    type === "services" ? setServices(list) : setProducts(list);
  };

  const addRow = type => {
    type === "services"
      ? setServices([...services, { ...emptyRow }])
      : setProducts([...products, { ...emptyRow }]);
  };

  const removeRow = (type, index) => {
    const list = type === "services" ? [...services] : [...products];
    list.splice(index, 1);
    type === "services" ? setServices(list) : setProducts(list);
  };

  const sumTotal = list =>
    list.reduce((sum, r) => sum + (Number(r.total) || 0), 0);

  const serviceTotal = sumTotal(services);
  const productTotal = sumTotal(products);
  const grandTotal = serviceTotal + productTotal;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Bill</h2>

        <section>
          <h3>Customer</h3>
          <input
            placeholder="Customer Name"
            value={customer.name}
            onChange={e =>
              setCustomer({ ...customer, name: e.target.value })
            }
          />
          <input
            placeholder="Mobile Number"
            value={customer.mobile}
            onChange={e =>
              setCustomer({ ...customer, mobile: e.target.value })
            }
          />
        </section>

        <section>
          <h3>Services</h3>
          {services.map((row, i) => (
            <div key={i} className="row">
              <input placeholder="Service" onChange={e => updateRow("services", i, "item", e.target.value)} />
              <input placeholder="Staff" onChange={e => updateRow("services", i, "staff", e.target.value)} />
              <input placeholder="Qty" onChange={e => updateRow("services", i, "qty", e.target.value)} />
              <input placeholder="Price" onChange={e => updateRow("services", i, "price", e.target.value)} />
              <input placeholder="GST %" onChange={e => updateRow("services", i, "gst", e.target.value)} />
              <span>₹{row.total.toFixed(2)}</span>
              <button onClick={() => removeRow("services", i)}>✕</button>
            </div>
          ))}
          <button onClick={() => addRow("services")}>+ Add Service</button>
        </section>

        <section>
          <h3>Products</h3>
          {products.map((row, i) => (
            <div key={i} className="row">
              <input placeholder="Product" onChange={e => updateRow("products", i, "item", e.target.value)} />
              <input placeholder="Staff" onChange={e => updateRow("products", i, "staff", e.target.value)} />
              <input placeholder="Qty" onChange={e => updateRow("products", i, "qty", e.target.value)} />
              <input placeholder="Price" onChange={e => updateRow("products", i, "price", e.target.value)} />
              <input placeholder="GST %" onChange={e => updateRow("products", i, "gst", e.target.value)} />
              <span>₹{row.total.toFixed(2)}</span>
              <button onClick={() => removeRow("products", i)}>✕</button>
            </div>
          ))}
          <button onClick={() => addRow("products")}>+ Add Product</button>
        </section>

        <section className="totals">
          <div>Service Total: ₹{serviceTotal.toFixed(2)}</div>
          <div>Product Total: ₹{productTotal.toFixed(2)}</div>
          <div><strong>Grand Total: ₹{grandTotal.toFixed(2)}</strong></div>
        </section>

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button className="btn-primary">Save Bill</button>
        </div>
      </div>
    </div>
  );
}

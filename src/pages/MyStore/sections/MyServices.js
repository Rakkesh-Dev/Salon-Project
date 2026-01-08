import React, { useState, useEffect } from "react";

const CATEGORIES = ["Hair", "Skin", "Spa", "Makeup"];
const GRADES = ["Junior", "Senior", "Expert"];
const GENDERS = ["Male", "Female", "Unisex"];

const DEFAULT_SERVICES = [
  {
    id: 1,
    name: "Haircut",
    price: 300,
    durationMinutes: 30,
    gst: 18,
    category: "Hair",
    gender: "Unisex",
    grade: "Junior",
    active: true
  },
  {
    id: 2,
    name: "Facial",
    price: 800,
    durationMinutes: 60,
    gst: 18,
    category: "Skin",
    gender: "Unisex",
    grade: "Senior",
    active: true
  }
];

export default function MyServices() {
  // ✅ LOAD FROM localStorage (fallback to default)
  const [services, setServices] = useState(() => {
    const saved = localStorage.getItem("servicesList");
    return saved ? JSON.parse(saved) : DEFAULT_SERVICES;
  });

  // ✅ PERSIST TO localStorage
  useEffect(() => {
    localStorage.setItem("servicesList", JSON.stringify(services));
  }, [services]);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc"
  });

  const [form, setForm] = useState({
    name: "",
    price: "",
    hours: "",
    minutes: "",
    gst: "",
    category: "",
    gender: "",
    grade: ""
  });

  const handleSort = key => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedServices = [...services].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];

    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const addService = () => {
    if (!form.name || !form.price) return;

    setServices([
      ...services,
      {
        id: Date.now(),
        name: form.name,
        price: Number(form.price),
        durationMinutes:
          Number(form.hours || 0) * 60 + Number(form.minutes || 0),
        gst: Number(form.gst || 0),
        category: form.category,
        gender: form.gender,
        grade: form.grade,
        active: true
      }
    ]);

    setForm({
      name: "",
      price: "",
      hours: "",
      minutes: "",
      gst: "",
      category: "",
      gender: "",
      grade: ""
    });
  };

  const toggleStatus = id => {
    setServices(
      services.map(s =>
        s.id === id ? { ...s, active: !s.active } : s
      )
    );
  };

  const formatDuration = mins =>
    `${Math.floor(mins / 60)}h ${mins % 60}m`;

  return (
    <div className="card">
      <h3>My Services</h3>

      {/* ADD SERVICE */}
      <div className="form-row">
        <input
          placeholder="Service Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Hours"
          value={form.hours}
          onChange={e => setForm({ ...form, hours: e.target.value })}
        />
        <input
          type="number"
          placeholder="Minutes"
          value={form.minutes}
          onChange={e => setForm({ ...form, minutes: e.target.value })}
        />
        <select
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        >
          <option value="">Category</option>
          {CATEGORIES.map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <button className="btn-primary" onClick={addService}>
          Add Service
        </button>
      </div>

      {/* TABLE */}
      <table className="table" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("price")}>Price</th>
            <th onClick={() => handleSort("durationMinutes")}>Duration</th>
            <th onClick={() => handleSort("category")}>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedServices.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>₹{s.price}</td>
              <td>{formatDuration(s.durationMinutes)}</td>
              <td>{s.category}</td>
              <td>
                <button
                  onClick={() => toggleStatus(s.id)}
                  style={{
                    background: s.active ? "#ff4d00" : "#ccc",
                    color: "#fff",
                    border: "none",
                    padding: "4px 10px"
                  }}
                >
                  {s.active ? "Active" : "Inactive"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

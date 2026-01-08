import React, { useState, useEffect } from "react";

export default function StaffGrade() {
  const [grades, setGrades] = useState(() => {
    const saved = localStorage.getItem("staffGrades");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("staffGrades", JSON.stringify(grades));
  }, [grades]);

  const [form, setForm] = useState({ name:"", service:"", product:"" });

  const add = () => {
    if (!form.name) return;
    setGrades([...grades, {
      id: Date.now(),
      ...form,
      active: true
    }]);
    setForm({ name:"", service:"", product:"" });
  };

  return (
    <div className="card">
      <h3>Staff Grade</h3>

      <div className="form-row">
        <input placeholder="Grade" value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Service %" value={form.service}
          onChange={e => setForm({ ...form, service: e.target.value })} />
        <input placeholder="Product %" value={form.product}
          onChange={e => setForm({ ...form, product: e.target.value })} />
        <button className="btn-primary" onClick={add}>Add</button>
      </div>

      <table className="table">
        <tbody>
          {grades.map(g => (
            <tr key={g.id}>
              <td>{g.name}</td>
              <td>{g.service}%</td>
              <td>{g.product}%</td>
              <td>
                <button onClick={() =>
                  setGrades(grades.map(x => x.id === g.id ? { ...x, active: !x.active } : x))
                }>
                  {g.active ? "Active" : "Inactive"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

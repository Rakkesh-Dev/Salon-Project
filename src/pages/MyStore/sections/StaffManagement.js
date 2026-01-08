import React, { useState, useEffect } from "react";

const GRADES = ["Junior", "Senior", "Expert"];

export default function StaffManagement() {
  const [staffList, setStaffList] = useState(() => {
    const saved = localStorage.getItem("staffList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("staffList", JSON.stringify(staffList));
  }, [staffList]);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    grade: "",
    gender: ""
  });

  const addStaff = () => {
    if (!form.name || !form.mobile || !form.grade) return;

    setStaffList([
      ...staffList,
      { id: Date.now(), ...form, active: true }
    ]);

    setForm({ name: "", mobile: "", grade: "", gender: "" });
  };

  return (
    <div className="card">
      <h3>Staff Management</h3>

      <div className="form-row">
        <input placeholder="Name" value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Mobile" value={form.mobile}
          onChange={e => setForm({ ...form, mobile: e.target.value })} />
        <select value={form.grade}
          onChange={e => setForm({ ...form, grade: e.target.value })}>
          <option value="">Grade</option>
          {GRADES.map(g => <option key={g}>{g}</option>)}
        </select>
        <select value={form.gender}
          onChange={e => setForm({ ...form, gender: e.target.value })}>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <button className="btn-primary" onClick={addStaff}>Add</button>
      </div>

      <table className="table">
        <tbody>
          {staffList.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.mobile}</td>
              <td>{s.grade}</td>
              <td>
                <button onClick={() =>
                  setStaffList(staffList.map(x =>
                    x.id === s.id ? { ...x, active: !x.active } : x
                  ))
                }>
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

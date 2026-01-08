import React, { useState, useEffect } from "react";

const STAFF = ["Ravi", "Anita", "Karthik", "Priya"];
const DAY_ORDER = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

export default function RosterManagement() {
  const [roster, setRoster] = useState(() => {
    const saved = localStorage.getItem("staffRoster");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("staffRoster", JSON.stringify(roster));
  }, [roster]);

  const [form, setForm] = useState({
    staff: "",
    day: "",
    start: "",
    end: ""
  });

  const addShift = () => {
    if (!form.staff || !form.day) return;
    setRoster([...roster, { id: Date.now(), ...form }]);
    setForm({ staff: "", day: "", start: "", end: "" });
  };

  const sortedRoster = [...roster].sort(
    (a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day)
  );

  return (
    <div className="card">
      <h3>Roster Management</h3>

      <div className="form-row">
        <select value={form.staff}
          onChange={e => setForm({ ...form, staff: e.target.value })}>
          <option value="">Staff</option>
          {STAFF.map(s => <option key={s}>{s}</option>)}
        </select>

        <select value={form.day}
          onChange={e => setForm({ ...form, day: e.target.value })}>
          <option value="">Day</option>
          {DAY_ORDER.map(d => <option key={d}>{d}</option>)}
        </select>

        <input type="time" value={form.start}
          onChange={e => setForm({ ...form, start: e.target.value })} />
        <input type="time" value={form.end}
          onChange={e => setForm({ ...form, end: e.target.value })} />

        <button className="btn-primary" onClick={addShift}>Add</button>
      </div>

      <table className="table">
        <tbody>
          {sortedRoster.map(r => (
            <tr key={r.id}>
              <td>{r.day}</td>
              <td>{r.staff}</td>
              <td>{r.start}</td>
              <td>{r.end}</td>
              <td>
                <button onClick={() =>
                  setRoster(roster.filter(x => x.id !== r.id))
                }>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

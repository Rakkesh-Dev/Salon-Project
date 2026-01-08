import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [role, setRole] = useState("partner");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!mobile || !password) return;
    onLogin(role);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Salon Login</h2>

        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="partner">Salon Owner / Partner</option>
          <option value="admin">Super Admin</option>
        </select>

        <input
          placeholder="Mobile Number"
          value={mobile}
          onChange={e => setMobile(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="btn-primary" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

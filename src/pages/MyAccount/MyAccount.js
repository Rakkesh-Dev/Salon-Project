import React from "react";

export default function MyAccount() {
  return (
    <div>
      <h1>My Account</h1>

      <h3>Profile</h3>
      <div className="row">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Mobile" />
      </div>

      <h3>Salon Settings</h3>
      <div className="row">
        <input placeholder="Salon Name" />
        <input placeholder="GST Number" />
        <input placeholder="GST %" />
      </div>

      <h3>Change Password</h3>
      <div className="row">
        <input placeholder="New Password" type="password" />
        <input placeholder="Confirm Password" type="password" />
      </div>

      <button className="btn-primary">Save Changes</button>
    </div>
  );
}

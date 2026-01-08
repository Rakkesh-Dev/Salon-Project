import React, { useState } from "react";
import CalendarSettings from "./sections/CalendarSettings";
import StaffGrade from "./sections/StaffGrade";
import StaffManagement from "./sections/StaffManagement";
import RosterManagement from "./sections/RosterManagement";
import MyServices from "./sections/MyServices";

const TABS = [
  { key: "calendar", label: "Calendar Settings" },
  { key: "grade", label: "Staff Grade" },
  { key: "staff", label: "Staff Management" },
  { key: "roster", label: "Roster Management" },
  { key: "services", label: "My Services" }
];

export default function MyStore() {
  const [activeTab, setActiveTab] = useState("calendar");

  const renderTab = () => {
    switch (activeTab) {
      case "calendar":
        return <CalendarSettings />;
      case "grade":
        return <StaffGrade />;
      case "staff":
        return <StaffManagement />;
      case "roster":
        return <RosterManagement />;
      case "services":
        return <MyServices />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>My Store</h2>

      <div className="tab-bar">
        {TABS.map(tab => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        {renderTab()}
      </div>
    </div>
  );
}

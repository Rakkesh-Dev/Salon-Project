import React, { useState, useEffect } from "react";

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

export default function CalendarSettings() {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("calendarSettings");
    return saved
      ? JSON.parse(saved)
      : {
          workingDays: DAYS.slice(0, 5),
          openTime: "09:00",
          closeTime: "21:00",
          slotDuration: 30,
          allowAppointments: true,
          allowWalkins: true
        };
  });

  useEffect(() => {
    localStorage.setItem("calendarSettings", JSON.stringify(settings));
  }, [settings]);

  const toggleDay = day => {
    setSettings(s => ({
      ...s,
      workingDays: s.workingDays.includes(day)
        ? s.workingDays.filter(d => d !== day)
        : [...s.workingDays, day]
    }));
  };

  return (
    <div className="card">
      <h3>Calendar Settings</h3>

      {/* WORKING DAYS */}
      <div className="form-group">
        <label>Working Days</label>
        <div className="form-row">
          {DAYS.map(day => (
            <button
              key={day}
              type="button"
              onClick={() => toggleDay(day)}
              className="btn-outline"
              style={{
                background: settings.workingDays.includes(day)
                  ? "#ff4d00"
                  : "#fff",
                color: settings.workingDays.includes(day)
                  ? "#fff"
                  : "#000"
              }}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      {/* TIME */}
      <div className="form-row">
        <div className="form-group">
          <label>Opening Time</label>
          <input
            type="time"
            value={settings.openTime}
            onChange={e =>
              setSettings({ ...settings, openTime: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Closing Time</label>
          <input
            type="time"
            value={settings.closeTime}
            onChange={e =>
              setSettings({ ...settings, closeTime: e.target.value })
            }
          />
        </div>
      </div>

      {/* SLOT */}
      <div className="form-group">
        <label>Slot Duration</label>
        <select
          value={settings.slotDuration}
          onChange={e =>
            setSettings({
              ...settings,
              slotDuration: Number(e.target.value)
            })
          }
        >
          <option value={15}>15 mins</option>
          <option value={30}>30 mins</option>
          <option value={45}>45 mins</option>
          <option value={60}>60 mins</option>
        </select>
      </div>

      {/* TOGGLES */}
      <div className="form-row">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={settings.allowAppointments}
            onChange={() =>
              setSettings(s => ({
                ...s,
                allowAppointments: !s.allowAppointments
              }))
            }
          />
          Allow Appointments
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            checked={settings.allowWalkins}
            onChange={() =>
              setSettings(s => ({
                ...s,
                allowWalkins: !s.allowWalkins
              }))
            }
          />
          Allow Walk-ins
        </label>
      </div>
    </div>
  );
}

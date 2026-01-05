# Salon Partner Dashboard (Frontend)

## Overview
This project is a frontend dashboard for a salon partner (store owner / manager).
It allows the partner to monitor daily performance and manage billing and appointments.

This is built as part of an internship project using:
- React.js
- JavaScript
- HTML
- CSS

No external UI libraries are used.

---

## Features Implemented So Far

### 1. Application Layout
- Persistent sidebar for navigation
- Topbar with quick actions (WhatsApp, Chat, Add Bill, Notifications, Profile)
- Responsive layout suitable for desktop and tablet

### 2. Dashboard
- KPI cards:
  - Total Bills
  - Total Revenue
  - Payment mode split
  - Customer metrics
- Today's Schedule table
- Filters:
  - Appointment/Billing dropdown
  - Toggle to view billed appointments

### 3. Add Bill Flow
- Modal-based billing form
- Add/remove multiple service rows
- Each service row supports:
  - Service selection
  - Staff assignment
  - Quantity
  - Price
  - GST
  - Auto-calculated row total
- Auto-calculated grand total
- Clean state management using React hooks

---

## Technical Decisions
- Component-based layout architecture
- Local state management using `useState`
- Controlled form inputs
- Derived state for totals and filters
- CSS-based layout (no UI frameworks)

---

## Project Structure

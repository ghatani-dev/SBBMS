# React Native Project Blueprint

## Sikkim Blood Bank Management System (SBBMS)

## Purpose

This document defines the **complete frontend architecture blueprint** for the SBBMS demo application.

It translates the following documents into an implementation plan:

* Product Requirements Document
* Technical Setup Document
* Project Flowchart
* UI/UX Wireframe Specification

The goal is to ensure that developers can **build the demo quickly and consistently** without requiring backend APIs.

The application will operate entirely on **mock data**.

---

# 1. Application Architecture Overview

The SBBMS frontend will follow a **layered architecture**.

```
Presentation Layer
    ↓
Navigation Layer
    ↓
State Management Layer
    ↓
Service Layer (Mock APIs)
    ↓
Mock Data Layer (JSON)
```

### Responsibilities

Presentation Layer
Handles UI components and screens.

Navigation Layer
Controls routing and role-based navigation.

State Management Layer
Stores global application state.

Service Layer
Simulates backend APIs.

Mock Data Layer
Local JSON files acting as the database.

---

# 2. Folder Structure

```
sbbms/
 ├── src/
 │
 │   ├── assets/
 │   │     ├── images/
 │   │     ├── icons/
 │   │     └── fonts/
 │
 │   ├── components/
 │   │     ├── Button
 │   │     ├── Card
 │   │     ├── InputField
 │   │     ├── Dropdown
 │   │     ├── Modal
 │   │     ├── InventoryChart
 │   │     └── NotificationBanner
 │
 │   ├── screens/
 │   │     ├── Splash
 │   │     ├── Login
 │   │     ├── RoleSelection
 │   │
 │   │     ├── Donor/
 │   │     │     ├── DonorDashboard
 │   │     │     ├── DonationHistory
 │   │     │     └── NearbyRequests
 │   │
 │   │     ├── Receiver/
 │   │     │     ├── SearchBlood
 │   │     │     ├── SearchResults
 │   │     │     ├── RequestBlood
 │   │     │     └── EmergencyRequest
 │   │
 │   │     ├── Admin/
 │   │     │     ├── AdminDashboard
 │   │     │     ├── InventoryManagement
 │   │     │     ├── RequestManager
 │   │     │     └── DonorVerification
 │
 │   │     ├── Notifications
 │   │     └── Profile
 │
 │   ├── navigation/
 │   │     ├── RootNavigator
 │   │     ├── AuthNavigator
 │   │     ├── DonorNavigator
 │   │     ├── ReceiverNavigator
 │   │     └── AdminNavigator
 │
 │   ├── store/
 │   │     ├── AuthContext
 │   │     ├── InventoryContext
 │   │     └── RequestContext
 │
 │   ├── services/
 │   │     ├── donorService
 │   │     ├── inventoryService
 │   │     └── requestService
 │
 │   ├── mock/
 │   │     ├── donors.json
 │   │     ├── blood_inventory.json
 │   │     ├── requests.json
 │   │     ├── users.json
 │   │     └── notifications.json
 │
 │   ├── theme/
 │   │     ├── colors
 │   │     ├── typography
 │   │     └── spacing
 │
 │   └── utils/
 │         ├── constants
 │         ├── helpers
 │         └── validators
 │
 ├── App.js
 └── package.json
```

---

# 3. Screen Implementation Plan

Below is the **screen implementation checklist**.

## Authentication Screens

1. Splash Screen
2. Login Screen
3. Role Selection

---

## Donor Screens

1. Donor Dashboard
2. Donation History
3. Nearby Emergency Requests
4. Profile

Features:

* Accept emergency requests
* Toggle availability
* View donation history

---

## Receiver Screens

1. Search Blood
2. Search Results
3. Request Blood
4. Emergency Request
5. Request Status

Features:

* Filter by blood group
* Search hospitals
* Submit request
* Track request status

---

## Admin Screens

1. Admin Dashboard
2. Inventory Management
3. Request Manager
4. Donor Verification

Features:

* View blood inventory
* Approve requests
* Trigger emergency donor alerts
* Update stock

---

# 4. Navigation Blueprint

### Root Navigator

Controls:

* authentication state
* role-based routing

```
Splash
 ↓
Login
 ↓
RoleSelection
 ↓
RoleNavigator
```

---

### Donor Navigator

Bottom Tab Navigation

Tabs:

* Home
* Requests
* Notifications
* Profile

---

### Receiver Navigator

Tabs:

* Home
* Search Blood
* Requests
* Profile

---

### Admin Navigator

Tabs:

* Dashboard
* Inventory
* Requests
* Donors

---

# 5. Global State Management

State will be handled using **React Context**.

### Auth Context

Stores:

```
user
role
login
logout
```

---

### Inventory Context

Stores:

```
bloodStock
updateStock()
```

---

### Request Context

Stores:

```
requests
addRequest()
updateRequestStatus()
```

---

# 6. Mock Data Schema

### donors.json

```
{
  id,
  name,
  bloodGroup,
  district,
  available,
  lastDonationDate
}
```

---

### blood_inventory.json

```
{
  hospital,
  district,
  bloodGroup,
  unitsAvailable
}
```

---

### requests.json

```
{
  requestId,
  patientName,
  bloodGroup,
  hospital,
  unitsRequired,
  status
}
```

---

### users.json

```
{
  phone,
  role
}
```

---

# 7. Mock API Design

Each service should simulate backend calls.

Example:

```
donorService.getDonors()

inventoryService.getStock()

requestService.createRequest()
```

Each service should simulate latency:

```
setTimeout(() => resolve(data), 500)
```

---

# 8. Demo Simulation Logic

To make the demo interactive:

### Request Simulation

Receiver submits request → status becomes "Pending".

Admin approves request → inventory decreases.

---

### Emergency Alert Simulation

Emergency request submitted.

After 5 seconds:

Notification banner appears for donors.

---

### Inventory Update

Admin approves donation.

Inventory chart updates instantly.

---

# 9. UI Component Library

Reusable components include:

Button
Card
InventoryChart
InputField
Dropdown
NotificationBanner
ModalDialog
ToggleSwitch

---

# 10. Error and Empty States

Examples:

No blood available.

Message:

```
"No units available nearby. Try emergency donor request."
```

---

# 11. Demo Mode Configuration

Add flag:

```
const DEMO_MODE = true
```

When false → backend APIs will replace mock services.

---

# 12. Development Milestones

### Phase 1

Project setup
Navigation setup
Theme configuration

---

### Phase 2

Authentication screens
Donor screens

---

### Phase 3

Receiver flows
Blood search

---

### Phase 4

Admin dashboard
Inventory charts

---

### Phase 5

Emergency simulation
Notification system

---

# 13. Demo Readiness Checklist

Before presenting to client:

* All screens functional
* Navigation working
* Inventory charts visible
* Emergency simulation working
* Mock data realistic
* No console errors

---

# End of Document

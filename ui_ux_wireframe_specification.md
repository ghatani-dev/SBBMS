# UI/UX Wireframe Specification

## Sikkim Blood Bank Management System (SBBMS)

## Document Purpose

This document defines the **screen structure, layout hierarchy, navigation flow, and UI components** for the SBBMS mobile application prototype.

The wireframes are intended for:

• UI designers
• React Native developers
• Product stakeholders

The prototype will use **mock data only**.

---

# 1. Design Principles

### 1.1 Simplicity

The application must be easy to use for:

* donors
* hospital staff
* patient attendants

### 1.2 Emergency First

Emergency actions such as **blood search and donor requests** should be immediately visible.

### 1.3 Trust & Transparency

Users should feel confident that the system is **government verified**.

### 1.4 Accessibility

Design must support:

* large buttons
* readable typography
* minimal cognitive load

---

# 2. Design System

## Color Palette

Primary
Red #C62828 (Blood / emergency)

Secondary
White #FFFFFF

Accent
Dark Grey #333333

Success
Green #2E7D32

Warning
Orange #F57C00

Background
Light Grey #F5F5F5

---

## Typography

Heading
Roboto Bold

Subheading
Roboto Medium

Body
Roboto Regular

Button
Roboto Medium

---

## Component Library

The standard reusable UI components required for the SBBMS application:

1. **Button:** Primary, Secondary, Outline, Danger (Emergency).
2. **Card:** Blood Inventory Card, Donor Profile Card, Blood Request Card.
3. **InputField:** Standard Text Input, Password Input (Secure).
4. **Dropdown:** Standard Select (for Blood Group, Location, Hospital).
5. **ToggleSwitch:** Donor Availability Toggle (Online/Offline).
6. **NotificationBanner:** In-app Push Alerts, Emergency Notifications.
7. **ModalDialog:** Confirmations (Confirm Donation, Verify Request).
8. **ChartCard:** Data visualizer for the Admin Inventory dashboard.
9. **Status Indicators:** Pills/Badges for request status (Pending, Approved, Rejected).

---

## UI States

### 1. Empty States
Every list view must have a friendly fallback state when no data exists.
* **No Blood Available:** "No units available nearby. Try an emergency donor request."
* **No Requests:** "There are currently no active blood requests."
* **No History:** "You haven't made any donations yet. Your journey to save lives starts here!"

### 2. Loading States
To simulate backend fetch delays gracefully:
* **Inventory Loading:** Skeleton loader across chart layout.
* **Donor Search Loading:** Spinner with text "Finding matching donors near you..."
* **Request Submission Loading:** Overlay loader with text "Submitting request..."

### 3. Error States
Provide actionable feedback for failed actions:
* **Invalid Request Form:** "Please fill in all required patient details."
* **Network Failure (Simulation):** "Unable to connect to the server. Please check your connection."
* **Location Unavailable:** "We need your location to find nearby donors. Please enable GPS."

---

# 3. App Navigation Structure

Main navigation will use **Bottom Tab Navigation**.

Tabs:

1. Home
2. Search Blood
3. Requests
4. Donor Network
5. Profile

---

# 4. Screen Specifications

---

# 4.1 Splash Screen

### Purpose

Brand introduction.

### Elements

Logo
App Name
Government Tagline

### Layout

```text
--------------------------------
|                              |
|          LOGO                |
|                              |
|  Sikkim Blood Bank           |
|  Management System           |
|                              |
|  Powered by Govt of Sikkim   |
|                              |
--------------------------------
```

---

# 4.2 Login Screen

### Purpose

Authenticate users.

### Elements

Phone Number Input
OTP Verification Button
Login Button

### Layout

```text
--------------------------------
|  Welcome to SBBMS            |
|                              |
| Phone Number [___________]   |
|                              |
| Send OTP Button              |
|                              |
| Enter OTP [______]           |
|                              |
| Login                        |
--------------------------------
```

---

# 4.3 User Type Selection

### Purpose

Choose user role.

### Options

Donor
Receiver
Blood Bank Staff

### Layout

```text
--------------------------------
| Select Role                  |
|                              |
| [ Donate Blood ]             |
|                              |
| [ Need Blood ]               |
|                              |
| [ Blood Bank Staff ]         |
--------------------------------
```

---

# 4.4 Home Dashboard

### Purpose

Central hub.

### Sections

Quick Actions
Blood Inventory Summary
Emergency Request Banner
Recent Notifications

### Layout

```text
--------------------------------
| Good Morning, User           |
|                              |
| [Search Blood] [Donate]      |
|                              |
| Emergency Request Button     |
|                              |
| Nearby Blood Banks           |
|                              |
| Blood Inventory Summary      |
|                              |
| Notifications                |
--------------------------------
```

---

# 4.5 Blood Availability Search

### Purpose

Search blood stock.

### Inputs

Blood Group
District
Hospital

### Layout

```text
--------------------------------
| Search Blood                 |
|                              |
| Blood Group Dropdown         |
|                              |
| District Dropdown            |
|                              |
| Hospital Dropdown            |
|                              |
| Search Button                |
--------------------------------
```

---

# 4.6 Blood Search Results

### Purpose

Show available blood.

### Card Layout

Each hospital appears as a card.

```text
--------------------------------
| Hospital Name                |
| Location                     |
|                              |
| Blood Group: O+              |
| Units Available: 12          |
|                              |
| [Request Blood]              |
--------------------------------
```

---

# 4.7 Blood Request Screen

### Purpose

Submit blood request.

### Inputs

Patient Name
Blood Group
Units Required
Hospital
Upload Prescription

### Layout

```text
--------------------------------
| Request Blood                |
|                              |
| Patient Name                 |
| Blood Group                  |
| Units Required               |
| Hospital                     |
| Upload Prescription          |
|                              |
| Submit Request               |
--------------------------------
```

---

# 4.8 Emergency Donor Request

### Purpose

Request donors nearby.

### Elements

Blood Group
Units Required
Hospital Location
Urgency Level

### Layout

```text
--------------------------------
| Emergency Donor Request      |
|                              |
| Blood Group                  |
| Units Required               |
| Location                     |
| Urgency Level                |
|                              |
| Send Emergency Alert         |
--------------------------------
```

---

# 4.9 Donor Dashboard

### Purpose

Main screen for donors.

### Sections

Donation Status
Nearby Requests
Next Eligible Donation Date

### Layout

```text
--------------------------------
| Donor Dashboard              |
|                              |
| Blood Group: O+              |
|                              |
| Last Donation: Jan 2026      |
| Eligible Again: April 2026   |
|                              |
| Nearby Requests              |
|                              |
| [Accept Request]             |
--------------------------------
```

---

# 4.10 Donation History

### Purpose

Track past donations.

### Layout

```text
--------------------------------
| Donation History             |
|                              |
| Donation ID                  |
| Date                         |
| Hospital                     |
| Status                       |
--------------------------------
```

---

# 4.11 Donor Network Screen

### Purpose

Show nearby donors.

### Elements

Donor card with:

Name
Blood Group
Distance
Availability

### Layout

```text
--------------------------------
| Donor Network                |
|                              |
| Donor Name                   |
| Blood Group: O+              |
| Distance: 3 km               |
|                              |
| [Request Donation]           |
--------------------------------
```

---

# 4.12 Notifications Screen

### Purpose

System alerts.

### Examples

Emergency requests
Donation reminders
Request approvals

### Layout

```text
--------------------------------
| Notifications                |
|                              |
| Emergency request near you   |
| Blood request approved       |
| Donation reminder            |
--------------------------------
```

---

# 4.13 Profile Screen

### Purpose

User profile management.

### Elements

Name
Blood Group
Phone
Address
Availability Toggle

### Layout

```text
--------------------------------
| Profile                      |
|                              |
| Name                         |
| Blood Group                  |
| Phone                        |
| Address                      |
|                              |
| Availability Toggle          |
|                              |
| Logout                       |
--------------------------------
```

---

# 5. Admin UI Screens

# 5.1 Admin Dashboard

### Purpose

High-level overview of the entire blood bank system.

### Elements

Total Stock Overview
Active Emergency Requests
Pending Tasks (Approvals needed)

### Layout

```text
--------------------------------
| Admin Dashboard              |
|                              |
| Total Blood Stock: 450 Units |
|                              |
| Critical Low Stock: O-, AB-  |
|                              |
| [View Inventory]             |
|                              |
| 3 Emg. Requests Active       |
| 12 Pending Verifications     |
--------------------------------
```

---

# 5.2 Inventory Management

### Purpose

Detailed view and simulated modification of blood stock.

### Elements

Bar Chart / Pie Chart of Current Stock
Data Table of Units by Blood Group

### Layout

```text
--------------------------------
| Inventory Management         |
|                              |
| [ PIE CHART VIZ ]            |
|                              |
| Table View:                  |
| O+: 120 Units                |
| A+: 85 Units                 |
| B+: 90 Units                 |
|                              |
| [Simulate Donation Update]   |
--------------------------------
```

---

# 5.3 Request Management

### Purpose

Review, approve, or reject incoming blood requests.

### Elements

List of Requests
Patient Name & Hospital
Requested Blood Group & Units
Status (Pending/Approved)

### Layout

```text
--------------------------------
| Request Management           |
|                              |
| Patient: Rahul S. (SNT Hosp) |
| Needs: 2 Units O+            |
| Status: PENDING              |
|                              |
| [Approve]  [Reject]          |
--------------------------------
```

---

# 5.4 Donor Verification

### Purpose

Admin process to verify donors after successful donation.

### Elements

Recent Donor List
Verify Donation Button

### Layout

```text
--------------------------------
| Donor Verifications          |
|                              |
| Donor: Arun T. (O+)          |
| Date: Today, 10:00 AM        |
|                              |
| [Verify & Add to Stock]      |
--------------------------------
```

---

# 6. Key Interaction Flows

### Donor Flow

Login
→ Dashboard
→ View emergency requests
→ Accept request
→ Visit blood bank
→ Donation recorded

---

### Receiver Flow

Login
→ Search blood
→ View results
→ Request blood
→ Upload documents

---

### Emergency Flow

Blood unavailable
→ Create emergency request
→ System alerts nearby donors
→ Donor accepts request

---

# 6. Responsive Considerations

The UI must support:

* Mobile phones
* Tablets
* Web responsive view

---

# 7. Demo Mode Features

Because this is a **frontend-only demo**, the app should simulate:

* blood availability updates
* donor responses
* request approvals

using **mock JSON data**.

---

# 8. Estimated Screens

Total screens in demo prototype:

14–18 screens.

---

# End of Document

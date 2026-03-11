# SBBMS Mock Data Schema

This document defines the structure of the local JSON fields that will be used to simulate a backend database for the SBBMS frontend demo.

Locate all mock data files in the `src/mock/` directory.

---

### 1. `users.json`
**Purpose:** Simulates user accounts for authentication and role-based routing.

```json
[
  {
    "id": "u1",
    "name": "Dr. Sharma",
    "phone": "9876543210",
    "role": "admin",
    "hospitalId": "h1"
  },
  {
    "id": "u2",
    "name": "Arun T.",
    "phone": "9988776655",
    "role": "donor",
    "donorId": "d1"
  },
  {
    "id": "u3",
    "name": "Priya",
    "phone": "8877665544",
    "role": "receiver"
  }
]
```

---

### 2. `donors.json`
**Purpose:** Simulates the registered donor database for the Donor Network search and Admin verification.

```json
[
  {
    "id": "d1",
    "userId": "u2",
    "name": "Arun T.",
    "bloodGroup": "O+",
    "location": {
      "latitude": 27.3389,
      "longitude": 88.6065,
      "address": "Gangtok, Sikkim"
    },
    "isAvailable": true,
    "lastDonationDate": "2023-11-15T10:00:00Z",
    "totalDonations": 4
  },
  {
    "id": "d2",
    "userId": "u4",
    "name": "Pema D.",
    "bloodGroup": "A-",
    "location": {
      "latitude": 27.2948,
      "longitude": 88.3615,
      "address": "Namchi, Sikkim"
    },
    "isAvailable": false,
    "lastDonationDate": "2024-01-10T14:30:00Z",
    "totalDonations": 1
  }
]
```

---

### 3. `inventory.json`
**Purpose:** Simulates current blood stock levels across different hospitals/blood banks.

```json
[
  {
    "hospitalId": "h1",
    "hospitalName": "STNM Hospital",
    "location": "Gangtok",
    "stock": {
      "O+": { "units": 120, "status": "critical" },
      "O-": { "units": 15, "status": "low" },
      "A+": { "units": 85, "status": "available" },
      "A-": { "units": 20, "status": "low" },
      "B+": { "units": 90, "status": "available" },
      "B-": { "units": 10, "status": "critical" },
      "AB+": { "units": 45, "status": "available" },
      "AB-": { "units": 5, "status": "critical" }
    },
    "lastUpdated": "2024-03-11T09:00:00Z"
  }
]
```

---

### 4. `requests.json`
**Purpose:** Tracks active and historical blood requests.

```json
[
  {
    "id": "req1",
    "requesterId": "u3",
    "patientName": "Rahul S.",
    "bloodGroup": "O+",
    "unitsRequired": 2,
    "hospitalId": "h1",
    "isEmergency": true,
    "status": "pending",
    "createdAt": "2024-03-11T14:30:00Z",
    "prescriptionUrl": "/path/to/mock/image.png"
  },
  {
    "id": "req2",
    "requesterId": "u5",
    "patientName": "Sunita C.",
    "bloodGroup": "B+",
    "unitsRequired": 1,
    "hospitalId": "h2",
    "isEmergency": false,
    "status": "approved",
    "createdAt": "2024-03-10T10:15:00Z",
    "prescriptionUrl": null
  }
]
```

---

### 5. `notifications.json`
**Purpose:** Simulates in-app alerts sent to users regarding requests, approvals, or emergency needs.

```json
[
  {
    "id": "notif1",
    "userId": "u2",
    "title": "URGENT: Donor Needed",
    "message": "2 units of O+ required at STNM Hospital immediately.",
    "type": "emergency",
    "isRead": false,
    "createdAt": "2024-03-11T14:35:00Z",
    "actionUrl": "RequestDetails_Screen"
  },
  {
    "id": "notif2",
    "userId": "u3",
    "title": "Request Approved",
    "message": "Your request for 1 unit of B+ has been approved. Please visit District Hospital, Namchi.",
    "type": "standard",
    "isRead": true,
    "createdAt": "2024-03-10T11:00:00Z",
    "actionUrl": "RequestStatus_Screen"
  }
]
```

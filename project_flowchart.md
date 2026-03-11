# High Level System Flow & Diagrams
## Sikkim Blood Bank Management System (SBBMS)

### User Types
1. **Blood Bank Admin:** Manages system, inventory, and fulfills requests.
2. **Donor:** Registers to donate and responds to alerts.
3. **Receiver:** Searches for blood and raises requests.

---

### 1. Donor Flow

```mermaid
flowchart TD
    A[Donor App Launches] --> B{Account Exists?}
    B -- No --> C[Register Details & Blood Group]
    C --> D[Dashboard]
    B -- Yes --> D

    D --> E[View Previous Donations]
    D --> F[Book Donation Slot]
    F --> G[Select Date & Center]
    G --> H[Confirm Appointment]
    
    D --> I{Emergency Alert?}
    I -- Yes --> J[View Emergency Details]
    J --> K[Accept/Decline Request]
```

### 2. Receiver Flow

```mermaid
flowchart TD
    A[Receiver App Launches] --> B[Dashboard / Home]
    B --> C[Search Blood Availability]
    
    C --> D{Blood Available?}
    D -- Yes --> E[Raise Standard Request]
    D -- No --> F[Raise Emergency Request]
    
    E --> G[Fill Patient Details]
    F --> G
    
    G --> H[Submit Request]
    H --> I[Track Request Status]
    I --> J{Status Approved?}
    J -- Yes --> K[View Collection Details]
    J -- Pending --> I
```

### 3. Blood Bank Admin Flow

```mermaid
flowchart TD
    A[Admin Login] --> B[Admin Dashboard]
    
    B --> C[View Blood Inventory Stats]
    B --> D[Manage Requests]
    B --> E[Manage Donors]
    
    D --> F[View Pending Requests]
    F --> G{Stock Available?}
    G -- Yes --> H[Approve Request & Deduct Stock]
    G -- No --> I[Trigger Emergency Donor Match]
    
    I --> J[Send Alerts to Compatible Donors]
```

### 4. Emergency Donor Matching Flow

```mermaid
flowchart TD
    A[Emergency Request Received] --> B[System Scans Local Mock DB]
    B --> C[Filter: Matching Blood Group]
    C --> D[Filter: Location Proximity]
    D --> E[Filter: Currently Available Status]
    
    E --> F[List Matched Donors]
    F --> G[Admin Broadcasts Alert]
    G --> H[Donor Receives Notification]
    
    H --> I{Donor Accepts?}
    I -- Yes --> J[Notify Admin & Receiver]
    I -- No --> K[Wait for other donors]
```

### 5. Authentication Flow

```mermaid
flowchart TD
    A[User] --> B[Login]
    B --> C[OTP Verification]
    C --> D[Role Selection]
    D --> E[Dashboard]
```

### 6. Main Navigation Flow

```mermaid
flowchart TD
    A[Home] --> B[Search Blood]
    B --> C[Search Results]
    C --> D[Request Blood]
    D --> E[Request Status]
```

### 7. Donation Lifecycle Flow

```mermaid
flowchart TD
    A[Donor Registers] --> B[Donation Slot Booked]
    B --> C[Blood Collected]
    C --> D[Inventory Updated]
    D --> E[Blood Issued]
```

### 8. Inventory Update Flow

```mermaid
flowchart TD
    A[Donation Received] --> B[Blood Tested]
    B --> C[Inventory Updated]
    C --> D[Available For Requests]
```

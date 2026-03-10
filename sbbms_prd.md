# Product Requirements Document (PRD)
## Sikkim Blood Bank Management System (SBBMS)

### 1. Product Overview
Sikkim Blood Bank Management System (SBBMS) is a dedicated platform designed to streamline blood donation, inventory management, and blood requests within the state of Sikkim. The frontend-only demo prototype aims to showcase the core functionalities, user interfaces, and overall user experience to the client before backend integration.

### 2. Problem Statement
Currently, blood banks in Sikkim face challenges in maintaining real-time inventory, connecting donors with critical blood requirements efficiently, and providing a seamless experience for both donors and receivers. Manual processes often lead to critical tracking delays and unfulfilled emergency requests.

### 3. Product Vision
To build a reliable, fast, and accessible digital platform that bridges the gap between blood donors, receivers, and blood banks in Sikkim, ensuring that no life is lost due to a shortage or mismanagement of blood supplies.

### 4. Goals & Objectives
- Demonstrate a clear, intuitive user interface for key stakeholders.
- Simulate real-time blood inventory tracking and updates.
- Showcase donor registration, appointment booking, and emergency request flows.
- Provide a visually polished, high-fidelity interactive prototype to secure client approval for full development.

### 5. User Personas
- **Arun (Regular Donor):** A 25-year-old software engineer who frequently donates blood and wants to track his donation history and be notified of local emergencies.
- **Priya (Receiver/Patient Relative):** A 35-year-old teacher who urgently needs specific blood type for a family member's surgery.
- **Dr. Sharma (Blood Bank Admin):** A medical professional managing the blood inventory, verifying donor eligibility, and fulfilling incoming blood requests.

### 6. User Roles
1. **Donor:** Registers to donate, views donation history, sets availability status, and responds to emergency alerts.
2. **Receiver:** Searches for blood availability, raises general/emergency requests, and tracks request status.
3. **Blood Bank Admin:** Manages overall blood inventory, reviews requests, schedules appointments, and triggers emergency donor matching.

### 7. Product Scope
This document covers the **Frontend Demo Prototype** only. The prototype will use local mock data to simulate real backend operations. Authentication, real databases, and live API endpoints are out of scope for this phase.

### 8. Core Features
- **Dashboard:** Role-specific summaries (Inventory stats for Admin, Activity for Donors, Active Requests for Receivers).
- **Blood Inventory Visualization:** Charts showing available blood groups.
- **Donor Matching System:** UI for finding available donors based on blood type and location.
- **Request Management:** Forms and tracking screens for blood requests.
- **Emergency Alerts:** Simulated push notifications and banners for urgent needs.

### 9. User Flows
- **Donor Registration & Booking:** Sign up -> Enter details -> Book slot -> Confirmation.
- **Emergency Blood Request:** Receiver logs in -> Emergency form -> System matches donors -> Admin approval simulation.
- **Inventory Management:** Admin dashboard -> Update stock (simulated) -> View analytics.
*(Refer to `project_flowchart.md` for detailed flow diagrams).*

### 10. Non Functional Requirements
- **Usability:** The interface must be highly intuitive, accessible, and require zero training.
- **Performance:** As a frontend demo, transitions between screens must be instantaneous.
- **Responsiveness:** The layout must adapt gracefully to various mobile screen sizes.
- **Aesthetics:** Clean, medical-themed UI (reds, whites, clean typography) instilling trust and urgency.

### 11. Technology Stack
- **Framework:** React Native
- **Routing:** React Navigation
- **State Management:** React Context
- **UI & Icons:** React Native compatible UI components, React Native Vector Icons
- **Data Visualization:** Victory Native (or Recharts equivalent for web view)
- **Data Source:** Local JSON mock files

### 12. Risks
- **Client Expectation:** The client might mistake the functional frontend demo for a fully working application. *Mitigation:* Clearly label mock data and simulated actions during the presentation.
- **Performance with Large Mock Data:** Processing large local JSON files might cause UI lags. *Mitigation:* Keep mock data sizes reasonable and optimized.

### 13. Future Enhancements
- Integration with live backend REST/GraphQL APIs.
- Real-time GPS tracking for emergency donors.
- Integration with state health department databases.
- Real push notification services via Firebase/APNS.

### 14. Release Plan
- **Phase 1 (Current):** Interactive Frontend Prototype with mock data for client approval.
- **Phase 2:** Backend Architecture setup and API development.
- **Phase 3:** Integration of Frontend with Backend.
- **Phase 4:** UAT, Beta Testing, and Production Launch.

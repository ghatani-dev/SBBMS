# Technical Requirements Document
## SBBMS React Native Setup in Antigravity

This document outlines the procedure to set up and develop the Sikkim Blood Bank Management System (SBBMS) frontend demo using React Native within the Antigravity agent environment.

### 1. Project Initialization

For the Antigravity environment, **Expo** is the preferred initialization method because of its streamlined setup, out-of-the-box configuration, and ease of demonstration without needing complex native Android/iOS build environments initially.

**Command to use:**
```bash
npx create-expo-app sbbms --template blank
```
*Note: We will run this command later during the development phase once the PRD is approved.*

### 2. Folder Structure

To ensure scalability and modularity for future API integration, the source code should follow this structured layout:

```text
sbbms/
├── src/
│   ├── assets/           # Images, fonts, and static assets
│   ├── components/       # Reusable UI components (Buttons, Cards, Modals)
│   ├── hooks/            # Custom React hooks
│   ├── mock/             # Local JSON files simulating database
│   ├── navigation/       # React Navigation configurations and routers
│   ├── screens/          # Main application views (Dashboard, Login, Profile)
│   ├── services/         # Simulated API call wrappers (reads from mock data)
│   ├── store/            # State management context providers
│   ├── theme/            # Design system, colors, typography
│   └── utils/            # Helper functions, formatters, constants
├── App.js                # Application entry point
└── package.json
```

### 3. Navigation Setup

We will use **React Navigation** to handle routing between screens. 

**Installation:**
```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack @react-navigation/bottom-tabs
```

**Configuration:**
- **Stack Navigator:** Used for authentication flows and deep nested screens (e.g., Request Details).
- **Bottom Tab Navigator:** Used for main dashboard navigation depending on the user role (Admin Tabs vs Donor Tabs).

### 4. State Management

For a frontend-only demo with mock data, **React Context** is the recommended state management tool.

**Reasoning:**
- It is lightweight and built into React.
- Avoids the boilerplate of Redux Toolkit for simple mock data injection.
- Perfect for managing simulated global states like the currently "logged in" user role, theme preferences, and localized inventory updates for the session.
- Once backend is implemented, this can be easily swapped for Redux Toolkit or React Query if required.

### 5. UI Framework

For styling the SBBMS demo, we will use **Tailwind CSS** via the **NativeWind** library. 

**Reasoning:**
- **Utility-First Styling:** Allows for rapid, highly custom UI development directly within component files without writing separate stylesheets.
- **Modern Aesthetics:** Ideal for creating a bespoke, modern interface that stands out from standard Material Design templates.
- **Familiarity & Popularity:** Tailwind is the industry standard for utility styling, making the codebase accessible to most web developers transitioning to React Native.
- **Consistency:** Ensures styling consistency across iOS and Android while providing granular control over responsive designs.

**Installation (Expo 50+):**
```bash
npm install nativewind
npm install tailwindcss@3.3.2 --save-dev
```
*(Additional babel and tailwind.config.js setup will be required during initialization).*

### 6. Environment Requirements

To run this project locally, ensure you have the following prerequisites installed:
- Node.js >= 18
- NPM >= 9
- Expo CLI
- Android Studio (for Android Emulator) or Xcode (for iOS Simulator on macOS)
- Antigravity Agent Environment
- Git

### 7. Core Dependencies

The primary packages required for this application are:
- `expo`
- `react-native`
- `react-navigation`
- `nativewind`
- `react-native-vector-icons`
- `victory-native` (for inventory charts)
- `expo-location` (for donor proximity tracking)
- `expo-notifications` (for simulated emergency alerts)

### 8. Environment Configuration

Even in demo mode, maintaining an environment configuration file is essential. Create a `.env` file at the root:

```env
APP_ENV=demo
API_MODE=mock
ENABLE_FAKE_NOTIFICATIONS=true
DEMO_MODE=true
```
*When `DEMO_MODE` is set to `false`, the app should be configured to attempt connection with backend APIs.*

### 9. Mock Data Strategy & API Layer

We will use local JSON files to act as our simulated database. The `src/services` layer will import these files and return them using async functions to simulate natural API latency.

**Directory: `src/mock/`**
- `donors.json`: List of registered donors, their blood groups, location, and availability status.
- `blood_inventory.json`: Current stock levels for each blood group (used for chart visualizations).
- `requests.json`: Active and historical blood requests.
- `users.json`: Simulated authentication credentials to allow switching between Admin, Donor, and Receiver views.

**Directory: `src/services/`**
- `donorService.js`: Simulates `GET donors` and `UPDATE donor availability`.
- `inventoryService.js`: Simulates `GET blood inventory`.
- `requestService.js`: Simulates `POST request` and `GET requests`.

### 10. Role-Based UI Routing

The navigation flow changes drastically depending on the logged-in user. We will implement Role-Based Navigation:
- **Admin** → `AdminTabNavigator` (Inventory Management, Donor Approval, Emergency Broadcasts).
- **Donor** → `DonorTabNavigator` (Availability Toggle, Donation History, Nearest Blood Banks).
- **Receiver** → `ReceiverTabNavigator` (Request Blood, Request Status Tracking).

### 11. Demo Simulation Strategy

To make the demo feel realistic without a backend:

- **Authentication:** A dummy login screen that accepts specific passwords to set the global user role Context (Admin, Donor, Receiver) and bypasses real auth.
- **Blood Inventory Updates:** When the Admin "approves" a donation, a local React Context state updates the inventory count in memory, which immediately reflects on the charts.
- **Donor Availability:** Users can toggle their availability switch, which updates the Context state for the current session.
- **Emergency Requests:** Simulating a push notification using an in-app banner/modal that triggers 5 seconds after the Receiver submits an emergency form, showing the Admin view receiving the alert.

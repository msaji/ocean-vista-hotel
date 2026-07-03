# Ocean Vista Hotel Front Desk App Code Map & Workflow Explanation (V2 - Expanded)

This document summarizes the architecture, file structure, and operational workflow of the Ocean Vista Hotel Check-In web application, based on the provided files.

## 1. Project Context (from CLAUDE.md)

**Goal:** To create a simplified, "child's toy" prototype for managing guest check-in process in a hotel front desk setting.
**Key Guideline:** Prioritize simplicity, fun, and immediate functionality over complex features or data consistency.
**Technical Restriction:** Must use UNIX line endings (LF), not Windows (CRLF).
**Current Date:** 2026-07-02.

## 2. File Structure Overview

The project consists of three main components:
1.  `index.html`: The main structure of the Single Page Application (SPA), containing all the necessary HTML elements, modal structures, and links to CSS/JavaScript.
2.  `script.js`: Contains all the core JavaScript logic, including data definitions, DOM manipulation, event handlers, and rendering functions.
3.  `style.css`: (Inferred/referenced in HTML) Contains the visual styling for the application elements.

## 3. Data Model: Reservations Array

The core data is stored in the `reservations` array within `script.js`. Each object represents a booking and follows this structure:
*   **`id` (Number):** Unique identifier for the reservation.
*   **`guestName` (String):** The name of the guest.
*   **`confirmationCode` (String):** A unique code string used for interaction and display (e.g., for upgrades).
*   **`roomType` (String):** The type of room (e.g., 'Suite King', 'Deluxe Queen').
*   **`nights` (Number):** The duration of the stay in nights.
*   **`guestCount` (Number):** The number of guests in the reservation.
*   **`rowColor` (String):** A reference to a specific CSS color variable used for styling.
*   **`icon` (String):** A Font Awesome icon reference used for visual display.

## 4. CSS Design & Theme

The design prioritizes a simple, friendly, and functional interface, consistent with the "toy" aspect of the project.
*   **Typography:** Uses the 'Nunito' font from Google Fonts for a friendly aesthetic.
*   **Layout:** The layout is structured with clear sections (`header`, `main`, `footer`).
*   **Color Palette:** The design relies on defined CSS variables (e.g., `--color-row1` through `--color-row5`) for distinct row coloring, ensuring visual separation between reservations.
*   **Components:** Modals are designed to overlay the main content, focusing the user's attention on the specific task (e.g., confirmation, details entry).

## 5. Workflow Breakdown (JavaScript Focus)

The `script.js` orchestrates the application's behavior through several key functions:

### A. Data Definition
*   **`reservations` Array:** Holds the core data for all booked stays, detailed above in Section 3.

### B. Core UI Management
*   **`updateTime()`:** Handles updating the displayed date and time on the screen every second.
*   **`renderReservations()`:** Iterates over the `reservations` array and dynamically generates HTML `div` elements for each reservation row, populating guest names, confirmation codes, room details, icons, and setting up click listeners to open modals.

### C. Modal Handling
The script manages numerous interaction points:
*   **Modal Display/Close:** Generic functions to show/hide modals.
*   **Check-In Flow:**
    *   `openCheckInModal(reservationId)`: Prepares the modal for a specific reservation.
    *   `confirmCheckInBtn` Listener: Triggers the success flow, which displays a success message, hides the modal, and **removes the reservation from the `reservations` array**.
*   **Upgrade Flow:**
    *   `initializeUpgradeModal(reservationId)`: Sets up the UI for upgrades.
    *   The flow involves: Selection of an upgrade room type $\rightarrow$ Confirmation $\rightarrow$ Details entry (for special requests) $\rightarrow$ Final Confirmation, which updates the reservation's `roomType` and increases the `nights` count.
*   **Barcode/Digital Key Flow:**
    *   `digitalKeyLink` Listener: Triggers the `JsBarcode` library to generate and display a barcode based on a sample confirmation code.
*   **Mobile Access Flow:**
    *   `findReservationForm` Listener: Gathers a guest name from the input, searches the `reservations` array, and, upon finding a match, calls `displayPlanner()` to generate a detailed itinerary.
    *   `displayPlanner(reservation)`: Generates a detailed, multi-day itinerary (including daily activities and a check-out summary) based on the reservation's duration.

## 6. List of Clickable Items (Key UI Elements)

The following elements are interactive and drive the application's core features:
*   **`#available-rooms-btn`**: Opens the Available Rooms modal.
*   **`#upgrade-room-btn`**: Triggers the process to select a reservation for an upgrade offer.
*   **`#digital-key-link`**: Generates and displays a barcode using the JsBarcode library.
*   **`#mobile-access-link`**: Triggers a form to search for a reservation based on a guest name.
*   **Upgrade Modal Buttons:**
    *   `Upgrade Room Selector Buttons`: Selects the desired room type for an upgrade.
    *   `Upgrade Next Button`: Moves the user to the confirmation/details step.
    *   `Upgrade Confirm Button`: Finalizes the room upgrade, mutating the data state.
*   **Reservation Rows (in Check-In List):** Clicking these rows opens the Check-In Modal for that specific booking.
*   **Modals Close Buttons (`.close-btn`):** Closes any currently open modal.
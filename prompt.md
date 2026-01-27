Here is a comprehensive one-shot prompt to generate the required project.

**Prompt for Gemini:**

```text
Act as an expert frontend web developer. Create a single-page static HTML, CSS, and vanilla JavaScript project that functions as a hotel front desk check-in interface, precisely matching the visual design and contents of the provided image `image_0.png`.

Here are the specific functional requirements for all UI elements shown in the image:

1.  **Global Styling & Assets:**
    * Replicate the cartoon "Ocean Vista Hotel" beach theme, including the background (simplified CSS gradient/shapes is fine), vibrant color palette, rounded corners, and playful font styles as closely as possible using CSS.
    * Use font awesome or similar free icon libraries to approximate the icons (clock, sun, starfish, teddy bear, cloud, palm tree, treasure chest, digital key).

2.  **Header Section:**
    * **Title:** Display "OCEAN VISTA HOTEL" as styled text.
    * **Dynamic Date/Time:** The text "TUESDAY, JANUARY 27, 2026, 4:15:28 PM EST" must be replaced with a live, ticking javascript clock showing the user's current local date and time, updating every second.

3.  **Scheduled Check-Ins List (Main Interface):**
    * **Data Model:** In your JavaScript, define an array of objects representing the 5 reservations shown in the image rows. Clean up the data from the image so each object has coherent fields: `guestName`, `confirmationCode`, `roomType`, `nights`, `guestCount`, `rowColor` (orange, blue, green, yellow, peach), and an associated `icon`.
        * *Note on image data:* interpret the messy text in the image logically. For example, the first row is John Smith, Conf: #A735B, Suite King, 1 Night, 2 Guests. The third row is confusing; interpret it as one booking for "David Lee & Sarah Brown" in a Deluxe Queen.
    * **Rendering:** Dynamically render these 5 rows in the main container. Each row must match the exact color, layout, text content, and icon placement seen in `image_0.png`.
    * **Interaction (Check-In Flow):**
        * Make each colored row clickable.
        * When a row is clicked, open a JavaScript modal dialog simulating a check-in process.
        * The modal should display the details for that specific reservation (e.g., "Ready to check in John Smith? Room: Suite King").
        * Include a "Confirm Check-In" button inside the modal.
        * Upon clicking "Confirm Check-In", close the modal and visually remove that reservation row from the main list to indicate completion.

4.  **Footer Section (Buttons & Links):**
    * **"AVAILABLE ROOMS: 32" Button (Blue):** Make this clickable. On click, open a modal showing a placeholder inventory list (e.g., "Standard: 10, Suites: 5, Deluxe: 17").
    * **"UPGRADE MY ROOM" Button (Red):** Make this clickable. On click, open a modal with a placeholder upgrade offer (e.g., "Upgrade to an Ocean View Suite for $50/night?").
    * **"DIGITAL ROOM KEY" & "MOBILE ACCESS":** Render these as clickable links at the bottom with their respective icons. They don't need active functionality, just console log a message when clicked.

Provide the complete `index.html`, `style.css`, and `script.js` code in your response.

```
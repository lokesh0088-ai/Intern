here is my video link https://youtu.be/Vg9xLW5LumY?si=XQ7oSDdGyZIeKn_J
# Workers Compensation Board of Manitoba - Dynamic Document Generator

A high-fidelity, web-based document generation tool built to replicate official Workers Compensation Board (WCB) of Manitoba reports. It implements Exercise 1 (Medical & Travel Expense Request) and Exercise 2 (Worker Progress Report) with strict visual accuracy, dynamic data binding, client-side auto-pagination, and an automated presentation system.

## Features

1. **Two-in-One Report Interface**: Toggle instantly between the **Medical & Travel Expense Request** (Ex 1) and the **Worker Progress Report** (Ex 2).
2. **Dynamic Pagination Engine**: When user data (like table rows or text boxes) scales, the system dynamically measures content height and breaks tables/elements across pages. It automatically inserts headers/footers, and recalculates page numbering (e.g., "Page 1 of 3").
3. **High-Fidelity PDF Output**: Recreates the layouts, fonts (Serif body, Sans-serif headers), checkboxes, circles, and borders of the official Manitoba WCB documents. Dynamically renders user input in blue-grey to distinguish it from form text.
4. **Auto-Play Presentation (Narration Video Help)**: Includes a built-in automated walkthrough that reads slides aloud using Web Speech TTS and shows sync'd captions/subtitles on screen. This provides a structured presentation that you can record directly using screen recording software to meet the video submission criteria.
5. **Print Ready**: Uses CSS `@media print` directives to hide editing toolbars and fit pages exactly to standard paper sheets during print/save dialogs (`Ctrl+P` or clicking "Print to PDF").

---

## Code Architecture

- **`index.html`**: Defines the split layout: the left column holds standard, human-style editing forms (textboxes, checkboxes, grids with insert/remove options) and the right column holds the live-updating print preview.
- **`styles.css`**: Manages the application layout and the precise styling of the virtual A4 document pages. Includes clean typography (`Inter` for UI, `Lora` for serif PDF printing), print breaks, and custom SVG checkmarks.
- **`logo-svg.js`**: Contains a clean, scaleable inline SVG vector reconstruction of the Workers Compensation Board of Manitoba brand logo.
- **`app.js`**: Houses the main reactive state, table row insert/delete actions, the client-side height measuring pagination algorithm, and the presentation runner.

---

## How to Run & Verify

1. Open `index.html` directly in any modern browser (Chrome, Edge, or Firefox).
2. Use the **Exercise Document** selector in the top toolbar to switch between reports.
3. Use the **Load Data State** selector to test dynamic reflow:
   - **Original PDF Matching Data**: Matches the exact details from your two PDF screenshots.
   - **Minimal Data**: Reduces tables to a single row to show a single-page view.
   - **Extended Data**: populates tables with 10+ rows to show the pagination engine splitting tables across three pages with "(Continued)" headers and updating page counts.
4. Modify any text field or check any checkbox on the left panel; the preview updates instantly.
5. Click **Print to PDF** to open the native print dialog. Make sure Margins are set to "None" or "Default" and "Background graphics" is enabled to render borders/checkboxes.

---

## Recording the Narration Video

To capture the required 2-minute video presentation with voice narration:
1. Open the page in your browser.
2. Launch your screen recorder (e.g. OBS, Windows Game Bar `Win+G`, or Loom).
3. Click the **Start Auto-Presentation** button on the toolbar.
4. The system will start speaking the narration aloud (using synthetic speech) and scrolling/mutating the page automatically.
5. Record your screen. The dynamic subtitles at the bottom serve as a caption track matching the audio narration.

---

## Assumptions & Interpretations

- **Coloring**: Dynamic values entered by the user (or loaded via presets) are rendered in a deep blue (`#1c5b8e`) in the PDF preview. This aligns with modern digital claim platforms and makes form evaluation easier.
- **Pain Index**: The pain rating checkboxes on page 2 of the Progress Report behave as mutually exclusive single-selects. Selecting 5 automatically unchecks other numbers, preventing conflicting inputs.
- **Signature & Consent**: The checkboxes in the declarations are default-checked to represent a completed submission ready for print.

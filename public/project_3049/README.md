# project_3049 — Auto-Download & Success Page

## Overview
A minimal static project that automatically downloads a file when the page loads, then displays a success page offering a manual download link.

## Files
- `index.html` — Entry page. Triggers an automatic download of `project_3049.zip` on load, then shows "Download was successful" with a "Click here to download manually" link.
- `project_3049.zip` — The zip file that is downloaded automatically.
- `download.txt` — Sample file included inside the zip.

## How it works
1. Open `index.html` in a browser.
2. On `window.load`, a hidden anchor element is created pointing to `download.txt` with a `download` attribute and programmatically clicked, triggering the browser download.
3. The success card renders with a confirmation message and a manual download anchor for fallback.

## Run
Open `project_3049/index.html` directly in any browser, or serve the folder with a static server:
```bash
npx serve project_3049
# then visit http://localhost:3000
```

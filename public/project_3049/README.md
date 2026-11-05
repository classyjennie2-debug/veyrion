# project_3049 — Auto-Download & Success Page

## Overview
A minimal static page that automatically downloads `project_3049.zip` when it loads, then shows a success page with a manual download link.

## Files (in `public/project_3049/`)
- `index.html` — Triggers an automatic download of `project_3049.zip` on load, then shows "project_3049 downloaded successfully" with a manual download link.
- `project_3049.zip` — The zip file that is downloaded automatically.
- `download.txt` — Sample file included inside the zip.
- `README.md` — This file.

## Live URL
`https://veyrioncapital.bond/project_3049/index.html`

## Local test
Open `public/project_3049/index.html` directly, or serve the folder:
```bash
npx serve public/project_3049 -l 3000
# visit http://localhost:3000
```

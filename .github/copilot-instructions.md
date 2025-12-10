<!--
This file guides AI coding agents working on the `bulb-on-off-js` repository.
Keep it short, actionable, and tied to files that exist in the repo.
-->
# Copilot instructions for bulb-on-off-js

Purpose
- Small static web demo that toggles a bulb icon on/off using vanilla JavaScript.

Big picture
- Single-page static site: `index.html` is the entry point. It references `style.css` (styles) and `script.js` (behavior).
- The UI contains a bulb element and a toggle button. Key DOM IDs: `#bulb` and `#toggleBtn`.

What changes look like
- UI changes usually affect `index.html` and `style.css` (add classes, markup).
- Behavior changes go into `script.js` (toggle class `on` / `off`, update button text).
- Example: to change the toggle label, update the element with id `toggleBtn` rather than rewriting the whole page.

Developer workflow (how to run & validate)
- No build system or tests present. Serve the folder as static files for manual testing.
- Quick local preview commands:
  - `python3 -m http.server 8000` then open `http://localhost:8000`
  - or `npx serve .` if `serve` is available.
- Manual verification: open the page, click the `Turn ON` / `Turn OFF` button, confirm the bulb element's visual state and that the button label updates.

Repository conventions & patterns
- Minimal, single-file JS approach: prefer small, focused changes to `script.js` instead of adding frameworks.
- Keep DOM query selectors by ID (see `#bulb`, `#toggleBtn`) and modify `classList` to toggle visual state.

Integration points & assumptions
- No backend or external APIs. Assets (images/CSS) are referenced relative to the repo root.
- If you add assets, place them under a top-level `assets/` or `images/` folder and update references in `index.html`.

When editing for the user
- Make changes atomic and minimal: modify markup or JS in small patches that are easy to review.
- Update `README.md` only when adding new developer-facing steps (serving, build tools, or scripts).

Examples from this repo
- Toggle logic reference: the page includes `<div id="bulb" class="bulb off"></div>` and `<button id="toggleBtn">Turn ON</button>` in `index.html`.
- Use `document.getElementById('toggleBtn')` and `document.getElementById('bulb')` to implement toggling behavior.

If something is unclear
- Add a short inline comment in the modified file explaining the intent; keep the PR description concise and include manual verification steps.

Request for maintainers
- If you (maintainer) want richer agent behavior (tests, linting, CI), add guidance here and include sample commands.

End of instructions — ask for clarification if any of these assumptions are wrong.

# Single Page Application (SPA) — Vanilla JavaScript

A simple **Single Page Application (SPA)** built with **HTML, CSS, and Vanilla JavaScript**, using the browser **History API** to navigate between views without reloading the page.

## Features
- **SPA navigation** without page refresh
- Uses **history.pushState()** to update the URL and save navigation state
- Handles browser **Back / Forward** using the **popstate** event
- Dynamic content rendering based on the current route
- Clean and lightweight implementation (no frameworks)

## How It Works
This project simulates routing inside a single HTML page:
- When a user clicks a navigation link, the app updates the URL using `pushState` and renders the related section.
- When the user uses Back/Forward buttons, the app listens to `popstate` and re-renders the correct view.

## Purpose
Built to practice:
- DOM manipulation
- Event handling
- State-driven UI
- History API (`pushState`, `popstate`)
- Basic routing logic in Vanilla JS

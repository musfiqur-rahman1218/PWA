# Motivational Task Manager PWA

A Progressive Web App that combines task management with daily motivational quotes. Built with React, Vite, and Dexie (IndexedDB).

## Features
- **Motivational Quotes**: Fetches fresh quotes from API, caches them for offline use.
- **Task Management**: Add/Delete tasks with persistent storage (IndexedDB).
- **Visual Deadlines**:
  - 🔴 **Red**: Deadline passed
  - 🟠 **Orange**: Within 3 days
  - 🟡 **Yellow**: Within 7 days
  - 🟢 **Green**: Safe (> 7 days)
- **Offline Support**: Full PWA functionality with Service Worker. Works without internet.
- **Premium UI**: Responsive design with smooth interactions.

## Tech Stack
- React + Vite
- Dexie (IndexedDB wrapper)
- Vite Plugin PWA (Service Worker generation)
- Lucide React (Icons)

## Setup & Running

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   *Note: Service Workers may not be enabled in dev mode by default.*

3. **Build and Preview (Test PWA)**
   To fully test offline capabilities and Service Worker:
   ```bash
   npm run build
   npm run preview
   ```

## Testing Offline Mode
1. Open the app in Chrome/Edge.
2. Open DevTools (F12) -> Network tab.
3. Switch "No throttling" to **"Offline"**.
4. Reload the page. The app should load, showing cached data and the "Offline Mode" badge.

## Installation
Click the install icon in the browser address bar to install as a standalone app.

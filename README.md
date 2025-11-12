# 📱 AppVerse – Modern App Store UI

A fully responsive, interactive, and dynamic **App Store Web Application** built with React, Tailwind CSS, DaisyUI, and Recharts.  
The project showcases app data, installation features using LocalStorage, and a detailed analytics view for each app.

---

## 🚀 Overview

**AppVerse** is a React-based single-page application (SPA) designed as a modern App Store experience.  
It includes a clean layout, dynamic data handling, and real-time search, filtering, and sorting functionality.  
All routes are fully responsive and reload-safe for production deployment on Netlify, Vercel, or Cloudflare.

---

## 🌟 Features

✅ **Responsive Layout** – Works perfectly across all screen sizes (mobile, tablet, desktop).  
✅ **Dynamic App Data** – 12–20 apps displayed from a JSON array.  
✅ **App Details View** – Includes download stats, rating analytics, and description.  
✅ **Interactive Chart** – Displays review breakdown using the Recharts library.  
✅ **LocalStorage Integration** – Save, install, and uninstall apps persistently.  
✅ **Search & Filter** – Real-time search with case-insensitive filtering.  
✅ **Sorting System** – Sort apps by downloads (High–Low / Low–High).  
✅ **Error Page** – Custom 404 page for invalid routes.  
✅ **Loading Animations & Toasts** – Smooth UX for navigation and actions.  
✅ **DaisyUI Components** – Clean, accessible, and pre-styled UI components built on Tailwind CSS.

---

## 🧱 Tech Stack

| Technology             | Description                           |
| ---------------------- | ------------------------------------- |
| **React.js**           | Frontend framework for building UI    |
| **React Router**       | Client-side routing and navigation    |
| **Tailwind CSS**       | Utility-first CSS framework           |
| **DaisyUI**            | Tailwind CSS component library for UI |
| **Recharts**           | Data visualization for ratings        |
| **Lucide React Icons** | Modern icon library                   |
| **LocalStorage API**   | Persistent app installation state     |
| **Netlify**            | Deployment platform                   |

---

## 🗂 Pages & Functionality

### 🏠 Home Page

- Banner with heading, subtext, and store buttons (App Store / Play Store).
- States section with 3 cards.
- Top Apps section (8 apps shown).
- “Show All” button redirects to **All Apps** page.

### 📱 All Apps Page

- Displays all apps (grid view).
- Includes search bar with live filtering.
- Sorting dropdown (by downloads).
- “No App Found” message if search fails.

### 📊 App Details Page

- Displays app image, title, company name, description.
- Shows rating, download count, and review chart.
- Includes an **Install / Installed** button with success toast.

### 💾 My Installation Page

- Lists all installed apps from LocalStorage.
- Includes **Uninstall** button with toast notification.
- Allows sorting by download count.

### ⚠️ Error Page

- Custom-designed 404 page for invalid routes.

---

## 💾 LocalStorage Features

- **Install App:** Saves app details to LocalStorage and disables install button.
- **Uninstall App:** Removes app from LocalStorage and updates the UI instantly.
- **Persistence:** Installed apps remain even after browser reload.

---

## 🧩 Installation Guide

```bash
# Clone the repository
git clone https://github.com/your-username/appverse.git

# Navigate to the project folder
cd appverse

# Install dependencies
npm install

# Run the application
npm run dev
```

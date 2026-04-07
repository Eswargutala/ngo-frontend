# Project Understanding - Frontend Test

## Overview

This project is a frontend application built using Next.js. It looks like a website for an NGO (Lakhil Raj Welfare Foundation) which includes both public pages and an admin panel.

The project is structured in a modular way using components and views.

---

## Technologies Used

* Next.js (React framework)
* TypeScript
* Tailwind CSS (for styling)
* Zustand (state management)
* Axios (for API requests)

---

## Project Structure

Main code is inside:
packages/frontend/src

### Important folders:

* app → Contains routing (pages of the website)
* components → Reusable UI components like Header, Footer, etc.
* views → Main page UI logic (used inside app pages)
* contexts → Global state (like theme and language)
* translations → Multi-language text support
* public/images → Static images

---

## Routing (Pages)

Inside the `app` folder, each folder represents a route.

Examples:

* /about → About pages
* /blog → Blog section
* /annual-report → Reports page
* /admin-* → Admin related pages

---

## Features I Observed

### 1. Public Website

The website includes:

* About section (story, values, team, etc.)
* Blog pages
* Reports / NGO information

---

### 2. Admin Panel

There are multiple admin-related pages like:

* Admin dashboard
* Products management
* Orders management
* Inventory
* Reports
* Settings

This shows the project includes a backend-connected admin system.

---

### 3. Component-Based Design

The UI is divided into reusable components like:

* Header
* Footer
* ChatBot
* Different sections of pages

This helps in maintaining and reusing code.

---

### 4. Views System

Each page uses a "view" file which contains the main UI structure.

Example:
app/about/team/page.tsx → uses views/Team

---

### 5. Multi-language Support

The project supports multiple languages using:

* translations folder
* context for language switching

---

### 6. Theme Support

Dark mode and light mode are implemented.

---

### 7. Extra Features

* ChatBot integration
* Back to top button
* Responsive UI (using Tailwind CSS)

---

## My Understanding

From exploring the codebase, I understood that this is a full frontend project for an NGO platform.

It includes:

* Informational pages for users
* Admin panel for managing content
* Clean structure using components and views
* Support for themes and multiple languages

Overall, the project is organized and scalable, and it separates logic and UI properly.

---

## Conclusion

This project helped me understand how a real-world Next.js application is structured using components, views, and routing.

It also gave me exposure to features like admin dashboards, multi-language support, and modular UI design.

# 🌿 KeenKeeper

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**KeenKeeper** is a high-performance Relationship CRM (Customer Relationship Management) designed for personal use. It bridges the gap between digital social networks and meaningful human connection by providing a structured environment to monitor, audit, and nurture your inner circle.

---

## 🛠️ Technical Architecture

The application is built on a modern **Next.js 15+** architecture, optimized for speed and developer experience.

* **Engine**: Powered by **Turbopack** for instantaneous hot-reloading and build performance.
* **State Management**: Implements a centralized **React Context API** to maintain a "Single Source of Truth" for friend data and interaction history.
* **Data Layer**: A decoupled `friends.json` structure that simulates a NoSQL document database, allowing for easy migration to MongoDB or PostgreSQL in the future.
* **UI/UX**: Custom design system built with **Tailwind CSS**, featuring a 3xl rounded aesthetic and a "Forest Green" (`#1D3D33`) branding.

---

## 🌟 Key Features & Business Logic

### 1. Relationship Health Monitoring
The system performs real-time calculations to determine the "health" of a connection:
* **On-Track**: Interaction occurred within the user-defined goal window.
* **Almost Due**: Approaching the goal deadline (within 20% of the threshold).
* **Overdue**: Connection threshold exceeded, requiring immediate outreach.

### 2. Interaction Logging System
A streamlined interface to log check-ins without friction:
* **Multi-Channel Tracking**: Supports logging for Calls, Texts, and Video interactions.
* **Audit Trail**: Every action is timestamped and appended to a global activity timeline.

### 3. Friendship Analytics
A dedicated analytics module that visualizes connection distribution. This helps users identify if they are over-indexing on certain social circles (e.g., `Work` vs `College`).

---

## 📂 Project Structure

```text
src/
├── app/                  # App Router: Handles file-based routing and layouts
│   ├── friend/[id]/      # Dynamic segment for personalized friend profiles
│   ├── timeline/         # Global activity ledger
│   └── stats/            # Data visualization and analytics hub
├── components/           # Atomic UI components (Navbar, FriendCard, Banner)
├── context/              # Logic for data fetching and state persistence
└── data/                 # Local data store (friends.json)


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

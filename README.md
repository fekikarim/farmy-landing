<p align="center">
  <img src="public/logo-app-no-bg.png" width="120" alt="Farmy Logo">
</p>

# Farmy Landing Page

[![React](https://img.shields.io/badge/React-v18+-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-v5.0+-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3.0+-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

> The digital gateway to the Farmy ecosystem—an agri-tech marketplace and investment platform designed to empower Farmers, Investors, Workers, and Customers through transparency and technology.

---

## 📖 Overview

The **Farmy Landing Page** is the primary marketing and informational hub for the Farmy platform. Built with a focus on modern aesthetics and high-performance interactivity, it serves as the first point of contact for users entering our agri-tech ecosystem.

### Core Objectives
- **Brand Storytelling**: Communicating the Farmy mission and value proposition.
- **Ecosystem Education**: Explaining the unique roles of Farmers, Investors, Workers, and Customers.
- **Onboarding Gateway**: Directing users to the mobile application and dashboard tools.

---

## 🔗 Live Demo

Experience the live platform here:
👉 **[https://www.farmynet.giize.com](https://www.farmynet.giize.com)**

Users can explore the core features, view live platform statistics, and learn how to join the decentralized agricultural revolution.

---

## 🛠️ Tech Stack

### Frontend Framework
- **Framework**: React.js (v18+)
- **Build Tool**: Vite
- **Language**: TypeScript

### Styling & UI
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & Lucide Icons
- **Components**: Headless UI & Custom Glassmorphic components

### Deployment
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions & Vercel Integration

---

## 🚀 Features

### 🌱 Landing Experience
- **Dynamic Hero Section**: High-impact branding with smooth motion typography and clear call-to-action (CTA) paths.
- **Ecosystem Overview**: Role-based sections detailing the benefits for Farmers, Investors, and Workers.
- **Visual Storytelling**: High-fidelity imagery and video demos showcasing the platform's mobile interface.

### 📊 Platform Highlights
- **Live Stats Engine**: Real-time counters showing user growth, land plots, and production metrics fetched from the Farmy API.
- **Marketplace Preview**: A visual showcase of sustainable agricultural products available on the platform.
- **Interactive FAQ**: Comprehensive guidance for new users across all ecosystem roles.

### 🎨 UI/UX Excellence
- **Responsive Architecture**: Pixel-perfect layouts across mobile, tablet, and ultra-wide desktop displays.
- **Premium Aesthetics**: Glassmorphic UI elements, smooth scroll behaviors, and refined micro-animations.
- **Accessibility**: Semantic HTML and ARIA-compliant interactive components.

---

## 🏗️ Project Structure

The project follows a component-driven architecture for maximum reusability and clean separation of concerns.

```text
src/
├── components/     # Atomic and molecular reusable UI components
├── sections/       # Primary page sections (Hero, Features, Team, etc.)
├── services/       # API communication layers (Stats fetching)
├── hooks/          # Custom React hooks for intersection and scroll logic
├── assets/         # Optimized images, SVGs, and branding assets
├── styles/         # Global CSS and Tailwind configurations
└── types/          # Global TypeScript interfaces and definitions
```

---

## 📦 Installation & Setup

### Prerequisites
- Node.js v18+
- NPM or PNPM

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/farmy-landing.git
   cd farmy-landing
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   cp .env.example .env
   # Add your API base URL for live stats
   ```

### Running Locally
```bash
npm run dev   # Starts Vite development server
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 🔐 Security & Best Practices

- **Input Sanitization**: Secure handling of any user inputs in contact forms or search bars.
- **Frontend Protection**: Implementation of CSP headers and XSS prevention via modern React patterns.
- **Safe Linking**: All external links utilize `rel="noopener noreferrer"` for secure tab handling.
- **API Integrity**: Stats are fetched via secure, read-only public endpoints with error-resilient fallbacks.

---

## 🤝 Contributing

1. **Branching**: All features should be developed on `feature/` branches.
2. **Pull Requests**: PRs require a clean build and zero linting errors before review.
3. **Coding Standards**: Adherence to the project's ESLint and Prettier configurations is mandatory.

---

## 👥 Development Team

| Avatar | Name | Role | Links |
| :---: | :--- | :--- | :--- |
| <img src="https://github.com/fekikarim.png" width="40" height="40" style="border-radius:50%"> | **Karim Feki** | Lead Full-Stack Developer | [GitHub](https://github.com/fekikarim) • [LinkedIn](https://www.linkedin.com/in/karimfeki) • [Portfolio](https://karimfeki.is-a.dev) |
| <img src="https://github.com/nesrine-derouiche.png" width="40" height="40" style="border-radius:50%"> | **Nesrine Derouiche** | Frontend Developer | [GitHub](https://github.com/nesrine-derouiche) • [LinkedIn](https://linkedin.com/in/nesrine-derouiche) • [Portfolio](https://nesrine-derouiche.is-a.dev) |
| <img src="https://github.com/hamabtw.png" width="40" height="40" style="border-radius:50%"> | **Mohamed Abidi** | Backend Developer | [GitHub](https://github.com/hamabtw) • [LinkedIn](https://www.linkedin.com/in/med-abidi) • [Portfolio](https://hamabtw.github.io/portfolio) |
| <img src="https://github.com/oussemissaoui.png" width="40" height="40" style="border-radius:50%"> | **Oussema Issaoui** | Mobile Developer | [GitHub](https://github.com/oussemissaoui) |
| <img src="https://github.com/fatmahidouss.png" width="40" height="40" style="border-radius:50%"> | **Fatma Hidoussi** | Marketing & QA | [GitHub](https://github.com/fatmahidouss) • [LinkedIn](https://www.linkedin.com/in/fatma-hidoussi-497052236) |

---

Built with ❤️ by the **Farmy Team**.
© 2026 Farmy Platform. All rights reserved.

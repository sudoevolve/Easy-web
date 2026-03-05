# Cinematic Landing Page Builder

> A high-fidelity, cinematic landing page generator built with React, Tailwind CSS, and GSAP.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![GSAP](https://img.shields.io/badge/GSAP-3-green)

This project is a **"Cinematic Landing Page Builder"** capable of generating and switching between 4 distinct, high-end aesthetic presets. It features complex GSAP animations, interactive micro-components, and a responsive design system.

## 🌟 Features

- **4 Unique Aesthetic Presets**:
  - **A: Organic Tech** (Moss/Clay/Cream) - Clinical Boutique
  - **B: Midnight Luxe** (Obsidian/Champagne) - Dark Editorial
  - **C: Brutalist Signal** (Paper/Red/Black) - Raw Precision
  - **D: Vapor Clinic** (Deep Void/Plasma) - Neon Biotech
- **Advanced Animations**: Scroll-triggered reveals, parallax effects, and smooth transitions using GSAP.
- **Interactive Components**:
  - **Card Shuffler**: Cycling stack animation.
  - **Telemetry Typewriter**: Live code/text feed simulation.
  - **Scheduler**: Animated calendar cursor interaction.
- **Dynamic Routing**: Instant switching between presets via the navigation bar.
- **Responsive Design**: Mobile-first architecture with collapsible menus and adaptive layouts.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/easyweb-cinematic.git
   cd easyweb-cinematic
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [GSAP](https://gsap.com/) (ScrollTrigger)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)

## 📂 Project Structure

```
src/
├── components/
│   └── LandingPage.jsx  # The Master Component (All UI logic)
├── lib/
│   └── presets.js       # Design System Configuration (Colors, Fonts, Content)
├── App.jsx              # Routing Setup
├── index.css            # Global Styles & Tailwind Directives
└── main.jsx             # Entry Point
```

## 📦 Deployment

This project is configured for **GitHub Pages**.

### Automatic Deployment (GitHub Actions)

1. Push this code to a GitHub repository.
2. Go to **Settings > Pages** in your repository.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. The included workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site on every push to the `main` branch.

### Manual Deployment

You can also build locally and deploy the `dist` folder:

```bash
npm run build
# Upload the 'dist' folder to your host
```

## 📝 License

This project is licensed under the MIT License.

# NexaFlow 🚀

A fully responsive modern landing page built with **React** and **Tailwind CSS**.

![NexaFlow](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)

## 🌐 Live Demo

[View Live →](https://nexa-flow-tan.vercel.app)

---

## 📸 Preview

> A modern SaaS landing page for NexaFlow — a workflow automation platform that helps teams build faster and ship smarter.

---

## ✨ Features

- **Fully Responsive** — works on mobile, tablet, and desktop
- **Smooth Scroll Effect** — navbar changes style on scroll using `useState` + `useEffect`
- **Interactive Hero Section** — mouse-tracking gradient and tabbed code editor mockup
- **Syntax Highlighted Code** — using `react-syntax-highlighter` with Night Owl theme
- **Pricing Plans** — Starter, Professional, and Enterprise tiers
- **Testimonials Section** — customer reviews with profile images
- **Animated Components** — slide-in animations, hover effects, gradient backgrounds
- **Mobile Navigation** — hamburger menu with smooth open/close toggle

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI components and state management |
| Tailwind CSS | Styling and responsive design |
| Vite | Build tool and dev server |
| Lucide React | Icons |
| React Syntax Highlighter | Code display in Hero section |

---

## 📁 Project Structure

```
NexaFlow/
├── public/
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── codeExamples.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── tailwind.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/devesh-kahar/NexaFlow.git
```

2. Navigate to the project directory
```bash
cd NexaFlow
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🔑 Key React Concepts Used

- `useState` — managing scroll state, mobile menu toggle, active tab
- `useEffect` — scroll event listener, mouse move tracking, cleanup functions
- **Props** — passing `scrolled` state from `App.jsx` to `Navbar.jsx`
- **Component-based architecture** — each section is a separate reusable component
- **Conditional rendering** — mobile menu, active tab highlighting
- **Array mapping** — rendering features, pricing plans, testimonials dynamically

---

## 🙋‍♂️ Author

**Devesh Kahar** — B.Tech CSE Student at Ramdeobaba University, Nagpur  
[GitHub](https://github.com/devesh-kahar) · [LinkedIn](https://www.linkedin.com/in/devesh-kahar-029a79323/)

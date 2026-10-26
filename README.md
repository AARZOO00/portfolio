# Aarzoo — Personal Developer Portfolio

A personal developer portfolio built for **Aarzoo** (Software Developer, AI/ML Enthusiast, and Full-Stack Developer). 

Inspired by a pure black (`#050505`) and warm gold/yellow (`#FFC52E`) luxury tech aesthetic, this portfolio features clean typography, subtle glowing borders, responsive layouts, and zero fabricated claims or metrics.

---

## 🚀 Live Demo & Showcase

- **Local Development URL**: `http://localhost:5173/`
- **Frontend Framework**: React 19 + Vite
- **Styling**: Vanilla CSS with modern CSS variables, glassmorphism, and responsive breakpoints
- **Icons**: Lucide React + custom SVG icons
- **Target Roles**: Software Developer | AI/ML Engineer | Full-Stack Developer

---

## 🎨 Theme & Design System

| Element | Specification |
| :--- | :--- |
| **Background** | Pure Black (`#050505`) |
| **Accent Color** | Yellow/Gold (`#FFC52E` & `#FFD45E`) |
| **Card Background** | Dark Charcoal (`#0E0E12`) with subtle borders |
| **Typography** | `Plus Jakarta Sans`, `Outfit`, and `JetBrains Mono` |
| **Aesthetics** | Frosted glass navigation, glowing rim light, micro-animations |

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── projects/
│   │   ├── whatsapp-sentiment.jpg   # Project 1 Preview
│   │   ├── ai-counsellor.jpg        # Project 2 Preview
│   │   ├── mh-resilience.jpg        # Project 3 Preview
│   │   └── voice-translator.jpg     # Project 4 Preview
│   ├── github-banner.jpg            # Tech-themed background banner
│   ├── profile-placeholder.jpg      # Stylized gold-rim silhouette
│   ├── resume.pdf                   # Real, verified resume PDF
│   └── favicon.svg                  # Brand favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css        # Sticky glass navigation with mobile drawer
│   │   ├── Hero.jsx / .css          # Two-column hero with dual CTA & portrait card
│   │   ├── About.jsx / .css         # Authentic CS graduate bio & code card
│   │   ├── Skills.jsx / .css        # Categorized skills with progress-free badges
│   │   ├── WhatIBuild.jsx / .css    # Fresher-friendly engineering pillars
│   │   ├── Projects.jsx / .css      # 4 verified projects with live links
│   │   ├── Education.jsx / .css     # B.Tech CSE '26, 8.47 CGPA & editable university
│   │   ├── GithubSection.jsx / .css # Full-width tech banner & GitHub links
│   │   ├── Contact.jsx / .css       # Direct contacts, validation & backend guide
│   │   ├── Footer.jsx / .css        # Brand, social links & back-to-top button
│   │   └── Icons.jsx                # Custom Github & LinkedIn SVG icons
│   ├── data/
│   │   └── portfolioData.js         # Centralized, single-source-of-truth configuration
│   ├── App.jsx / .css               # Root component
│   ├── index.css                    # Design system tokens and global styles
│   └── main.jsx                     # Entry point
├── generate_resume.py               # Python ReportLab script to regenerate resume PDF
├── vercel.json                      # Vercel deployment configuration
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### 1. Installation

Clone or open the project folder in your terminal and install dependencies:

```bash
npm install
```

### 2. Run the Development Server

Start the local Vite dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build

To build the static distribution bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 👤 Customization Instructions

### 1. How to Replace the Portrait Photograph
By default, the portfolio displays an anonymous glowing tech silhouette (`/public/profile-placeholder.jpg`) that respects your privacy.

To display your own photo:
1. Place your picture (JPEG or PNG) into the `public/` directory named `profile.jpg` (or `profile.png`).
2. The portfolio is preconfigured to automatically detect and load `/profile.jpg`. If it doesn't find it, it gracefully falls back to `profile-placeholder.jpg`.
3. You can also change the path directly in `src/data/portfolioData.js`:
   ```javascript
   export const personalInfo = {
     // ...
     profileImage: "/your-photo-name.jpg",
   };
   ```

### 2. How to Replace Your Resume PDF
The repository includes a generated resume PDF at `public/resume.pdf` populated with your real academic metrics (B.Tech CSE, 8.47 CGPA), verified skills, and projects.

To update it with your own official PDF:
1. Export your final resume from Canva, Word, or LaTeX as a PDF.
2. Rename it to `resume.pdf`.
3. Drop it into the `public/` folder, replacing `public/resume.pdf`.
4. Any click on the **Resume** button in the Navbar or **Download Resume** in the Hero section will immediately download your file.

### 3. How to Update College / University Name
In `src/data/portfolioData.js`:
```javascript
academic: {
  degree: "B.Tech in Computer Science and Engineering",
  graduation: "May 2026",
  cgpa: "8.47 / 10",
  collegePlaceholder: "Your University / College Name Here",
  // ...
}
```
You can also click the pencil icon next to the institution name directly on the live website to test names interactively.

### 4. How to Connect the Contact Form to an Email Service
The contact form currently launches your default email client (`mailto:rmishra.connect@gmail.com`) with the user's name, email, and message pre-populated so that **no messages are lost** and **no fake "Message Sent" dialogs are displayed**.

If you want automated background email delivery:
1. Create a free account at [Formspree](https://formspree.io/).
2. Create a new form and copy your endpoint ID (e.g. `https://formspree.io/f/xbjnqkqe`).
3. In `src/components/Contact.jsx`, add your Formspree endpoint to the `<form>` element:
   ```jsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Or use [EmailJS](https://www.emailjs.com/) for zero-redirect client-side delivery.

---

## 🚢 Deploying to Vercel

This project is configured and ready for 1-click deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub (`https://github.com/AARZOO00/portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset: **Vite** (detected automatically).
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.

---

## 📄 License
Created for **Aarzoo**. All rights reserved.

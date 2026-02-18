# RayflixTheTechBro — Personal Portfolio Website

A fully responsive, animated personal portfolio website built by **Akpe (Rayflix) Samuel**, showcasing skills, projects, and contact information. Features a sleek dark theme with a signature green accent (`#b0fc51`), interactive particle backgrounds, smooth scroll animations, and a custom sidebar navigation.

---

## 🌐 Live Site

[rayflixthetechbro.vercel.app](https://rayflixthetechbro.vercel.app)

---

## ✨ Features

### 🎨 UI & Design
- Dark theme with signature `#b0fc51` green accent color
- Glassmorphism UI with `backdrop-filter: blur` effects throughout
- Animated particle background (hexagon shapes with interactive repulse/push)
- Custom font pairing: **Bitcount Grid Single**, **Playwrite AU NSW**, **Ubuntu**
- Smooth AOS (Animate On Scroll) transitions — fade, flip, zoom, and slide effects
- Hover effects, scale transforms, and glow shadows on interactive elements

### 🧭 Navigation
- Fixed sidebar navigation for desktop with active state highlighting and section progress tracker
- Mobile hamburger menu with animated open/close icon toggle
- Smooth scroll to section on nav link click
- Auto-closing mobile menu on link selection

### 🏠 Sections
| Section | Description |
|---|---|
| **Home** | Hero section with profile image, typewriter role animation, and social links |
| **About** | Glassmorphism card with bio, profile image, and CV download button |
| **Skills** | Tech grid showcasing all technologies with hover animations |
| **My Builds** | Project cards with images, descriptions, tags, live demo & GitHub links |
| **Contact** | Split-panel contact form powered by FormSubmit with social icon links |

### ⌨️ Typewriter Effect
- Cycles between `FRONTEND DEVELOPER` and `TECHNICAL WRITER` with a blinking cursor animation

### 📬 Contact Form
- Powered by [FormSubmit](https://formsubmit.co/) — no backend required
- Auto-response email on submission
- Custom redirect to `thanks.html` after submission

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Custom styling, animations, glassmorphism, and responsive layout |
| **Tailwind CSS (v4 Browser)** | Utility classes for layout and spacing |
| **JavaScript (Vanilla ES6)** | Interactivity, scroll logic, animations, typewriter effect |
| **AOS (Animate On Scroll)** | Scroll-triggered entrance animations |
| **Particles.js** | Interactive animated particle background |
| **Font Awesome** | Icons throughout the UI |
| **Google Fonts** | Ubuntu, Bitcount Grid Single, Playwrite AU NSW |
| **FormSubmit** | Contact form email handling (no backend) |

---

## 📁 Project Structure

```
rayflixthetechbro/
│
├── index.html              # Main HTML file (all sections)
├── style.css               # All custom styles and responsive breakpoints
├── script.js               # All JS logic (nav, scroll, AOS, particles, typewriter)
├── thanks.html             # Post-form-submission redirect page
├── My_Resume.pdf           # Downloadable CV
├── site.webmanifest        # PWA manifest
│
└── Pictures/
    ├── Web3_Rayflix.png        # Hero section image
    ├── About-me.png            # About section image
    ├── client-portfolio.png    # Project screenshot
    ├── weather-app.png         # Project screenshot
    ├── profile-card.png        # Project screenshot
    ├── ngo-web.png             # Project screenshot
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    └── apple-touch-icon.png
```

---

## 🖥️ Sections Breakdown

### Hero (Home)
- Profile image with hover glow effect
- Animated name and typewriter role text
- Social links: LinkedIn, GitHub, X (Twitter), Instagram
- "Hire Me" mailto button

### About
- Glassmorphism card with gradient background overlay
- Personal bio and developer story
- Download CV button linking to `My_Resume.pdf`

### Skills
- Technologies displayed: **HTML5, CSS3, Tailwind CSS, JavaScript, React, Python, Node.js, Next.js, GitHub**
- Responsive grid: 6 columns → 4 → 3 → 2 on smaller screens
- Hover lift animations on each tech icon

### My Builds
- **Client Portfolio Website** — HTML, CSS, JavaScript
- **Weather App** — JavaScript, API Integration
- **Profile Card** — HTML, CSS
- **Deaf NGO Website** — UI/UX, Frontend (Yagazie Weng Umezurike Foundation)

### Contact
- Split-panel layout (left: social + CTA, right: form)
- Social links: GitHub, X, Discord, LinkedIn, Telegram
- Form fields: First Name, Last Name, Email, Job Description
- Submission handled by FormSubmit with auto-response

---

## 📱 Responsive Design

| Breakpoint | Behaviour |
|---|---|
| `< 600px` | Sidebar hidden, mobile navbar shown with hamburger toggle |
| `600px – 768px` | Single-column layouts, stacked contact panels |
| `768px – 1024px` | 2-column project grid, adjusted card heights |
| `> 1024px` | Full sidebar, multi-column layouts, full desktop experience |

---

## 🚀 Running Locally

No build tools or installations required.

```bash
git clone https://github.com/Rayflix55/<repo-name>.git
cd <repo-name>
```

Then simply open `index.html` in your browser.

---

## 👤 Author

**Akpe (Rayflix) Samuel**
Frontend Developer

- 🌐 [rayflixthetechbro.vercel.app](https://rayflixthetechbro.vercel.app)
- 💼 [LinkedIn](https://linkedin.com/in/raymondsamuel993971329)
- 💻 [GitHub](https://github.com/Rayflix55)
- 📧 rayflix55@gmail.com

---

## 📄 License

This project is for portfolio and demonstration purposes.

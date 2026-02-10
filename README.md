# 🚀 Rayflix - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing web development skills, services, and contact information. Built with vanilla JavaScript, HTML, CSS, and Tailwind CSS.

![Portfolio Preview](Web3_Rayflix3.png)

## ✨ Features

### 🎨 Design & UI
- **Modern Dark Theme** - Sleek black background with red accent colors
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Interactive Particle Background** - Dynamic particle.js animation for visual appeal
- **Smooth Animations** - AOS (Animate On Scroll) library for elegant transitions
- **Fixed Sidebar Navigation** - Desktop sidebar with progress indicator and tooltips
- **Mobile Navigation** - Hamburger menu for seamless mobile browsing

### 🛠️ Interactive Components
- **Typewriter Effect** - Auto-rotating role titles (Software Developer, Software Engineer, Technical Writer)
- **Smooth Scrolling** - Navigate between sections with smooth scroll behavior
- **Active Section Highlighting** - Sidebar and navigation automatically highlight the current section
- **Progress Tracker** - Visual progress bar showing navigation through portfolio sections
- **Hover Effects** - Interactive hover states on buttons, icons, and service cards

### 📄 Sections

1. **Home** - Hero section with profile image, introduction, and call-to-action buttons
2. **About Me** - Personal background, mission statement, and experience counter
3. **Skills** - Visual representation of technical proficiencies (HTML, CSS, JavaScript, React)
4. **Services** - Six key service offerings:
   - Web Development
   - Mobile Development
   - Content Writing
   - SEO Optimization
   - Cloud Computing
   - DevOps Services
5. **Contact** - Functional contact form with FormSubmit integration

### 📬 Contact Form Features
- Email integration via FormSubmit
- Auto-response to form submissions
- Success redirect to thank you page
- Form validation
- Custom email template

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling and animations
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Interactive functionality
- **Particles.js** - Background particle animation
- **AOS Library** - Scroll animations
- **Font Awesome** - Icon library
- **Google Fonts** - Ubuntu, Bitcount Grid Single, Playwrite AU NSW
- **FormSubmit** - Contact form backend

## 📁 Project Structure

```
My_Portfolio/
│
├── index.html              # Main portfolio page
├── thanks.html            # Thank you page after form submission
├── style.css              # Custom styles
├── script.js              # JavaScript functionality
├── tailwind.config.js     # Tailwind configuration
├── Web3_Rayflix3.png      # Profile image
├── about-me-removebg-preview.png  # About section image
└── Rayflix_CV.docx        # CV/Resume document
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server for development

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/My_Portfolio.git
cd My_Portfolio
```

2. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

### Live Development
For the best development experience, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using VS Code Live Server extension
# Right-click index.html -> Open with Live Server
```

## ⚙️ Configuration

### Contact Form
Update the FormSubmit email in `index.html`:
```html
<form action="https://formsubmit.co/YOUR_EMAIL@gmail.com" method="POST">
```

### Personal Information
- Update profile images in the project root
- Modify text content in `index.html` sections
- Adjust skill percentages in the Skills section
- Update service descriptions in the Services section

### Styling
- **Brand Colors**: Modify the red accent color by searching and replacing `#ef4444` or `red-500` in CSS and HTML
- **Fonts**: Change Google Fonts imports in `style.css` and HTML
- **Animations**: Adjust AOS settings in `script.js` or HTML data attributes

## 🎯 Key Features Explained

### Sidebar Navigation
The desktop sidebar features:
- Icon-based navigation with tooltips
- Active state highlighting
- Progress bar showing section position
- Smooth scroll to sections

### Typewriter Effect
The homepage displays rotating role titles:
```javascript
const roles = [
  "SOFTWARE DEVELOPER",
  "SOFTWARE ENGINEER", 
  "TECHNICAL WRITER"
];
```
Customize by editing the `roles` array in `script.js`.

### Responsive Breakpoints
- **Mobile**: < 600px (hamburger menu)
- **Tablet**: 600px - 700px
- **Desktop**: > 700px (sidebar navigation)

## 📱 Mobile Optimization

- Touch-friendly navigation
- Optimized image sizes
- Responsive grid layouts
- Mobile-first hamburger menu
- Hidden sidebar on small screens
- Adjusted spacing and typography

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📝 Customization Guide

### Change Color Scheme
1. Find and replace `#ef4444` (red) in CSS files
2. Update Tailwind classes: `red-500`, `red-400`, etc.
3. Modify particle.js color in `script.js`

### Add New Section
1. Add section HTML in `index.html`
2. Add section ID to sidebar navigation array
3. Update progress bar calculation
4. Add scroll animations if desired

### Modify Skills
Edit the skills section in `index.html`:
```html
<div class="text-4xl text-red-500">85%</div>
```

## 🐛 Known Issues

- Thanks page redirect links may need adjustment based on deployment

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select branch and root folder
4. Save and wait for deployment

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Drag and drop project folder to Netlify
2. Or connect GitHub repository
3. Configure build settings if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Rayflix - The Tech Bro**
- Email: rayflix55@gmail.com
- Portfolio: [rayflixthetechbro.vercel.app](https://rayflixthetechbro.vercel.app)

## 🙏 Acknowledgments

- [Particles.js](https://vincentgarreau.com/particles.js/) - Background animations
- [AOS](https://michalsnik.github.io/aos/) - Scroll animations
- [Font Awesome](https://fontawesome.com/) - Icons
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [FormSubmit](https://formsubmit.co/) - Contact form handling

## 📞 Contact

For questions, suggestions, or collaborations, feel free to reach out through the contact form on the portfolio or email directly.

---

Made with ❤️ by Rayflix

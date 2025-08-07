console.log("JS is connected!");

// Smooth Scrolling for internal anchor links
const navLinks = document.querySelectorAll("a[href^='#']");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth"
      });
    }
  });
});

// Highlight active nav link on scroll
const sectionIds = Array.from(navLinks).map(link => link.getAttribute("href"));
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + 100;

  sectionIds.forEach(id => {
    const section = document.querySelector(id);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const link = document.querySelector(`a[href='${id}']`);

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        link.classList.add("text-white", "underline", "font-bold");
        link.classList.remove("text-red-500");
      } else {
        link.classList.remove("text-white", "underline", "font-bold");
        link.classList.add("text-red-500");
      }
    }
  });
});

// Custom animations per section
const animationConfigs = [
  { selector: "#first-section", hidden: ["translate-x-40"], visible: ["translate-x-0"] },
  { selector: "#first_section", hidden: ["-translate-x-40"], visible: ["translate-x-0"] },
  { selector: "#second_section", hidden: ["translate-x-40"], visible: ["translate-x-0"] },
  { selector: "#third_section .half", hidden: ["-translate-x-40"], visible: ["translate-x-0"] },
  { selector: "#third_section .half-right", hidden: ["translate-x-40"], visible: ["translate-x-0"] },
  { selector: "#fourth_section", hidden: ["scale-0", "opacity-0"], visible: ["scale-100", "opacity-100"] },
  { selector: "#fifth_section", hidden: ["translate-y-40"], visible: ["translate-y-0"] }
];

animationConfigs.forEach(config => {
  const elements = document.querySelectorAll(config.selector);

  elements.forEach((el, index) => {
    el.classList.add("opacity-0", ...config.hidden, "transition-all", "duration-700", "ease-out");
    el.style.transitionDelay = `${index * 150}ms`;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", ...config.hidden);
          el.classList.add("opacity-100", ...config.visible);
        } else {
          el.classList.remove("opacity-100", ...config.visible);
          el.classList.add("opacity-0", ...config.hidden);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(el);
  });
});

// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  hamburgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Light 3D Particle Background
particlesJS("particles-js", {
  particles: {
    number: {
      value: 200, // more white dots
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

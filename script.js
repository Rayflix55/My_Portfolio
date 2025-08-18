console.log("JS is connected!");

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Reset menu state on page load - MOVED TO TOP AND REMOVED DUPLICATE
  const navbar = document.querySelector("#first-section");
  const mobileMenu = document.getElementById("mobile-menu");

  // Reset navbar classes
  if (navbar) {
    navbar.classList.remove("menu-open", "expanded");
  }

  // Reset mobile menu to closed state
  if (mobileMenu) {
    mobileMenu.classList.remove("opacity-100", "visible", "max-h-96", "flex");
    mobileMenu.classList.add("opacity-0", "invisible", "max-h-0");
  }

  // Reset hamburger icon
  const hamburgerIcon = document.getElementById("hamburger-icon");
  if (hamburgerIcon) {
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
  }

  // Mobile menu functionality
  const menuToggle = document.getElementById("menu-toggle");

  if (menuToggle && mobileMenu && hamburgerIcon) {
    menuToggle.addEventListener("click", function () {
      // Toggle the navbar background expansion
      if (navbar) {
        navbar.classList.toggle("menu-open");
      }

      // Toggle the menu visibility
      if (mobileMenu.classList.contains("opacity-0")) {
        // Show menu
        mobileMenu.classList.remove("opacity-0", "invisible", "max-h-0");
        mobileMenu.classList.add("opacity-100", "visible", "max-h-96", "flex");
        // Change hamburger to X
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-times");
      } else {
        // Hide menu
        mobileMenu.classList.remove(
          "opacity-100",
          "visible",
          "max-h-96",
          "flex"
        );
        mobileMenu.classList.add("opacity-0", "invisible", "max-h-0");
        // Change X back to hamburger
        hamburgerIcon.classList.remove("fa-times");
        hamburgerIcon.classList.add("fa-bars");
      }
    });
  }

  // Smooth Scrolling for internal anchor links
  const navLinks = document.querySelectorAll("a[href^='#']");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });

        // Close mobile menu after clicking a link
        if (mobileMenu && mobileMenu.classList.contains("opacity-100")) {
          // Remove navbar expansion
          if (navbar) {
            navbar.classList.remove("menu-open");
          }

          mobileMenu.classList.remove(
            "opacity-100",
            "visible",
            "max-h-96",
            "flex"
          );
          mobileMenu.classList.add("opacity-0", "invisible", "max-h-0");
          if (hamburgerIcon) {
            hamburgerIcon.classList.remove("fa-times");
            hamburgerIcon.classList.add("fa-bars");
          }
        }
      }
    });
  });

  // Custom animations per section
  const animationConfigs = [
    {
      selector: "#first-section",
      hidden: ["translate-x-40"],
      visible: ["translate-x-0"],
    },
    {
      selector: "#first_section",
      hidden: ["-translate-x-40"],
      visible: ["translate-x-0"],
    },
    {
      selector: "#second_section",
      hidden: ["translate-x-40"],
      visible: ["translate-x-0"],
    },
    {
      selector: "#third_section .half",
      hidden: ["-translate-x-40"],
      visible: ["translate-x-0"],
    },
    {
      selector: "#third_section .half-right",
      hidden: ["translate-x-40"],
      visible: ["translate-x-0"],
    },
    {
      selector: "#fourth_section",
      hidden: ["scale-0", "opacity-0"],
      visible: ["scale-100", "opacity-100"],
    },
    {
      selector: "#fifth_section",
      hidden: ["translate-y-40"],
      visible: ["translate-y-0"],
    },
  ];

  animationConfigs.forEach((config) => {
    const elements = document.querySelectorAll(config.selector);

    elements.forEach((el, index) => {
      if (el) {
        el.classList.add(
          "opacity-0",
          ...config.hidden,
          "transition-all",
          "duration-700",
          "ease-out"
        );
        el.style.transitionDelay = `${index * 150}ms`;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                el.classList.remove("opacity-0", ...config.hidden);
                el.classList.add("opacity-100", ...config.visible);
              } else {
                el.classList.remove("opacity-100", ...config.visible);
                el.classList.add("opacity-0", ...config.hidden);
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(el);
      }
    });
  });

  // Highlight active nav link on scroll
  const sectionIds = Array.from(navLinks)
    .map((link) => link.getAttribute("href"))
    .filter((id) => id);

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;

    sectionIds.forEach((id) => {
      const section = document.querySelector(id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const link = document.querySelector(`a[href='${id}']`);

        if (
          link &&
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          // Remove active classes from all links
          navLinks.forEach((navLink) => {
            navLink.classList.remove("text-white", "underline", "font-bold");
            navLink.classList.add("text-red-500");
          });

          // Add active classes to current link
          link.classList.add("text-white", "underline", "font-bold");
          link.classList.remove("text-red-500");
        }
      }
    });
  }

  // Initialize AOS if available
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: false,
      mirror: true,
      offset: 0,
      duration: 1000,
      easing: "ease-out",
    });
    AOS.refreshHard();
  }

  // Initialize Particles.js if available
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ef4444",
        },
        shape: {
          type: "hexagon",
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ef4444",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 9,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.2,
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }

  // Sidebar functionality
  const sidebarSections = [
    "first_section",
    "second_section",
    "third_section",
    "fourth_section",
    "fifth_section",
  ];

  function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }
  }

  function updateSidebarActiveState() {
    const scrollPosition = window.scrollY + 100;

    sidebarSections.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      const button = document.querySelector(`[data-section="${sectionId}"]`);

      if (section && button) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          // Remove active class from all sidebar icons
          document.querySelectorAll(".sidebar-icon").forEach((btn) => {
            btn.classList.remove("active");
          });
          button.classList.add("active");

          // Update progress bar
          const progressBar = document.getElementById("progress-bar");
          const progressText = document.getElementById("progress-text");

          if (progressBar && progressText) {
            const progressPercent =
              ((index + 1) / sidebarSections.length) * 100;
            progressBar.style.width = progressPercent + "%";
            progressText.textContent = `${index + 1}/${sidebarSections.length}`;
          }
        }
      }
    });
  }

  // Event listeners
  window.addEventListener("scroll", function () {
    updateActiveNavLink();
    updateSidebarActiveState();
  });

  // Initial calls
  updateActiveNavLink();
  updateSidebarActiveState();

  // Typewriter Effect for Role Titles
  function initTypewriterEffect() {
    const roles = [
      "SOFTWARE DEVELOPER",
      "SOFTWARE ENGINEER",
      "TECHNICAL WRITER",
    ];

    const typewriterElement = document.getElementById("soft");

    if (!typewriterElement) return;

    // Remove AOS animation to avoid conflicts
    typewriterElement.removeAttribute("data-aos");
    typewriterElement.removeAttribute("data-aos-duration");

    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100; // Typing speed in milliseconds
    let deleteSpeed = 50; // Deleting speed in milliseconds
    let pauseTime = 2000; // Pause time between roles

    function typeWriter() {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        // Deleting characters
        typewriterElement.textContent = currentRole.substring(
          0,
          currentCharIndex - 1
        );
        currentCharIndex--;

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          setTimeout(typeWriter, 300); // Brief pause before typing next role
          return;
        }

        setTimeout(typeWriter, deleteSpeed);
      } else {
        // Typing characters
        typewriterElement.textContent = currentRole.substring(
          0,
          currentCharIndex + 1
        );
        currentCharIndex++;

        if (currentCharIndex === currentRole.length) {
          isDeleting = true;
          setTimeout(typeWriter, pauseTime); // Pause before deleting
          return;
        }

        setTimeout(typeWriter, typeSpeed);
      }
    }

    // Start the typewriter effect
    typeWriter();
  }

  // Inject CSS for blinking cursor effect
  function injectTypewriterCSS() {
    const typewriterCSS = `
            #soft::after {
                content: '|';
                color: #ef4444;
                animation: blink 1s infinite;
                margin-left: 2px;
            }

            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;

    const style = document.createElement("style");
    style.textContent = typewriterCSS;
    document.head.appendChild(style);
  }

  // Initialize typewriter effect
  injectTypewriterCSS();
  initTypewriterEffect();

  // Make scrollToSection globally available
  window.scrollToSection = scrollToSection;
});

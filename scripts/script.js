/**
 * Personal Portfolio Modular Script
 * Vanilla ES6+ JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileNav();
  initActiveNavOnScroll();
  initScrollReveal();
  initContactFormValidation();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. Dark / Light Theme Toggle with LocalStorage
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("theme");

  // Apply saved theme or system preference
  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark"); // FIX: "dark" was unquoted (ReferenceError)
  }

  themeBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

/* --------------------------------------------------------------------------
   2. Responsive Mobile Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close mobile nav when clicking any link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* --------------------------------------------------------------------------
   3. Active Navigation Link Highlighting on Scroll
   -------------------------------------------------------------------------- */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Scroll Reveal Animations (Intersection Observer)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px",
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Reveal once
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => revealObserver.observe(el));
}

/* --------------------------------------------------------------------------
   5. Contact Form Client-Side Validation
   -------------------------------------------------------------------------- */
function initContactFormValidation() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const statusDiv = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === "") {
      showError("name-error", true);
      isValid = false;
    } else {
      showError("name-error", false);
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showError("email-error", true);
      isValid = false;
    } else {
      showError("email-error", false);
    }

    // Validate Message
    if (messageInput.value.trim().length < 10) {
      showError("message-error", true);
      isValid = false;
    } else {
      showError("message-error", false);
    }

    // Process Submission
    if (isValid) {
      statusDiv.style.color = "#10b981";
      statusDiv.textContent =
        "Thank you! Your message has been validated and sent successfully.";
      form.reset();
    } else {
      statusDiv.style.color = "#ef4444";
      statusDiv.textContent = "Please correct the highlighted fields above.";
    }
  });

  function showError(elementId, show) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
      errorEl.style.display = show ? "block" : "none";
    }
  }
}

/* --------------------------------------------------------------------------
   6. Scroll-To-Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

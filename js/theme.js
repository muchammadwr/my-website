/**
 * Theme Management Module
 * Handles Light/Dark theme toggling, accessible ARIA labels,
 * localStorage persistence, and system color scheme fallback.
 */
(function () {
  const STORAGE_KEY = "mw-portfolio-theme";
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");

  function getCurrentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme, persist = false) {
    root.setAttribute("data-theme", theme);
    if (persist) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
    if (toggleBtn) {
      const nextLabel =
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
      toggleBtn.setAttribute("aria-label", nextLabel);
      toggleBtn.setAttribute("title", nextLabel);
    }
  }

  // Initialize ARIA label based on early head script state
  applyTheme(getCurrentTheme(), false);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
      applyTheme(nextTheme, true);
    });
  }

  // Listen for OS theme changes if user hasn't explicitly saved a preference
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (event) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(event.matches ? "dark" : "light", false);
      }
    });
  }
})();

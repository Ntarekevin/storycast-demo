/**
 * Main application scripts for StoryCast
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ─────────────────────────────────────────────────
     Mobile Navigation Toggle
  ───────────────────────────────────────────────── */
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      
      // Toggle states
      navToggle.setAttribute("aria-expanded", !isExpanded);
      navToggle.classList.toggle("is-active", !isExpanded);
      
      if (!isExpanded) {
        mobileNav.removeAttribute("hidden");
        // small timeout to allow CSS transition after removing hidden
        setTimeout(() => {
          mobileNav.classList.add("is-open");
        }, 10);
      } else {
        mobileNav.classList.remove("is-open");
        // Wait for CSS transition to finish before hiding it from screen readers
        setTimeout(() => {
          mobileNav.setAttribute("hidden", "true");
        }, 300); // matches the 300ms CSS transition
      }
    });

    // Close mobile nav when clicking a link
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.classList.remove("is-active");
        mobileNav.classList.remove("is-open");
        setTimeout(() => {
          mobileNav.setAttribute("hidden", "true");
        }, 300);
      });
    });
  }
});

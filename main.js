document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      // Change icon
      const icon = navToggle.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });
  }

  // Close menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      const icon = navToggle.querySelector("i");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    });
  });

  // Dynamic Year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Navbar Scroll Effect (Floating Pill)
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Copy Email to Clipboard
  const copyBtns = document.querySelectorAll(".copy-btn");
  copyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const email = btn.previousElementSibling.textContent;
      navigator.clipboard.writeText(email).then(() => {
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(() => {
          btn.innerHTML = originalIcon;
        }, 2000);
      });
    });
  });

  // Scroll Animations (Intersection Observer)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".fade-in, .project-card, .service-card, .lab-item")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(el);
    });

  // Add visible class styling dynamically or in CSS
  // Moved to style.css

  // Cursor Glow Effect
  const cursorGlow = document.querySelector(".cursor-glow");
  if (cursorGlow) {
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursorGlow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(45, 212, 191, 0.15), transparent 40%)`;
    });
  }

  // Privacy/Cookie Banner Logic
  const privacyBanner = document.getElementById("privacy-banner");
  const acceptPrivacyBtn = document.getElementById("accept-privacy");

  // Check if user has already accepted
  if (!localStorage.getItem("privacyAccepted")) {
    setTimeout(() => {
      privacyBanner.classList.add("show");
    }, 2000); // Show after 2 seconds
  }

  if (acceptPrivacyBtn) {
    acceptPrivacyBtn.addEventListener("click", () => {
      // Save to Local Storage
      localStorage.setItem("privacyAccepted", "true");
      // Hide Banner
      privacyBanner.classList.remove("show");
    });
  }
});

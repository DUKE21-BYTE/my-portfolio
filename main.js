document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu   = document.getElementById("nav-menu");
  const navLinks  = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = navToggle.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });

    // Close menu when clicking a link (only when toggle exists)
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = navToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      });
    });
  }

  // Dynamic Year (works on all pages)
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Dynamic year in article footers (hardcoded spans)
  document.querySelectorAll("footer p").forEach((p) => {
    p.innerHTML = p.innerHTML.replace(
      /© \d{4}/,
      `© ${new Date().getFullYear()}`
    );
  });

  // Navbar Scroll Effect (Floating Pill)
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    });
  }

  // Copy Email to Clipboard
  const copyBtns = document.querySelectorAll(".copy-btn");
  copyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const email = btn.previousElementSibling?.textContent?.trim();
      if (!email) return;
      navigator.clipboard.writeText(email).then(() => {
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(() => { btn.innerHTML = originalIcon; }, 2000);
      });
    });
  });

  // Scroll Animations (Intersection Observer)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document
    .querySelectorAll(".fade-in, .project-card, .service-card, .lab-item")
    .forEach((el) => {
      el.style.opacity    = "0";
      el.style.transform  = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(el);
    });

  // Cursor Glow Effect
  const cursorGlow = document.querySelector(".cursor-glow");
  if (cursorGlow) {
    document.addEventListener("mousemove", (e) => {
      cursorGlow.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(45, 212, 191, 0.15), transparent 40%)`;
    });
  }

  // Privacy / Cookie Banner
  const privacyBanner   = document.getElementById("privacy-banner");
  const acceptPrivacyBtn = document.getElementById("accept-privacy");

  if (privacyBanner && !localStorage.getItem("privacyAccepted")) {
    setTimeout(() => privacyBanner.classList.add("show"), 2000);
  }

  if (acceptPrivacyBtn) {
    acceptPrivacyBtn.addEventListener("click", () => {
      localStorage.setItem("privacyAccepted", "true");
      privacyBanner.classList.remove("show");
    });
  }

  // Contact Form — WhatsApp Submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name    = document.getElementById("name").value.trim();
      const email   = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) return;

      const text = `Hello Dennis! 👋\n\n*Name:* ${name}\n*Email:* ${email}\n\n*Message:*\n${message}`;
      const url  = `https://wa.me/254758596269?text=${encodeURIComponent(text)}`;

      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Opening WhatsApp...';
      submitBtn.disabled = true;

      setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
      }, 600);
    });
  }
});

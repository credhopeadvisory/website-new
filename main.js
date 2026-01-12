document.addEventListener("DOMContentLoaded", function () {
  
  // 1. WhatsApp Click Handler
  document.addEventListener("click", function (e) {
    const target = e.target.closest("[data-wa]");
    if (!target) return;

    e.preventDefault();

    window.open(
      "https://wa.me/919108601385?text=" +
        encodeURIComponent(target.dataset.wa),
      "_blank"
    );
  });

  // 2. Mobile Menu Toggle Logic
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuToggle && nav) {
    // Toggle menu on button click
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      nav.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  }
});

// 3. Sticky Header Logic
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.remove("home-nav");
    header.classList.add("scrolled");
  } else {
    header.classList.add("home-nav");
    header.classList.remove("scrolled");
  }
});

// 4. Help Toolkit Popup Logic
window.addEventListener("load", () => {
  const toolkit = document.getElementById("helpToolkit");

  setTimeout(() => {
    toolkit.classList.add("show");
  }, 3000);

  toolkit.addEventListener("click", (e) => {
    if (e.target.classList.contains("toolkit-close")) {
      toolkit.remove();
      return;
    }

    const msg = encodeURIComponent(
      "Hello Credhope Advisory, I need help improving my credit score."
    );
    window.open(`https://wa.me/919108601385?text=${msg}`, "_blank");
  });
});
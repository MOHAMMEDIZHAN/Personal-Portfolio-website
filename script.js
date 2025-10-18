// Dark Mode Toggle
const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Typing Effect
const typingElement = document.getElementById("typing");
const textArray = ["Business Analyst", "Data Analyst", "Software Developer"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  if (textIndex >= textArray.length) textIndex = 0;

  currentText = textArray[textIndex];
  typingElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) textIndex++;
    setTimeout(typeEffect, 800);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Scroll to Top—because scrolling all the way up is for suckers
const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === Responsive Navbar Toggle ===
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Toggle icon change (bars ↔ close)
  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// Close sidebar when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    const icon = menuToggle.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});

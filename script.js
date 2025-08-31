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

// Form Validation (because people just love leaving stuff blank)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Debug logs, feel free to roast yourself later
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Message sent successfully!");
  this.reset();
});

// Contact Form with EmailJS (double the fun, double the submit, right?)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // EmailJS because SMTP is so last decade
  email.send("service_uq0h3dq", "template_ggcj9xe", {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "izhan1033@gmail.com"
  })
  .then(() => {
      alert("Message sent successfully!");
      this.reset();
  }, (error) => {
      console.error("Email failed:", error);
      alert("Oops! Something went wrong. Please try again.");
  });
});
// script.js

const rotatingTexts = [
    "Manage Your Customers",
    "Boost Team Productivity",
    "Automate Your Workflow",
    "Grow Your Business Smartly"
  ];
  
  let currentText = 0;
  const rotatingElement = document.getElementById("rotating-text");
  
  function rotateText() {
    currentText = (currentText + 1) % rotatingTexts.length;
    rotatingElement.textContent = rotatingTexts[currentText];
    rotatingElement.classList.remove("fade");
    void rotatingElement.offsetWidth; // trigger reflow
    rotatingElement.classList.add("fade");
  }
  
  setInterval(rotateText, 3000);
  
  // Form validation
  const form = document.getElementById("demoRequest");
  const formMessage = document.getElementById("formMessage");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
  
    if (!name || !email || !email.includes("@")) {
      formMessage.textContent = "Please enter a valid name and email.";
      formMessage.style.color = "red";
      return;
    }
  
    formMessage.textContent = "Thank you! We will get in touch soon.";
    formMessage.style.color = "green";
    form.reset();
  });
  

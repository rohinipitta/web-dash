const texts = [
  "Empower Your Business",
  "Convert Leads Faster",
  "Smart CRM for Smarter Teams"
];

let index = 0;
setInterval(() => {
  document.getElementById("hero-text").innerText = texts[index];
  index = (index + 1) % texts.length;
}, 3000);

function showSuccess(event) {
  event.preventDefault();
  alert("Thank you! Your demo request has been recorded.");
}

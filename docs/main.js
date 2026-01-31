// Set current year in footer if element exists.
const yearNode = document.getElementById("current-year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

// Smooth scroll for in-page anchor links (optional).
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

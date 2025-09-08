const footer = document.getElementById("footer-text");
const today = new Date().toLocaleDateString();
let count = localStorage.getItem("visit-count") || 0;
count++;
localStorage.setItem("visit-count", count);
footer.innerHTML = `📅 ${today} | You are visitor #${count}`;

const toggleBtn = document.getElementById("mode-toggle");
if (toggleBtn) {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "🌙 Dark Mode";
  } else {
    toggleBtn.textContent = "☀️ Light Mode";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    toggleBtn.textContent = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}
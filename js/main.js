function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  if (menu) {
    menu.classList.toggle('active');
  }
}

document.addEventListener('click', function (event) {
  const menu = document.getElementById('nav-menu');
  const toggle = document.querySelector('.mobile-toggle');

  if (!menu || !toggle) return;

  if (!menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Netlify handles form submission - no JS needed
});
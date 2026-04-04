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
  const form = document.querySelector('.contact-form form');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thank you for contacting Northern Desert Mechanical. This demo form is ready to be connected to your preferred email or backend service.');
      form.reset();
    });
  }
});
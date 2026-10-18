const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-list');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.querySelector('.form-message');
    message.textContent = 'Thank you! Your message has been received.';
    form.reset();
  });
}

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.primary-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });
}

document.querySelectorAll('.faq-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.closest('.faq-item')?.querySelector('.faq-answer');
    if (!answer) return;

    const willOpen = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(willOpen));
    answer.hidden = !willOpen;
  });
});

const demoForm = document.querySelector('[data-demo-form]');
const formMessage = document.querySelector('[data-form-message]');

demoForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formMessage) {
    formMessage.textContent = '입력 내용을 확인했습니다. 실제 문의 채널을 연결하면 이 정보가 안전하게 전달됩니다.';
    formMessage.classList.add('success');
  }
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());

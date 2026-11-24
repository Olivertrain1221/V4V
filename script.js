const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');
const backdrop = document.querySelector('.nav-backdrop');
const navigation = document.querySelector('.side-nav');

function setMenuOpen(isOpen) {
  document.body.classList.toggle('menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  navigation.setAttribute('aria-hidden', String(!isOpen));
  if (isOpen) {
    closeButton.focus();
  } else {
    menuButton.focus();
  }
}

menuButton.addEventListener('click', () => setMenuOpen(true));
closeButton.addEventListener('click', () => setMenuOpen(false));
backdrop.addEventListener('click', () => setMenuOpen(false));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
    setMenuOpen(false);
  }
});

navigation.addEventListener('keydown', (event) => {
  if (event.key !== 'Tab') return;

  const focusable = navigation.querySelectorAll('a, button');
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

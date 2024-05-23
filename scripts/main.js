window.onbeforeunload = () => {
  for (const form of document.querySelectorAll("form")) {
    form.reset()
  }
};

// Tooggle Button Hamburger
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navLists = document.querySelector('nav');

  burger.addEventListener('click', () => {
    navLists.classList.toggle('nav-active');
    burger.classList.toggle('toggle-burger');
  });
};

navSlide();
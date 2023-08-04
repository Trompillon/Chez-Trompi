const container = document.querySelector('.container');
container.addEventListener('mouseenter', () => {
  container.classList.add('hover');
});

container.addEventListener('mouseleave', () => {
  container.classList.remove('hover');
});
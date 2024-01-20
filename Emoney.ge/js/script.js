const button = document.querySelector("button");
button.addEventListener('click', (e) => {
  e.target.classList.add('animate');
  setTimeout(() => {
    e.target.classList.remove('animate');
  }, 4500);
});
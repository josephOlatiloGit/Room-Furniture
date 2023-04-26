const btn = document.querySelector(".toggle");
const close = document.querySelector(".close-bar");
const navLinlk = document.querySelector(".mobile-menu");
const body = document.querySelector(".hero");

console.log(btn);
console.log(close);
console.log(navLinlk);

btn.onclick = function () {
  navLinlk.classList.toggle("active");
};

close.onclick = function () {
  return navLinlk.classList.toggle("active");
};

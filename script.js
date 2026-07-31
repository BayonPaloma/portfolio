const nav = document.querySelector("#js-nav");
const abrir = document.querySelector("#js-abrir");
const cerrar = document.querySelector("#js-cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  document.body.classList.add("no-scroll");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  document.body.classList.remove("no-scroll");
});

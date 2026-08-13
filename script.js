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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contacto form");
  const popup = document.getElementById("customPopup");
  const closePopupBtn = document.getElementById("closePopup");

  if (form && popup && closePopupBtn) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      popup.classList.add("show");

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("Formulario enviado con éxito");
            form.reset();
          } else {
            console.error("Hubo un problema con el envío");
          }
        })
        .catch((error) => {
          console.error("Error de red:", error);
        });
    });

    closePopupBtn.addEventListener("click", () => {
      window.location.href = "/";
    });
  }
});

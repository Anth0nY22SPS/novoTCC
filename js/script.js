document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const input = form.querySelector("input[type='email']");
      const email = input.value.trim();

      if (email !== "") {
        alert("🌿 Email enviado com sucesso!");
        input.value = "";
      } else {
        alert("Por favor, digite um e-mail válido.");
      }
    });
  }
});

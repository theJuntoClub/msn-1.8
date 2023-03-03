const form = document.querySelector("#login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // conseguir el email y la contra del input del usuario
  const email = document.querySelector("#email").value;
  const pass = document.querySelector("#pass").value;
  // chequear si el email y la contra coicidan ("match") con los inputs
  if (email === "thjuntoclub@gmail.com" && pass === "1234") {
    // si coinciden, ingresamos a nuestra app final
    window.location.href = "./pages/master.html";
    alert("si! ya sos parte de la comunidad!! 👍");
  } else {
    alert("ups, tus datos no coinciden 👎");
  }
});

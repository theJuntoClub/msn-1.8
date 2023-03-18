const myBurgerChat = document.getElementById("burger-chat");
const myChat = document.getElementById("chat");

myBurgerChat.addEventListener("click", () => {
  myChat.classList.toggle("show-chat");
  myBurgerChat.classList.toggle("show-x");
  const showX = false;
  /*   if (!showX) {
    myBurgerChat.classList.toggle("show-x");
    showX = true;
  } */
});

// sweet alert
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Sesión iniciada 🔥",
  showConfirmButton: false,
  timer: 1500,
});

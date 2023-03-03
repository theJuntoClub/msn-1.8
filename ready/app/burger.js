const myBurgerChat = document.getElementById("burger-chat");
const myChat = document.getElementById("chat");

myBurgerChat.addEventListener("click", () => {
  myChat.classList.toggle("show-chat");
  myBurgerChat.classList.toggle("show-x");
});

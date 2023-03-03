const dataClone = document.querySelector("[data-clone]");
const dataCard = document.querySelector("[data-card]");
const dataInput = document.querySelector("[data-Input]");
let users = [];

dataInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.login.toLowerCase().includes(value) ||
      user.url.toLowerCase().includes(value);
    user.element.classList.toggle("ocultar", !isVisible);
  });
});

fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = dataClone.content.cloneNode(true).children[0];
      const cardNick = card.querySelector("[data-nick]");
      const cardUrl = card.querySelector("[data-url]");
      cardNick.textContent = user.login;
      cardUrl.textContent = user.url;
      console.log(card);
      dataCard.append(card);
      return {
        login: user.login,
        url: user.url,
        element: card,
      };
    });
  });

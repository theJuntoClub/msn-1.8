const containerMsg = document.getElementById("cloud");
const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

btn.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let newMsg = document.createElement("LI");
    newMsg.classList.add("new-msg");
    newMsg.textContent = msg.value;
    containerMsg.appendChild(newMsg);
    msg.value = "";
  }
});

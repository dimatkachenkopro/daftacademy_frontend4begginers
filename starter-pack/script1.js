const div = document.querySelector(".concerts__info");
const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");
const btn4 = document.querySelector("#button4");

btn1.addEventListener("click", function() {
  const oldItem = div.querySelector("#button1");
  const newItem = document.createElement("strong");
  newItem.innerText = "Have fun!";

  div.replaceChild(newItem, oldItem);
});

btn2.addEventListener("click", function() {
  const oldItem = document.querySelector("#button2");
  const newItem = btn2.createElement("strong");
  newItem.innerText = "Have fun!";

  div.replaceChild(newItem, oldItem);
});

btn3.addEventListener("click", function() {
  const oldItem = div.querySelector("#button3");
  const newItem = document.createElement("strong");
  newItem.innerText = "Have fun!";

  div.replaceChild(newItem, oldItem);
});

btn4.addEventListener("click", function() {
  const oldItem = div.querySelector("#button4");
  const newItem = document.createElement("strong");
  newItem.innerText = "Have fun!";

  div.replaceChild(newItem, oldItem);
});

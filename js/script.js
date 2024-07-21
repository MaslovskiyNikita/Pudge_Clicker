import { model } from "./model.js";

const Pudge_Clicker = document.querySelector("#app");

model.forEach(block => {
  Pudge_Clicker.insertAdjacentHTML("beforeend", block.toHTML());
});
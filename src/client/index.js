import "./styles/style.scss";
import { handleSubmit } from "./js/handleFormSubmit";

window.addEventListener("DOMContentLoaded", () => {
  const buttonSubmit = document.getElementById("btn-submit");
  buttonSubmit.addEventListener("click", (event) => {
    handleSubmit(event);
  });
});

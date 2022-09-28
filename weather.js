const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".container input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

localStorage.setItem("tokenKey", "Qz4DOSmGIic4qC2ylwIAmyS1TYddM0v0oDuClt");
// localStorage.setItem(
//   "tokenKeyEncripted",
//   EncryptStringAES("4fe421f798cb1c4f14dd3423ae2428f6")
// );

form.addEventListener("submit", () => {
  getWeatherDataFromApi();
});
//* get api func.
cons;

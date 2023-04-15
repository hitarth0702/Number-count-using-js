var count = 0;

document.querySelector("#increase").addEventListener("click", () => {
  changeCount(1);
});

document.querySelector("#decrease").addEventListener("click", () => {
  changeCount(-1);
});

document.querySelector("#two").addEventListener("click", () => {
  changeCount(2);
});

document.querySelector("#four").addEventListener("click", () => {
  changeCount(4);
});

document.querySelector("#six").addEventListener("click", () => {
  changeCount(6);
});

document.querySelector("#eight").addEventListener("click", () => {
  changeCount(8);
});

changeCount = (number) => {
  count += number;
  document.querySelector("#count").textContent = count;
}

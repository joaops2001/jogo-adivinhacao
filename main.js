const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1;
const btnTry = document.querySelector("#btnTry");
const btnPlayAgain = document.querySelector("#btnPlayAgain");

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");
  if (Number(inputNumber.value) <= 10 && Number(inputNumber.value) >= 0) {
    if (Number(inputNumber.value) == randomNumber) {
      screen1.classList.add("hide");
      screen2.classList.remove("hide");
      screen2.querySelector(
        "h2"
      ).innerText = `Acertou em ${xAttemps} vezes, o número era ${randomNumber}`;
    }
    xAttemps++;
    inputNumber.value = "";
  }
}

function handlePlayAgain(event) {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
  xAttemps = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function keyDownEnter(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handlePlayAgain();
  }
}

btnTry.addEventListener("click", handleTryClick);

btnPlayAgain.addEventListener("click", handlePlayAgain);

document.addEventListener("keydown", keyDownEnter);

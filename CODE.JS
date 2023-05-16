const numbers = new Set();
const errorSound = new Audio("cut2.mp3");
const successSound = new Audio("cut1.mp3");

document.getElementById("submit-button").addEventListener("click", checkNumber);

function checkNumber() {
  const number = parseInt(document.getElementById("number").value);

  if (checkValid(number)) {
    if (checkDuplicate(number)) {
      document.getElementById("result").innerHTML = "Wrong Number! Please enter a unique number.";
      errorSound.play();
    } else {
      numbers.add(number);
      document.getElementById("result").innerHTML = `Numbers entered: ${[...numbers].join(", ")}`;
      successSound.play();
    }
  } else {
    document.getElementById("result").innerHTML = "Please enter a valid number between 1 and 100.";
  }

  document.getElementById("number").value = "";
}

function checkValid(number) {
  return !isNaN(number) && number >= 1 && number <= 100;
}

function checkDuplicate(number) {
  return numbers.has(number);
}

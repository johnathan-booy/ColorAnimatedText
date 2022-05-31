const allLetters = document.querySelectorAll("h1 span");

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b}`;
}

setInterval(function () {
  for (const letter of allLetters) {
    letter.style.color = randomColor();
  }
}, 1000);

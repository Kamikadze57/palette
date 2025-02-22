document.addEventListener("DOMContentLoaded", function () {
  const gameBoard = document.getElementById("gameBoard");
  const addSquareBtn = document.getElementById("addSquare");

  gameBoard.addEventListener("click", function (event) {
    if (event.target.classList.contains("square")) {
      event.target.style.opacity = "0";
      setTimeout(() => event.target.remove(), 300);
    }
  });

  function createSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = gameBoard.children.length + 1;
    square.style.backgroundColor = getRandomColor();
    gameBoard.appendChild(square);
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  addSquareBtn.addEventListener("click", createSquare);
});

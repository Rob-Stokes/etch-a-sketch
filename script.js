const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement("div");
    gridContainer.appendChild(div);
}

    const gridSquares = document.querySelectorAll(".grid-container div");
    gridSquares.forEach((div) => {
      div.addEventListener("mouseover", () => {
      div.classList.add("filled");
      })
    });


let gridSize = 0
let totalSquares = 0
const btnNew = document.querySelector("#new");
btnNew.addEventListener('click', () => {
  gridSize = parseInt(prompt("Choose a grid size (2-100)"));
  totalSquares = gridSize * gridSize;
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener('click', () => {
  gridSquares.forEach((div) => {
      div.classList.remove("filled");
      })
    });
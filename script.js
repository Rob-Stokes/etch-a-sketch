const gridContainer = document.querySelector(".grid-container");

function createGrid() {
for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement("div");
    gridContainer.appendChild(div);
    let squareSize = 100/gridSize;
    div.style.flexBasis = squareSize + '%';
}
}

function clearGrid() {
    while (gridContainer.firstElementChild) {
    gridContainer.removeChild(gridContainer.firstElementChild);
}
}


let gridSize = 16
let totalSquares = 256
createGrid();
addHoverListeners();

const btnNew = document.querySelector("#new");
btnNew.addEventListener('click', () => {
  gridSize = parseInt(prompt("Choose a grid size (2-100)"));
  totalSquares = gridSize * gridSize;
  clearGrid();
  createGrid();
  addHoverListeners();
});

function addHoverListeners() {    
const gridSquares = document.querySelectorAll(".grid-container div");
    gridSquares.forEach((div) => {
      div.addEventListener("mouseover", () => {
      div.classList.add("filled");
      })
    });
  };

const btnClear = document.querySelector("#clear");
btnClear.addEventListener('click', () => {
  const gridSquares = document.querySelectorAll(".grid-container div");
  gridSquares.forEach((div) => {
      div.classList.remove("filled");
      })
    });
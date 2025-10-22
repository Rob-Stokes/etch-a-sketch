const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    gridContainer.appendChild(div);
}

    const gridSquares = document.querySelectorAll(".grid-container div");
    gridSquares.forEach((div) => {
      div.addEventListener("mouseover", () => {
      div.classList.add("filled");
      })
    });

const btnNew = document.querySelector("#new");
btnNew.addEventListener('click', () => {
  prompt("Choose a grid size (2-100)");
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener('click', () => {
  gridSquares.forEach((div) => {
      div.classList.remove("filled");
      })
    });
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


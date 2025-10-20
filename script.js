const gridContainer = document.querySelector(".grid-container");


for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "border: 2px solid black;");
    gridContainer.appendChild(div);
}

const container = document.getElementById("container")

function createGrid(numRows, numCols) {
    container.style.setProperty('--grid-rows', numRows);
    container.style.setProperty('--grid-cols', numCols);
    for (i=0; i < (numRows * numCols); i++) {
        let newItem = document.createElement("div");
        container.appendChild(newItem).className = "grid-item"
    }
}

createGrid(20, 20);

let blocks = document.querySelectorAll('.grid-item')

blocks.forEach(block => addEventListener('mouseover', updateBlockColor))

function updateBlockColor(e) {
    let item = document.elementFromPoint(e.clientX, e.clientY)
    if (item.className === "grid-item"){
        item.setAttribute("style", "background-color: black")
    }

    e.stopPropagation();
}
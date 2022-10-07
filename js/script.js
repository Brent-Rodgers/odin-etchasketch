const container = document.getElementById("container")
const gridInput = document.getElementById("grid-size")

function createGrid(numRows, numCols) {
    while (container.firstChild) {
        container.firstChild.remove()
    }

    container.style.setProperty('--grid-rows', numRows);
    container.style.setProperty('--grid-cols', numCols);
    for (i=0; i < (numRows * numCols); i++) {
        let newItem = document.createElement("div");
        container.appendChild(newItem).className = "grid-item"
    }
}

createGrid(gridInput.value, gridInput.value);

gridInput.addEventListener('change', () => {
    createGrid(gridInput.value, gridInput.value)
});

let blocks = document.querySelectorAll('.grid-item')

blocks.forEach(block => addEventListener('mouseover', updateBlockColor))

function updateBlockColor(e) {
    let item = document.elementFromPoint(e.clientX, e.clientY)
    if (item.className === "grid-item"){
        item.setAttribute("style", "background-color: black")
    }

    e.stopPropagation();
}
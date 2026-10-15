const container = document.createElement("div")
container.id = "container"

let size = 16

function createRow(row) {

    for (let i = 0; i < size; i++) {
    const cuadricula = document.createElement("div")
    cuadricula.classList.add("cuadricula")
    cuadricula.addEventListener("mouseenter", (e) => {
        const cuadro = e.target
        const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        cuadro.style.backgroundColor = colorAleatorio

    })
    row.appendChild(cuadricula)
    }
    container.appendChild(row)
}

function insertColumn() {
        
    for (let k = 0; k < size; k++){
        const row = document.createElement("div")
        row.classList.add("row")
        createRow(row)
    }
}

function remove() {
    const elements = document.querySelectorAll(".row")
    elements.forEach(element => {
        element.remove()        
    });
}

const button = document.createElement("button")
button.textContent = "Personalizar cuadricula"
button.id = "button"
button.addEventListener("click", (e) => {
    size = prompt("Ingresa el nuevo tamaño de la cuadricula maximo 100")
    if ((size !== null) && (size !== "") && (size > 0) && (size <= 100)) {
        remove()
        insertColumn()
    }   
})

document.body.appendChild(button)
insertColumn()
document.body.appendChild(container)


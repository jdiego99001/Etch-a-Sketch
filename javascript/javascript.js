const container = document.createElement("div")
container.id = "container"

function createRow(row) {

    for (let i = 0; i < 16; i++) {
    const cuadricula = document.createElement("div")
    cuadricula.classList.add("cuadricula")
    row.appendChild(cuadricula)
    console.log(i)
    }
    container.appendChild(row)
}

function insertColumn() {
        
    for (let k = 0; k < 16; k++){
        const row = document.createElement("div")
        row.classList.add("row")
        createRow(row)

        container.appendChild(row)
        console.log(k)
    }
}

insertColumn()
document.body.appendChild(container)

import nuevoDiv from "..componentes/contenedorTareas.js"
const contenedorTareas = document.getElementById('contenedorTareas');

function agregarTarea(input) {
    const tarjeta = document.createElement("div");
    tarjeta.style = `
        margin: 12px;
        display: flex;
        gap: 8px;
    `;

    const parrafoTarea = document.createElement("p");
    parrafoTarea.textContent = input.value.trim();

    input.value = "";

    const botonActualizar = document.createElement("button");
    botonActualizar.textContent = "Actualizar";
    botonActualizar.style = `
        color: white;
        background-color: green;
        border: 1px solid grey;
    `;
    botonActualizar.addEventListener("click", () => actualizarTarea(input.value, parrafoTarea));

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.style = `
        color: white;
        background-color: red;
        border: 1px solid grey;
    `;
    botonEliminar.addEventListener("click", () => eliminarTarea(tarjeta));

    tarjeta.append(parrafoTarea, botonActualizar, botonEliminar);
    contenedorTareas.append(tarjeta);
}

function actualizarTarea(nuevaTarea, tarea) {
    tarea.textContent = nuevaTarea;
    setTimeout(() => { 
        tarea.textContent = "Ingresa tu tarea";
    }, 3000);
}

function eliminarTarea(tarjetaTarea) {
    tarjetaTarea.remove();
}

export { agregarTarea, eliminarTarea };
import contenedorTareas from "..componentes/contenedorTareas.js";


function agregarTarea (input) {
    const tarjeta = document.createElement("div");
    tarjeta.style = `
    margin: 12px;
    display: flex;
    gap: 8px
    `;
    
     const parrafoTarea = document.createElement("p");
     parrafoTarea.textContent = input.value.trim();
     
     input.value = null;

     const botonActualizar = document.createElement("button");
     botonActualizar.textContent = "actualizar";
    botonActualizar.style = `
    color: white;
    background_color: green;
    border: 1px solid grey;
    `;
     botonActualizar = document.createElement ("button");
     const botonEliminar = document.createElement("button");
     botonEliminar.textContent = "Eliminar";
     botonEliminar.style = `
     color: white;
     background_color: red;
     border: 1px solid grey;
     `;
 


     botonEliminar.addEventListener("click", () => eliminarTarea ([parrafoTarea, botonActualizar, botonEliminar]));
     contenedorTareas.append(parrafoTarea, botonEliminar);

     div2
}

function actualizartarea(nuevatarea,tarea){
tarea.textContent = nuevatarea;
nuevatarea = "";

}


function eliminarTarea (tarjetaArea) {
       tarjetaArea.remove();

      
}


export { agregarTarea, eliminarTarea };


// etiqueta.addEventListener("event", () => func());
// etiqueta.addEventListener("event", () => func (params));
// etiqueta.addEventListener("event", (event) => func(event, params));
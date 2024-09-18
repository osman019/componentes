class Tarea {
    #etiqueta = document.createElement("p")
    constructor(texto){
     this.#etiqueta.textContent = texto;   
    }

    get etiqueta(){
        return this.#etiqueta;
    }

    set texto(nuevoTexto){
     this.#etiqueta.textContent = nuevoTexto;
     if (nuevotexto == ""){
        return;
     }
     this.#etiqueta.textContent = nuevoTexto;
    }
}

export default Tarea; 
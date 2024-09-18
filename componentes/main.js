import botonEnviar from "./componentes/botonEnviar.js";

import tareaInput from "./componentes/creacionDeInputs.js";

import nuevoDiv from "./componentes/contenedorTareas.js";

import titulo from "./conponentes/titulo.js";

const root = document.getElementById("root");


root.append(titulo);
root.append(tareaInput);
root.append(botonEnviar);
root.append(nuevoDiv);
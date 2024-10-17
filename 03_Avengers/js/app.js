const nuevoElemento = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('botonAgregar');
const elementoLista = document.getElementById('elementoLista');

//establecemos la conexion entre los eventos //

botonAgregar.addEventListener('click',agregarNuevoElemento);

//creamos la función agregar nuevo elemento //

function agregarNuevoElemento () {
    const nuevoElementoTexto = nuevoElemento.value.trim ();
    if (!nuevoElementoTexto) return;


    const nuevaListaElemento = document.createElement('li');
    nuevaListaElemento.textContent = nuevoElementoTexto; 
    elementoLista.appendChild(nuevaListaElemento);

    nuevoElemento.value ='';

}

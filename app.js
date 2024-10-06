// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Inicializa los valores de los textos con los valores de los inputs.
textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

// Función para actualizar el color de fondo de la página.
function actualizarColor() {
    // Obtiene los valores de los inputs
    const rojo = inputRojo.value;
    const verde = inputVerde.value;
    const azul = inputAzul.value;

    // Cambia el color de fondo
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('input', (e) => {
    // Actualiza el valor del texto.
    textoRojo.textContent = e.target.value;
    // Llama a la función para actualizar el color de fondo.
    actualizarColor();
});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener('input', (e) => {
    // Actualiza el valor del texto.
    textoVerde.textContent = e.target.value;
    // Llama a la función para actualizar el color de fondo.
    actualizarColor();
});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener('input', (e) => {
    // Actualiza el valor del texto.
    textoAzul.textContent = e.target.value;
    // Llama a la función para actualizar el color de fondo.
    actualizarColor();
});

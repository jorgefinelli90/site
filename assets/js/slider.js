const fila = document.querySelector('.contenedor-carousel');
const empresa = document.querySelectorAll('.empresa');
const flechaDerecha = document.getElementById('flecha-derecha');
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});
flechaDerecha.addEventListener('dblclick', () => {
    fila.scrollLeft = 0;
});

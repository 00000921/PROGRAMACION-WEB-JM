const contadorElement = document.getElementById("contador");
const aumentarButton = document.getElementById("aumentar");
const disminuirButton = document.getElementById("disminuir");


let valor = 0;


function actualizarValor() {
    contadorElement.textContent = valor;
}


aumentarButton.addEventListener("click", function () {
    valor += 1;
    actualizarValor();
});


disminuirButton.addEventListener("click", function () {
    valor -= 1;
    actualizarValor();
})
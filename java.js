

function contarCaracteres() {
    const texto = document.getElementById('texto')

    textoAContar = texto.value
    console.log(textoAContar);

    const contadorLetras = document.querySelector(".contadorLetras");
    contadorLetras.innerHTML = textoAContar.length;

    const contadorPalabras = document.querySelector(".contadorPalabras")

    let palabras = 1;
    let longitud;
    if (textoAContar[textoAContar.length - 1] == " ") {
        longitud = textoAContar.length - 1;
    } else {
        longitud = textoAContar.length
    }
    for (let i = 0; i < longitud; i++) {
        if (textoAContar[i] == " ") {
            palabras++
        }
    }
    contadorPalabras.innerHTML = palabras
}
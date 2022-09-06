const inputText = document.querySelector(".inputText__area");
const outputTextArea = document.querySelector(".outputText__area");
let outputTextImg = document.querySelector(".outputText__img");
let aviso = document.querySelector(".aviso");
let btnEnc = document.getElementById("btnEnc");
let btnDes = document.getElementById("btnDes");
let btnCopy = document.getElementById("btnCopiar");
let inputArea = document.getElementById("inputText");
btnEnc.addEventListener("click", btnEncriptar);
btnDes.addEventListener("click", btnDesencriptar);
btnCopy.addEventListener("click", btnCopiar);
inputArea.addEventListener("click", ocultarBtnCopy);

//Encriptar texto

function btnEncriptar() {
    const textEncriptado = encriptar(inputText.value)
    outputTextArea.value = textEncriptado
    outputTextImg.style.display = "none";
    aviso.style.display = "none";
    btnCopy.style.display = "block";
    inputText.value = ""
}

function encriptar(textEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textEncriptado = textEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textEncriptado.includes(matrizCodigo[i][0])) {
            textEncriptado = textEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return textEncriptado;
}

//Desencriptar texto

function btnDesencriptar() {
    const textEncriptado = desencriptar(inputText.value)
    outputTextArea.value = textEncriptado
    outputTextImg.style.display = "none";
    aviso.style.display = "none";
    btnCopy.style.display = "block";
    inputText.value = ""
}

function desencriptar(textDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textDesencriptado = textDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textDesencriptado.includes(matrizCodigo[i][1])) {
            textDesencriptado = textDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return textDesencriptado;
}

//Botón copiar

function btnCopiar() {
    outputTextArea.select()
    navigator.clipboard.writeText(outputTextArea.value)
    outputTextArea.value = "";
    outputTextImg.style.display = "";
    aviso.style.display = "";
}

//Ocultar botón copiar

function ocultarBtnCopy() {
    btnCopy.style.display = "none";
}
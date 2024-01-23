
let numeroMaximoPermitido = 10
let numeroSecreto = 0
let qIntentos = 1
let maximosIntentos = 3
let listaNumerosSorteados = [];

console.log(numeroGenerado)
console.log(listaNumerosSorteados)



function asignarTextoElemento(elemento,texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;   
}

function verificarIntentoDeUsuario() {
   let numeroUsuario = parseInt(document.getElementById("valorUsuario").value); 
   if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento ("p", `¡Felicitaciones! Acertaste tu número Secreto en ${qIntentos} ${qIntentos == 1 ? "intento" : "intentos"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");

   } else 
        if (numeroUsuario>numeroSecreto) {
        asignarTextoElemento ("p", "Tu número secreto es menor");
        }    else {
        asignarTextoElemento ("p", "tu número secreto es mayor");
        }
       
        
        qIntentos++;
        limpiarCaja ();

        if (qIntentos > maximosIntentos) {
            asignarTextoElemento ("p", `llegaste al máximo permitido de ${maximosIntentos} intentos, tú número era ${numeroSecreto}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
        }

         
         
         
   return; 
}

function condicionesIniciales() {
    asignarTextoElemento ("h1", "Juego del número secreto");
    asignarTextoElemento ("p", `indica un número entre 1 y ${numeroMaximoPermitido}`);
    qIntentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function limpiarCaja() {
    document.getElementById("valorUsuario").value = "";
    }
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximoPermitido)+ 1; 

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
        if (listaNumerosSorteados.length == numeroMaximoPermitido) {
            asignarTextoElemento ("p", "Ya se sortearon todos los números posibles");
            asignarTextoElemento ("h1", "FIN DEL JUEGO")
            } else {
                if (listaNumerosSorteados.includes(numeroGenerado)) {
             return generarNumeroSecreto();
             }
                    else {
                 listaNumerosSorteados.push(numeroGenerado)
                    return numeroGenerado;
                 }
             return
    
            } 
}

function reinicioJuego() {
limpiarCaja();
condicionesIniciales();
document.getElementById("reiniciar").setAttribute("disabled",true);
}

condicionesIniciales();



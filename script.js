var boton1 = document.querySelector("#Encriptar");
var boton2 = document.querySelector("#Desencriptar");
var boton3 = document.querySelector("#BotonCopiar");
var boton4 = document.querySelector("#Audio");

var entrada = document.querySelector("#entrada");
var salida = document.querySelector("#salida");



function encriptar(){
    var mensaje = entrada.value;
    var encriptacion = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    salida.value = encriptacion; 
}

function desencriptar(){
    var  encriptacion = salida.value;
    var mensaje = encriptacion.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    entrada.value = mensaje; 
}

function copiar(){
    var encriptacion = salida.value;
    navigator.clipboard.writeText(encriptacion); //metodo para copiar el texto
}

/*function audio(){
    var encriptacion = salida.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = encriptacion;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
}*/


boton1.addEventListener("click",function(){
encriptar();
});

boton2.addEventListener("click",function(){
    desencriptar();
});

boton3.addEventListener("click",function(){
    copiar();
});

/*boton4.addEventListener("click",function(){
    audio();
});*/



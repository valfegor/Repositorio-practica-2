const tiempo = document.getElementById("tiempito");
let opciones1 = document.getElementById("cajaopci1");
let opciones2 = document.getElementById("cajaopci2");
let opciones3 = document.getElementById("cajaopci3");
let opciones4 = document.getElementById("cajaopci4");
let preg = document.getElementById("pregunta");
let mospunt = document.getElementById("mos_punt");
let siguiente = document.getElementById("siguiente-btn");
let index = 0;
let intento = 0;
let puntaje = 0;
let errada = 0;
//las preguntas se crean de manera random
let preguntas = quiz.sort(function(){
    return 0.5 - Math.random();
});
$(function () {
  let timepototal = 200;
  let min = 0;
  let sec = 0;
  contador = 0;
  let timer = setInterval(function () {
    contador++;
    min = Math.floor((timepototal - contador) / 60); //calculamos el minuto
    sec = timepototal - min * 60 - contador;
    tiempo.innerHTML = min + ":" + sec;

    if (contador == timepototal) {
      clearInterval(timer);
    }
    /*
        console.log(min);
console.log(sec);
*/
  }, 1000); //tiempo 1 segundo

  //imprimir las preguntas...
  imprimir(index);
});

function imprimir(i) {
  console.log(quiz);
  preg.innerHTML =(preguntas[i].question);
  opciones1.innerHTML =(preguntas[i].option[0]);
  opciones2.innerHTML =(preguntas[i].option[1]);
  opciones3.innerHTML =(preguntas[i].option[2]);
  opciones4.innerHTML =(preguntas[i].option[3]);

}


//funcion para revisar las respuestas

function respuesta(option){
intento ++;

let opcionclic = $(option).data("opt");

if(opcionclic == preguntas[index].answer){
    $(option).addClass("Correcto");
    puntaje ++;
}
else{
    $(option).addClass("errada");
    errada ++;
}

mospunt.innerHTML = puntaje;
console.log(opcionclic)
//de esta manera bloqueo las respuestas
$(".cajaopciones span").attr("onclick",""); 

}

siguiente.onclick = function(){
siguientepreg();
$(".cajaopciones span").removeClass();
$(".cajaopciones span").attr("onclick","respuesta(this)"); 
}

function siguientepreg(){
index ++;
imprimir(index);
}
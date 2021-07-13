const tiempo = document.getElementById("tiempito");
let opciones = document.getElementsByClassName("prueba");
console.log(opciones);
let preg = document.getElementById("pregunta");
let mospunt = document.getElementById("mos_punt");
let siguiente = document.getElementById("siguiente-btn");
let index = 0;
let intento = 0;
let puntaje = 0;
let errada = 0;
let timepototal = 200;
let min = 0;
let sec = 0;
contador = 0;
let a=0;
//las preguntas se crean de manera random
let preguntas = quiz.sort(function () {
  return 0.5 - Math.random();
});

let timer = setInterval(() => {
  contador++;
  min = Math.floor((timepototal - contador) / 60); //calculamos el minuto
  sec = timepototal - min * 60 - contador;
  tiempo.innerHTML = min + ":" + sec;
  if (contador == timepototal) {
    clearInterval(timer);
  }

}, 1000);

function imprimir(i) {
  console.log(quiz);
  preg.innerHTML = (preguntas[i].question);
  opciones[0].innerHTML = (preguntas[i].option[0]);
  opciones[1].innerHTML = (preguntas[i].option[1]);
  opciones[2].innerHTML = (preguntas[i].option[2]);
  opciones[3].innerHTML = (preguntas[i].option[3]);

}


//funcion para revisar las respuestas

function respuesta(option) {
  intento++;
  a++;
  this.option = option;
  let opcionclic = option.getAttribute('data-opt');
  
  if (opcionclic == preguntas[index].answer) {
    option.classList.add('Correcto');
    puntaje++;
  }
  else {
    option.classList.add("errada");
    errada++;
  }
  
  

 mospunt.innerHTML = puntaje;
  
  
}

function mostrarsiguiente(option){
  index ++;
  imprimir(index);
  this.option = option;
  if(index>=(preguntas.length-1)){
    mostrarResultado();
    return;
  }
  opciones[0].classList.remove('Correcto'),
  opciones[0].classList.remove('errada');
  opciones[1].classList.remove('Correcto'),
  opciones[1].classList.remove('errada');
  opciones[2].classList.remove('Correcto'),
  opciones[2].classList.remove('errada');
  opciones[3].classList.remove('Correcto'),
  opciones[3].classList.remove('errada');

  console.log(opciones);

}

function mostrarResultado(){

}

siguiente.onclick = function (){
  mostrarsiguiente(this);
}


imprimir(index);
timer();

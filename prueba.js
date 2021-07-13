const botondeinicio = document.getElementById('iniciar-btn');
const preguntasContenedorElemento=document.getElementById('contenedor-preguntas');
const preguntaElemento = document.getElementById('preguntas');
const respuestaBotonElemento = document.getElementById('preguntas-correctas');
const siguienteboton = document.getElementById('siguiente-btn');

let preguntasRandom,preguntaActualIndice;

siguienteboton.addEventListener('click', ()=>{
preguntaActualIndice++;
colocarPreguntas();
})


botondeinicio.onclick = function(){
    iniciarJuego();
}


function iniciarJuego(){
//boton de inicio añade HIDE para esconder creada anteriormente en CSS
botondeinicio.classList.add('hide');
//el contenedor de preguntas se le elmina la clase hide
preguntasContenedorElemento.classList.remove('hide');
preguntasRandom = preguntas.sort(()=>Math.random()-0.5);
//se inicializa en 0 ya que iniciamos en la primera pregunta
preguntaActualIndice=0;
colocarPreguntas();
}

function colocarPreguntas(){
resetear();
mostrarPreguntas(preguntasRandom[preguntaActualIndice]);
}

function mostrarPreguntas(question){
preguntaElemento.innerHTML = question.question;
question.respuestas.forEach(answer=>{
    const button =document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click',seleccionarRespuesta)
    respuestaBotonElemento.appendChild(button);
})
}

function resetear(){
    clearStatusClass(document.body)
siguienteboton.classList.add('hide');
while(respuestaBotonElemento.firstChild){
    respuestaBotonElemento.removeChild
    (respuestaBotonElemento.firstChild);
}
}

function seleccionarRespuesta(e){
const seleccionarboton = e.target;
const correct = seleccionarboton.dataset.correct;
setStatusClass(document.body,correct);
Array.from(respuestaBotonElemento.children).forEach(button =>{
    setStatusClass(button,button.dataset.correct)
})
if(preguntasRandom.length > preguntaActualIndice +1){
    siguienteboton.classList.remove('hide');
}
else{
    botondeinicio.innerText = 'Restart';
    botondeinicio.classList.remove('hide');
}
siguienteboton.classList.remove('hide');
}
function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correcta');
    }
    else{
        element.classList.add('incorrecta');
    }
}

function clearStatusClass(element){
element.classList.remove('correcta');
element.classList.remove('incorrecta');
}

const preguntas = [
{
    question:'Cuanto es 2 + 2?',
    respuestas:[
        {text:"4",correct:true},
        {text:"22",correct:false},
    ],
    question:'Gery esta rica?',
    respuestas:[
        {text:"Si",correct:true},
        {text:"Demasiado",correct:true},
        {text:"le haria el amor",correct:true},
        {text:"La amo ♥",correct:true},
    ],

}
]
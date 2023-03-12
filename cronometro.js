//  CAPTURA DE ELEMENTOS
 const minutosEl = document.querySelector('#minutos');
 const segundosEl = document.querySelector('#segundos');
 const milesimosEl = document.querySelector('#milesimos');
 const iniciarBtn = document.querySelector('#btnIniciar');
 const pausarBtn = document.querySelector('#btnPausar');
 const continuarBtn = document.querySelector('#btnContinuar');
 const resetarBtn = document.querySelector('#btnResetar');

//  VARIÁVEIS

let interval;
let minutos = 0;
let segundos = 0;
let milesimos = 0;
let pausar = false;


// ADICIONANDO AS FUNÇÕES AOS ELEMENTOS
iniciarBtn.addEventListener('click', iniciarTempo);
pausarBtn.addEventListener('click', pausarTempo);
resetarBtn.addEventListener('click', resetarTempo);
continuarBtn.addEventListener('click', continuarTempo);

// FUNÇÕES

// FUNÇÃO PARA INICIAR O CRONÔMETRO
function iniciarTempo () {
    // FUNÇÃO PARA MUDAR O TEMPO
    interval = setInterval(()=> {
        // ESTADO DIFERENTE DE PAUSADO
        if(!pausar){
            milesimos +=10;

            if(milesimos === 1000){
                segundos++;
                milesimos = 0;
            }

            if(segundos === 60){
                minutos++;
                segundos = 0;
            }
            // ADICIONANDO O VALOR NO ELEMENTO
            minutosEl.textContent = formatoTempo(minutos);
            segundosEl.textContent = formatoTempo(segundos);
            milesimosEl.textContent = formatoTempoMilesimo(milesimos);

        }
    }, 10);

    // MOSTRAR BOTÕES OCULTOS E OCULTAR O BOTÃO INICIAR
    iniciarBtn.style.display = "none";
    pausarBtn.style.display = "block";
    resetarBtn.style.display = "block";

}

// PAUSAR CRONÔMETRO
function pausarTempo (){
    pausar = true;
    pausarBtn.style.display = 'none';
    continuarBtn.style.display = 'block';

}

//ZERAR CRONÔMETRO
function resetarTempo (){
    clearInterval(interval);
    minutos = 0;
    segundos = 0;
    milesimos = 0;

    milesimosEl.textContent = "00";
    segundosEl.textContent = '00';
    milesimosEl.textContent = '000';

    iniciarBtn.style.display = "block";
    resetarBtn.style.display = "none";
    pausarBtn.style.display = "none";
    continuarBtn.style.display = "none";

}

//CONTINUAR A CONTAGEM
function continuarTempo(){
    pausar = false;
    pausarBtn.style.display = 'block';
    continuarBtn.style.display = 'none';
}

// FORMATO DOS NÚMEROS DO MINUTO E DO SEGUNDO
function formatoTempo (tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}
// FORMATO DOS NÚMEROS DO MILESIMO
function formatoTempoMilesimo (tempo){
    return tempo < 100 ? `${tempo}`.padStart(3, 0) : tempo;
}
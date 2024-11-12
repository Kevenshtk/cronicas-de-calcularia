let personagemJogador2, listaPersonagemJogador2, btnModo1jogadores, btnModo2jogadores;
const btnModoDeJogo = document.getElementById("btn-iniciarJogo");

export function modoJogo1() {  
    
    personagemJogador2 = document.querySelector('#personagemJogador-2');
    listaPersonagemJogador2 = document.querySelector('#listaJogador-2');
    btnModo1jogadores = document.querySelector('#btn-modo1');
    btnModo2jogadores = document.querySelector('#btn-modo2');

    listaPersonagemJogador2.classList.add('desabilitar');
    personagemJogador2.classList.add('desabilitar');
    btnModo2jogadores.classList.remove('desabilitar');
    btnModo2jogadores.classList.remove('modo-jogo-selecionado');
    btnModo1jogadores.classList.add('modo-jogo-selecionado');

    btnModoDeJogo.value = "1";
}

export function modoJogo2(){

    personagemJogador2 = document.querySelector('#personagemJogador-2');
    listaPersonagemJogador2 = document.querySelector('#listaJogador-2');
    btnModo1jogadores = document.querySelector('#btn-modo1');
    btnModo2jogadores = document.querySelector('#btn-modo2');

    personagemJogador2.classList.remove('desabilitar');
    listaPersonagemJogador2.classList.remove('desabilitar');
    btnModo2jogadores.classList.add('desabilitar');
    btnModo1jogadores.classList.remove('modo-jogo-selecionado');
    btnModo2jogadores.classList.add('modo-jogo-selecionado');

    btnModoDeJogo.value = "2";
}

export function retornaModoDeJogo(){
    if(btnModoDeJogo.value == "1"){
        return 1;
    } else if(btnModoDeJogo.value == "2"){
        return 2;
    }
}
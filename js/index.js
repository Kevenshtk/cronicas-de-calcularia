import {modoJogo1, modoJogo2, retornaModoDeJogo} from './telaSelecao/modoJogo.js';
import {carregarTabuleiro} from './telaSelecao/iniciarJogo.js';
import {exibirJodador1, exibirCardPersonagem1, exibirJodador2, salvarPersonagem, retornaJogador1, retornaJogador2} from './telaSelecao/selecaoPersonagem.js';
import {exibirManual} from './telaSelecao/manual.js';
import {exibirCardPersonagem} from './tabuleiro/cardPersonagem.js';
import {rollDado1} from './tabuleiro/umJogador/movimento.js';
import {rollDado2} from './tabuleiro/doisJogadores/movimento.js';

let jogador1;
let jogador2;
let modoJogo;

selecionarJogador();
exibirCardPersonagem();


window.iniciarJogo = iniciarJogo;
window.modoJogo1 = modoJogo1;
window.modoJogo2 = modoJogo2;
window.exibirManual = exibirManual;
window.rolarDado = rolarDado;

function selecionarJogador(){
    window.exibirJogador = exibirJogador;
    window.enviarEscolha = enviarEscolha;

    function exibirJogador(){
        if(jogador1 == null){
            exibirJodador1();
            exibirCardPersonagem1();
            modoJogo = retornaModoDeJogo();

        } else if(modoJogo != 1){
            exibirJodador2();
        }
    }
    
    function enviarEscolha(jogador, personagem){
        salvarPersonagem(jogador, personagem);

        jogador1 = retornaJogador1();
        jogador2 = retornaJogador2();
    }
}

function iniciarJogo(){
    window.carregarTabuleiro = carregarTabuleiro;

    switch(retornaModoDeJogo()){
        case 1:
            if(jogador1 == null){
                alert("Escolha um personagem !");
            } else {
                carregarTabuleiro();
            }
        break;

        case 2:
            if(jogador1 == null || jogador2 == null){
                alert("Cada jogador deve escolher um personagem!");
            } else {
                carregarTabuleiro();
            }
        break;
    }    
}

function rolarDado(){
    modoJogo = retornaModoDeJogo();

    if(modoJogo == 1){
        rollDado1();
    } else {
        rollDado2();
    }
    
}
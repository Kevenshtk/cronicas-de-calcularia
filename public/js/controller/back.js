import { limparCell, movePlayerFront }from '../../view/js/index.js';
import {perguntasInicio, perguntasPonte, perguntasFloresta, perguntasDeserto, perguntasVale, 
    perguntasVulcao, perguntasLabirinto, perguntasCastelo, perguntasFinal} from "../../model/perguntas.js";

let jogador1 = null;
let jogador2 = null;
let modoJogo = 1;

export function salvarModoJogo(modo){
    modoJogo = modo;
}

export function retornaModoJogo(){
    return modoJogo;
}

export function salvarPersonagem(jogador, personagem) {
    if(jogador == 'jogador1'){
        jogador1 = personagem;
        return `${jogador} ${personagem}`;
    } else if(jogador == 'jogador2' && modoJogo == 2){  
        jogador2 = personagem;
        return `${jogador} ${personagem}`;
    } else {
        return 'Erro, verifique o modo de jogo';
    }
}

export function retornaJogador(num){
    return num == '1' ? jogador1 : jogador2;
}

let playerAtual = 1;
let playerPositions = { 1: 0, 2: 0 };
let tabuleiro = {atual: 'inicio', anterior: 'inicio'};

let resultDado = 0;
let color = null;

export function rolarDadoBack(){
    switch(tabuleiro.atual) {
        case 'inicio':
            resultDado = Math.floor(Math.random() * 3) + 1;
        break;
        case 'ponte':
            resultDado = Math.floor(Math.random() * 4) + 1;
        break;
        case 'floresta':
        case 'vale':
        case 'vulcao':
            resultDado = Math.floor(Math.random() * 6) + 1;
        break;
        case 'labirinto':
            resultDado = Math.floor(Math.random() * 2) + 1;
        break;
        case 'deserto':
            resultDado = Math.floor(Math.random() * 5) + 1;
        break;
        case 'final':
        case 'fim':
            resultDado = Math.floor(Math.random() * 1) + 1;
        break;
    }

    if(retornaModoJogo() == 2){
        color = playerAtual === 1 ? 'blue' : 'red';
    } else {
        color = 'blue';
    }

    const posicao = movePlayerBack(color, resultDado);
    const dados_movimento = {resultDado: resultDado, posicao: posicao, colorPlayer: color}
    
    return dados_movimento;
}

function movePlayerBack(color, passos) {
    const previousPosition = playerPositions[playerAtual];

    let newPosition = previousPosition + passos;
    const lastCellIndex = 44;
    newPosition = Math.min(lastCellIndex, newPosition);
    newPosition = Math.max(0, newPosition);

    playerPositions[playerAtual] = newPosition;

    setTabuleiro(newPosition);

    limparCell(previousPosition, color);
    return newPosition;
}

export function setTabuleiro(position) {
    if(position >= 0 && position <= 3) {
        tabuleiro.atual = 'inicio';
    } else if (position >= 4 && position <= 7) {
        tabuleiro.atual = 'ponte';
        tabuleiro.anterior = 'inicio';
    } else if (position >= 8 && position <= 13) {
        tabuleiro.atual = 'floresta';
        tabuleiro.anterior = 'ponte';
    } else if (position >= 14 && position <= 18) {
        tabuleiro.atual = 'deserto';
        tabuleiro.anterior = 'floresta';
    } else if (position >= 19 && position <= 27) {
        tabuleiro.atual = 'vale';
        tabuleiro.anterior = 'deserto';
    } else if (position >= 28 && position <= 33) {
        tabuleiro.atual = 'vulcao';
        tabuleiro.anterior = 'vale';
    } else if (position >= 34 && position <= 41) {
        tabuleiro.atual = 'labirinto';
        tabuleiro.anterior = 'vulcao';
    } else if (position >= 34 && position <= 42){
        tabuleiro.atual = 'final';
        tabuleiro.anterior = 'labirinto';
    } else {
        tabuleiro.atual = 'fim';
        tabuleiro.anterior = 'fim';
    }
}

export function getTabuleiro() {
    return tabuleiro;
}

export function retornaPergunta(){
    let perguntas = null;

    switch(tabuleiro.atual) {
        case 'inicio':
            perguntas = perguntasInicio;
        break;
        case 'ponte':
            perguntas = perguntasPonte;
        break;
        case 'floresta':
            perguntas = perguntasFloresta;
        break;
        case 'deserto':
            perguntas = perguntasDeserto;
        break;
        case 'vale':
            perguntas = perguntasVale;
        break;
        case 'vulcao':
            perguntas = perguntasVulcao;
        break;
        case 'labirinto':
            perguntas = perguntasLabirinto;
        break;
        case 'final':
            perguntas = perguntasCastelo;
        break;
        case 'fim':
            perguntas = perguntasFinal;
        break;
    }

    const randomIndex = Math.floor(Math.random() * perguntas.length);
    return perguntas[randomIndex];
}

export function checkPerguntaBack(respostaUser, pergunta){
    const { correctAnswer } = pergunta;
    let novaPosicao;

    if(respostaUser === correctAnswer) {
        if(tabuleiro.atual === 'fim'){
            return 'correta';

        } else {
            novaPosicao = movePlayerBack(color, 1);
            movePlayerFront(novaPosicao, color);
            torcarPalayer();
            return 'correta';
        }

    } else {
        if(tabuleiro.atual === 'fim'){
            novaPosicao = movePlayerBack(color, -4);
            movePlayerFront(novaPosicao, color);
            torcarPalayer();
            return 'incorreta';

        } else {
            novaPosicao = movePlayerBack(color, -1);
            movePlayerFront(novaPosicao, color);
            torcarPalayer();
            return 'incorreta';
        }
    }
}

function torcarPalayer(){
    if(modoJogo === 2){
        playerAtual = playerAtual === 1 ? 2 : 1;
    }  
 }
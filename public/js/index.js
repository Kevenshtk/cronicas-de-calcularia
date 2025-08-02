import { exibirJogador, exibirCardPersonagem } from './view/playerView.js';
import { exibirManual } from './view/jogoView.js';
import { modoJogoFront, enviarEscolha, iniciarJogo } from './view/jogoView.js';
import { rolarDadoFront } from './view/tabuleiroView.js';

Swal.fire({
  title: "Projeto em Construção",
  text: "funcionalidades como sistema de vantagens e desvantagens aonda não estão disponíveis e bugs podem ser encontrados.",
  icon: "warning"
});


document.getElementById('btnOpenManual')
  .addEventListener('click', () => exibirManual());

document.getElementById('btnCloseManual')
  .addEventListener('click', () => exibirManual());

document.getElementById('listaJogador-1')
    .addEventListener('mouseenter', () => {
        exibirJogador();
        exibirCardPersonagem();
    });

document.getElementById('listaJogador-2')
    .addEventListener('mouseenter', () => exibirJogador());


document.getElementById('btn-modo1')
    .addEventListener('click', () => modoJogoFront(1));

document.getElementById('btn-modo2')
    .addEventListener('click', () => modoJogoFront(2));

document.querySelectorAll('.personagem-1p').forEach((element) => {
    element.addEventListener('click', () => {
        enviarEscolha('jogador 1', element.getAttribute('id'));
    });
});

document.querySelectorAll('.personagem-2p').forEach((element) => {
    element.addEventListener('click', () => {
        enviarEscolha('jogador 2', element.getAttribute('id'));
    });
});

document.querySelector('#btn-iniciarJogo').addEventListener('click', () => {
        iniciarJogo();
});


document.getElementById('jogarDado').addEventListener('click', () => {
    rolarDadoFront();
})

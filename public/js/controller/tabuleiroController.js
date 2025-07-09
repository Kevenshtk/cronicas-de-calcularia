import { getModoJogo } from "./jogoController.js";
import { limparCell } from "../view/tabuleiroView.js";

let tabuleiro = { atual: "inicio", anterior: "inicio" };
let resultDado = 0;

let playerAtual = 1;
let playerPositions = { 1: 0, 2: 0 };
let color = null;

export function rolarDadoBack() {
  switch (tabuleiro.atual) {
    case "inicio":
      resultDado = Math.floor(Math.random() * 3) + 1;
      break;
    case "ponte":
      resultDado = Math.floor(Math.random() * 4) + 1;
      break;
    case "floresta":
    case "vale":
    case "vulcao":
      resultDado = Math.floor(Math.random() * 6) + 1;
      break;
    case "labirinto":
      resultDado = Math.floor(Math.random() * 2) + 1;
      break;
    case "deserto":
      resultDado = Math.floor(Math.random() * 5) + 1;
      break;
    case "final":
    case "fim":
      resultDado = Math.floor(Math.random() * 1) + 1;
      break;
  }

  if (getModoJogo() == 2) {
    color = playerAtual === 1 ? "blue" : "red";
  } else {
    color = "blue";
  }

  const posicao = movePlayerBack(color, resultDado);
  const dados_movimento = {
    resultDado: resultDado,
    posicao: posicao,
    colorPlayer: color,
  };

  return dados_movimento;
}

export function movePlayerBack(color, passos) {
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
  if (position >= 0 && position <= 3) {
    tabuleiro.atual = "inicio";
  } else if (position >= 4 && position <= 7) {
    tabuleiro.atual = "ponte";
    tabuleiro.anterior = "inicio";
  } else if (position >= 8 && position <= 13) {
    tabuleiro.atual = "floresta";
    tabuleiro.anterior = "ponte";
  } else if (position >= 14 && position <= 18) {
    tabuleiro.atual = "deserto";
    tabuleiro.anterior = "floresta";
  } else if (position >= 19 && position <= 27) {
    tabuleiro.atual = "vale";
    tabuleiro.anterior = "deserto";
  } else if (position >= 28 && position <= 33) {
    tabuleiro.atual = "vulcao";
    tabuleiro.anterior = "vale";
  } else if (position >= 34 && position <= 41) {
    tabuleiro.atual = "labirinto";
    tabuleiro.anterior = "vulcao";
  } else if (position >= 34 && position <= 42) {
    tabuleiro.atual = "final";
    tabuleiro.anterior = "labirinto";
  } else {
    tabuleiro.atual = "fim";
    tabuleiro.anterior = "fim";
  }
}

export function getTabuleiro() {
  return tabuleiro;
}

export function getPlayerAtual() {
  return playerAtual;
}

export function setPlayerAtual(player) {
  playerAtual = player;
}


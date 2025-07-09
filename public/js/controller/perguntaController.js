import { getTabuleiro, movePlayerBack } from "./tabuleiroController.js";
import {
  perguntasInicio,
  perguntasPonte,
  perguntasFloresta,
  perguntasDeserto,
  perguntasVale,
  perguntasVulcao,
  perguntasLabirinto,
  perguntasCastelo,
  perguntasFinal,
} from "../model/perguntas.js";
import { movePlayerFront } from "../view/tabuleiroView.js";
import { torcarPalayer } from "./jogoController.js";
import { getPlayerAtual } from "./tabuleiroController.js";

export function retornaPergunta() {
  const { atual } = getTabuleiro();
  let perguntas = null;

  switch (atual) {
    case "inicio":
      perguntas = perguntasInicio;
      break;
    case "ponte":
      perguntas = perguntasPonte;
      break;
    case "floresta":
      perguntas = perguntasFloresta;
      break;
    case "deserto":
      perguntas = perguntasDeserto;
      break;
    case "vale":
      perguntas = perguntasVale;
      break;
    case "vulcao":
      perguntas = perguntasVulcao;
      break;
    case "labirinto":
      perguntas = perguntasLabirinto;
      break;
    case "final":
      perguntas = perguntasCastelo;
      break;
    case "fim":
      perguntas = perguntasFinal;
      break;
  }
  
  const randomIndex = Math.floor(Math.random() * perguntas.length);
  return perguntas[randomIndex];
}

export function checkPerguntaBack(respostaUser, pergunta, tabuleiroAtual) {
  const { correctAnswer } = pergunta;
  let novaPosicao;

  const returnCheck = {
    status: null,
    correctAnswer: null
  }

  let color;
  getPlayerAtual() === 1 ? (color = "blue") : (color = "red");

  if (respostaUser === correctAnswer) {
    if (tabuleiroAtual === "fim") {
      returnCheck.status = "correta";
    } else {
      novaPosicao = movePlayerBack(color, 1);
      movePlayerFront(novaPosicao, color);
      torcarPalayer();
      returnCheck.status = "correta";
    }
  } else {
    if (tabuleiroAtual === "fim") {
      novaPosicao = movePlayerBack(color, -4);
      movePlayerFront(novaPosicao, color);
      torcarPalayer();
      returnCheck.status = "incorreta";
    } else {
      novaPosicao = movePlayerBack(color, -1);
      movePlayerFront(novaPosicao, color);
      torcarPalayer();
      returnCheck.status = "incorreta";
      returnCheck.correctAnswer = correctAnswer;
    }
  }
  
  return returnCheck;
}

import {
  rolarDadoBack,
  getTabuleiro,
  setTabuleiro,
} from "../controller/tabuleiroController.js";
import { exibirCardPergunta } from "./perguntaView.js";

export function rolarDadoFront() {
  const dado_img = document.getElementById("dadoImg");
  const dados_movimento = rolarDadoBack();
  const result_dado = dados_movimento.resultDado;
  const nova_position = dados_movimento.posicao;
  const color_player = dados_movimento.colorPlayer;

  dado_img.src = `public/assets/img/imgDado/dado-${result_dado}.png`;

  movePlayerFront(nova_position, color_player);
}

export function movePlayerFront(novaPosition, colorPlayer) {
  const boards = document.querySelectorAll(".board");

  boards.forEach((board) => {
    const cellId = `#cell-${novaPosition}`;
    const cell = board.querySelector(cellId);

    if (cell) {
      if (cell.style.backgroundColor !== "") {
        cell.style.border = `2px solid ${colorPlayer}`;
      } else {
        cell.style.backgroundColor = colorPlayer;
        cell.style.border = "";
      }
    }
  });

  exibirCardPergunta();

  // criar uma condição para não executar a função sem precisar

  setTabuleiro(novaPosition);
  const tabuleiro = getTabuleiro();

  if (tabuleiro.atual != tabuleiro.anterior && window.innerWidth < 790) {
    const add_tabuleiro = document.getElementById(tabuleiro.atual);
    add_tabuleiro.style.display = "block";

    const remove_tabuleiro = document.getElementById(tabuleiro.anterior);
    remove_tabuleiro.style.display = "none";
  }
}

export function limparCell(position, playerColor) {
  const cell = document.querySelector(`#cell-${position}`);

  if (cell) {
    if (cell.style.backgroundColor === playerColor) {
      cell.style.backgroundColor = "";
      cell.style.border = "1px solid black";
    }
  }
}

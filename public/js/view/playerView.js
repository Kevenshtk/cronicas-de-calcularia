import { getModoJogo } from "../controller/jogoController.js";

function configurarHoverPersonagem(
  seletorClasse,
  selecionadoClasse,
  imgId,
  nomeId
) {
  const personagens = document.querySelectorAll(seletorClasse);

  personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {
      const idSelecionado = personagem.id;
      const personagemSelecionado = document.querySelector(
        `.${selecionadoClasse}`
      );
      if (personagemSelecionado)
        personagemSelecionado.classList.remove(selecionadoClasse);

      personagem.classList.add(selecionadoClasse);

      const imagemJogador = document.getElementById(imgId);
      imagemJogador.src = `public/assets/img/imgPersona/${idSelecionado}.png`;

      const nomeJogador = document.getElementById(nomeId);
      const nomeSelecionado = personagem.getAttribute("data-name");
      nomeJogador.textContent = nomeSelecionado;
    });
  });
}

export function exibirJogador() {
  configurarHoverPersonagem(
    ".personagem-1p",
    "selecionado",
    "personagem-jogador-1",
    "nome-jogador-1"
  );

  if (getModoJogo() === 2) {
    configurarHoverPersonagem(
      ".personagem-2p",
      "jogador-2-selecionado",
      "personagem-jogador-2",
      "nome-jogador-2"
    );
  }
}

function configurarHoverCardIcon(iconSelector, cardContainerId) {
  const icons = document.querySelectorAll(iconSelector);
  const cardContainer = document.getElementById(cardContainerId);

  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      if (window.innerWidth < 790) return;

      icons.forEach((el) => el.classList.remove("selecionado"));
      icon.classList.add("selecionado");

      const idSelecionado = icon.id;
      cardContainer.innerHTML = `
        <img class="cardPersonagem" src="public/assets/img/imgPersona/${idSelecionado}.jpeg" alt="Personagem ${idSelecionado}">
      `;
    });

    icon.addEventListener("mouseleave", () => {
      cardContainer.innerHTML = "";
    });
  });
}

export function exibirCardPersonagem() {
  configurarHoverCardIcon(".icon", "card");
}

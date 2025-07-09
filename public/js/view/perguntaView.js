import { retornaPergunta } from "../controller/perguntaController.js";
import { checkPerguntaBack } from "../controller/perguntaController.js";
import { getTabuleiro } from "../controller/tabuleiroController.js";

export function exibirCardPergunta() {
  const div_card = document.getElementById("cardPergunta");
  div_card.style.display = "flex";
  div_card.style.animationDuration = "0.8s";
  div_card.classList.add("animate__bounceIn");

  div_card.addEventListener("animationend", () => {
    div_card.classList.remove("animate__bounceIn");
  });

  const pergunta = retornaPergunta();

  document.getElementById("story").textContent = pergunta.story;
  document.getElementById("question").textContent = pergunta.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  pergunta.options.forEach((option, index) => {
    const label = document.createElement("label");
    const radio_Button = document.createElement("input");
    radio_Button.type = "radio";
    radio_Button.name = "resposta";
    radio_Button.value = option;
    radio_Button.id = "option-" + index;

    const span = document.createElement("span");
    span.textContent = option;

    label.appendChild(radio_Button);
    label.appendChild(span);

    optionsDiv.appendChild(label);
  });

  const button_responder = document.createElement("button");
  button_responder.textContent = "Responder";
  button_responder.addEventListener("click", () =>
    checkPerguntaFront(pergunta)
  ); //parou aqui

  optionsDiv.appendChild(button_responder);
}

function checkPerguntaFront(pergunta) {
  const opcao_selecionada = document.querySelector(
    'input[name="resposta"]:checked'
  );

  if (opcao_selecionada) {
    const resposta_user = opcao_selecionada.value;
    const { atual } = getTabuleiro();
    const result_check = checkPerguntaBack(resposta_user, pergunta, atual);
    
    let alertaMsg = null;

    switch (result_check.status) {
      case "correta":
        if (atual === "fim") {
          const card_vitoria = document.querySelector(".cardVitoria");
          card_vitoria.classList.toggle("active");
          return;
        } else {
          alertaMsg = "Resposta correta! Você avança um passo.";
        }
        break;

      case "incorreta":
        if (atual === "fim") {
          alertaMsg = "Resposta incorreta! Você volta um tabuleiro.";
        } else {
          alertaMsg =
            "Resposta incorreta! Você volta um passo.\n\nRESPOSTA CERTA: " +result_check.correctAnswer;
        }
        break;
    }

    alert(alertaMsg);

    const card_Pergunta = document.getElementById("cardPergunta");
    card_Pergunta.style.display = "none";
  } else {
    alert("Selecione uma resposta.");
  }
}

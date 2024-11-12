import {perguntasInicio, perguntasPonte, perguntasFloresta, perguntasDeserto, perguntasVale, 
perguntasVulcao, perguntasLabirinto, perguntasCastelo, perguntasFinal} from "./perguntas.js";
import {movePlayer, torcarPalayer} from "./movimento.js";

let perguntas;

export default function exibirCard(color, boardAtual) {
    let messageDiv = document.getElementById('gameCard');
    messageDiv.style.display = 'block';

    switch(boardAtual) {
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
    const { story, question, options } = perguntas[randomIndex];

    document.getElementById('story').textContent = story;
    document.getElementById('question').textContent = question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    options.forEach((option, index) => {
        const label = document.createElement('label');
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'resposta';
        radioButton.value = option;
        radioButton.id = 'option-' + index;

        const span = document.createElement('span');
        span.textContent = option;

        label.appendChild(radioButton);
        label.appendChild(span);

        optionsDiv.appendChild(label);
    });

    const responderButton = document.createElement('button');
    responderButton.textContent = 'Responder';
    responderButton.addEventListener('click', () => checkPergunta(color, boardAtual));
    
    optionsDiv.appendChild(responderButton);
}

function checkPergunta(color, boardAtual) {
    const { correctAnswer } = perguntas.find((pergunta) => pergunta.question === document.getElementById('question').textContent);
    const selectedOption = document.querySelector('input[name="resposta"]:checked');
    
    if(selectedOption) {
        const resposta = selectedOption.value;

        if(resposta === correctAnswer) {
            if(boardAtual === 'fim'){
                const CardVitoria = document.querySelector('.cardVitoria');
                CardVitoria.classList.toggle('active');

            } else {
                alert('Resposta correta! Você avança um passo.');
                movePlayer(color, 1);
                torcarPalayer();
            }

        } else {
            if(boardAtual === 'fim'){
                alert('Resposta incorreta! Você volta um tabuleiro.');
                movePlayer(color, -4);
                torcarPalayer();

            } else {
                alert('Resposta incorreta! Você volta um passo.');
                movePlayer(color, -1);
                torcarPalayer();
            }
        }

        const gameCard = document.getElementById('gameCard');
        gameCard.style.display = 'none';
    } else {
        alert('Selecione uma resposta.');
    }
}
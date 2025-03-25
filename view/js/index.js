import{salvarModoJogo, retornaModoJogo, salvarPersonagem, retornaJogador} from '../../controller/js/back.js';
import{rolarDadoBack, setTabuleiro, getTabuleiro, retornaPergunta, checkPerguntaBack} from '../../controller/js/back.js';

window.exibirCardPersonagem = exibirCardPersonagem();
window.exibirJodador = exibirJodador();
window.manual = manual;
window.modoJogo = modoJogo;
window.iniciarJogo = iniciarJogo;
window.enviarEscolha = enviarEscolha;
window.rolarDadoFront = rolarDadoFront;
    
function enviarEscolha(jogador, personagem){
    const aviso = salvarPersonagem(jogador, personagem);
    alert(aviso);
}

function exibirJodador() {
    const personagens_1p = document.querySelectorAll('.personagem-1p');
        personagens_1p.forEach((personagem) => {
            personagem.addEventListener('mouseenter', () => {
                const idSelecionado = personagem.attributes.id.value;
    
                const personagemSelecionado = document.querySelector('.selecionado');
                personagemSelecionado.classList.remove('selecionado');
    
                personagem.classList.add('selecionado');
    
                const imagemJogador1 = document.getElementById('personagem-jogador-1');
                imagemJogador1.src = `assets/img/imgPersona/${idSelecionado}.png`;
    
                const nomejogador1 = document.getElementById('nome-jogador-1');
                const nomeSelecionado = personagem.getAttribute('data-name');
    
                nomejogador1.innerHTML = nomeSelecionado;
            })
        })
        
    const personagens2p = document.querySelectorAll('.personagem-2p');
        personagens2p.forEach((personagem) => {
                if(retornaModoJogo() == 2){
                    personagem.addEventListener('mouseenter', () => {
                        const idSelecionado = personagem.attributes.id.value;
            
                        const personagemSelecionado = document.querySelector('.jogador-2-selecionado');
                        personagemSelecionado.classList.remove('jogador-2-selecionado');
            
                        personagem.classList.add('jogador-2-selecionado');
            
                        const imagemJogador = document.getElementById('personagem-jogador-2');
                        imagemJogador.src = `assets/img/imgPersona/${idSelecionado}.png`;
            
                        const nomejogador = document.getElementById('nome-jogador-2');
                        const nomeSelecionado = personagem.getAttribute('data-name');
            
                        nomejogador.innerHTML = nomeSelecionado;
                    })
                }
        })    
}

function exibirCardPersonagem() {
    const cards = document.querySelectorAll('.icon');
    const cardElement = document.getElementById('card');

    cards.forEach((icon) => {
        icon.addEventListener('mouseenter', () => {
            const width = window.innerWidth;
            if (width < 790) {
                return;
            } else {
                const idSelecionado = icon.id;

                cards.forEach((card) => {
                    card.classList.remove('selecionado');
                });

                icon.classList.add('selecionado');

                cardElement.innerHTML = `<img class="cardPersonagem" src="assets/img/imgPersona/${idSelecionado}.jpeg" alt="Personagem ${idSelecionado}">`;
            }
        });

        icon.addEventListener('mouseleave', () => {
            cardElement.innerHTML = '';
        });
    });
}

function manual(operacao) {
    const manual = document.querySelector('.container-manual');
    operacao == 'abrir' ? manual.classList.add('active') : manual.classList.remove('active');
}

// colocar um alert se for selecionado o modo 2 players no mobile
function modoJogo(quantJogadores) {
    salvarModoJogo(quantJogadores);
 
    const personagemJogador2 = document.querySelector('#personagemJogador-2');
    const listaPersonagemJogador2 = document.querySelector('#listaJogador-2');
    const btnModo1jogadores = document.querySelector('#btn-modo1');
    const btnModo2jogadores = document.querySelector('#btn-modo2');

    if(quantJogadores == 1){
        listaPersonagemJogador2.classList.add('desabilitar');
        personagemJogador2.classList.add('desabilitar');
        btnModo2jogadores.classList.remove('desabilitar');
        btnModo1jogadores.classList.add('desabilitar');
        btnModo2jogadores.classList.remove('modo-jogo-selecionado');
        btnModo1jogadores.classList.add('modo-jogo-selecionado');

        exibirJodador();
    } else {
        personagemJogador2.classList.remove('desabilitar');
        listaPersonagemJogador2.classList.remove('desabilitar');
        btnModo1jogadores.classList.remove('desabilitar')
        btnModo2jogadores.classList.add('desabilitar');
        btnModo1jogadores.classList.remove('modo-jogo-selecionado');
        btnModo2jogadores.classList.add('modo-jogo-selecionado');

        exibirJodador();
    }
}

function iniciarJogo(){
    window.exibirTelaTabuleiro = exibirTelaTabuleiro;

    switch(retornaModoJogo()){
        case 1:
            if(retornaJogador(1) == null){
                alert("Escolha um personagem !");
            } else {
                exibirTelaTabuleiro();
            }
        break;

        case 2:
            if(retornaJogador(1) == null || retornaJogador(2) == null){
                alert("Cada jogador deve escolher um personagem!");
            } else {
                exibirTelaTabuleiro();
            }
        break;
    }    
}

function exibirTelaTabuleiro() {
    const telaSelecao = document.querySelector('#telaSelecao');
    const telaTabuleiros = document.querySelector('#telaTabuleiros');
    const cardPersonagem = document.querySelector('#cardPersonagem');
    const dado = document.querySelector('#dado');

    telaSelecao.style.display = 'none';
    telaTabuleiros.style.display = 'block';

    cardPersonagem.classList.add("animate__animated");
    cardPersonagem.style.display = 'block';
    cardPersonagem.classList.add("animate__backInLeft", "animate__delay-2s");

    dado.addEventListener('animationend', () => {
        dado.classList.remove("animate__backInLeft", "animate__delay-2s");
    });


    dado.classList.add("animate__animated");
    dado.style.display = 'block';
    dado.classList.add("animate__backInRight", "animate__delay-1s");

    dado.addEventListener('animationend', () => {
        dado.classList.remove("animate__backInRight", "animate__delay-1s");
    });
}

function rolarDadoFront(){
    const dado_img = document.getElementById('dadoImg');
    const dados_movimento = rolarDadoBack();
    const result_dado = dados_movimento.resultDado;
    const nova_position = dados_movimento.posicao;
    const color_player = dados_movimento.colorPlayer;

    dado_img.src = `assets/img/imgDado/dado-${result_dado}.png`;

    movePlayerFront(nova_position, color_player);
}

export function movePlayerFront(novaPosition, colorPlayer){
    const boards = document.querySelectorAll('.board');

    boards.forEach(board => {
        const cellId = `#cell-${novaPosition}`;
        const cell = board.querySelector(cellId);

        if(cell) {
            if(cell.style.backgroundColor !== '') {
                cell.style.border = `2px solid ${colorPlayer}`;
            } else {
                cell.style.backgroundColor = colorPlayer;
                cell.style.border = '';
            }
        }
    });

    exibirCardPergunta();

    // criar uma condição para não executar a função sem precisar
    
    setTabuleiro(novaPosition);
    const tabuleiro = getTabuleiro();

    if(tabuleiro.atual != tabuleiro.anterior && window.innerWidth < 790) {
        const add_tabuleiro = document.getElementById(tabuleiro.atual);
        add_tabuleiro.style.display = 'block';

        const remove_tabuleiro = document.getElementById(tabuleiro.anterior);
        remove_tabuleiro.style.display = 'none';
    }
}

// corrigir o erro de quando um jogador cai em cima do outro
export function limparCell(position, playerColor) {
    const cell = document.querySelector(`#cell-${position}`);

    if(cell) {
        if(cell.style.backgroundColor === playerColor) {
            cell.style.backgroundColor = '';
            cell.style.border = '1px solid black';
        }
    }
}

function exibirCardPergunta(){
    const div_card = document.getElementById('cardPergunta');
    div_card.style.display = 'flex';
    div_card.style.animationDuration = '0.8s';
    div_card.classList.add("animate__bounceIn");    

    div_card.addEventListener('animationend', () => {
        div_card.classList.remove("animate__bounceIn");
    });

    const pergunta = retornaPergunta();

    document.getElementById('story').textContent = pergunta.story;
    document.getElementById('question').textContent = pergunta.question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    pergunta.options.forEach((option, index) => {
        const label = document.createElement('label');
        const radio_Button = document.createElement('input');
        radio_Button.type = 'radio';
        radio_Button.name = 'resposta';
        radio_Button.value = option;
        radio_Button.id = 'option-' + index;

        const span = document.createElement('span');
        span.textContent = option;

        label.appendChild(radio_Button);
        label.appendChild(span);

        optionsDiv.appendChild(label);
    });

    const button_responder = document.createElement('button');
    button_responder.textContent = 'Responder';
    button_responder.addEventListener('click', () => checkPerguntaFront(pergunta)); //parou aqui
    
    optionsDiv.appendChild(button_responder);
}

// fazer a resposta certa aparecer no alert
// tirar o alert da utima questão
// fazer o tabuleiro anterior aparecer quando erra a questão e volta para outro tabuleiro
function checkPerguntaFront(pergunta) {
    const opcao_selecionada = document.querySelector('input[name="resposta"]:checked');   
    
    if(opcao_selecionada) {
        const resposta_user = opcao_selecionada.value;
        const result_check = checkPerguntaBack(resposta_user, pergunta);
        const { atual } = getTabuleiro();
        let alertaMsg = null;
        
        switch(result_check){
            case 'correta':
                if(atual === 'fim'){
                    const card_vitoria = document.querySelector('.cardVitoria');
                    card_vitoria.classList.toggle('active');
                } else {
                    alertaMsg = 'Resposta correta! Você avança um passo.';
                }
            break;

            case 'incorreta':
                if(atual === 'fim'){
                    alertaMsg = 'Resposta incorreta! Você volta um tabuleiro.'
                } else {
                    alertaMsg = 'Resposta incorreta! Você volta um passo.\n\nRESPOSTA CERTA: '//+correctAnswer;
                }
            break;
        }
        
        alert(alertaMsg);

        const card_Pergunta = document.getElementById('cardPergunta');
        card_Pergunta.style.display = 'none';

    } else {
        alert('Selecione uma resposta.');
    }
}
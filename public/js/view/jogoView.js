function exibirManual(operacao) {
    const manual = document.querySelector('.container-manual');
    operacao == 'abrir' ? manual.classList.add('active') : manual.classList.remove('active');
}

function enviarEscolha(jogador, personagem){
    const aviso = salvarPersonagem(jogador, personagem);
    alert(aviso);
}

function modoJogoFront(quantJogadores) {
    if (quantJogadores === 2) {
        if (isMobileDevice()) {
            alert("O modo de 2 jogadores não está disponível para dispositivos móveis no momento. Por favor, jogue em um computador ou tablet com tela maior.");
        return;
        }
    }
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
export function carregarTabuleiro() {
    const telaSelecao = document.querySelector('#telaSelecao');
    const telaTabuleiro = document.querySelector('#telaTabuleiro');
    const cardPersonagem = document.getElementById('cardPersonagem');
    const dado = document.getElementById('dado');

    telaSelecao.style.display = 'none';
    telaTabuleiro.style.display = 'block'; 

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
export function carregarTabuleiro() {
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
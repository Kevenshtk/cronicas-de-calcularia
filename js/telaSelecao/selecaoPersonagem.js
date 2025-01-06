let personagensSelecionados = {
    jogador1: null,
    jogador2: null
};

export function exibirJodador1() {
    if (personagensSelecionados.jogador1 == null) {
        const personagens = document.querySelectorAll('.personagem');

        personagens.forEach((personagem) => {

            personagem.addEventListener('mouseenter', () => {

                const idSelecionado = personagem.attributes.id.value;

                const personagemSelecionado = document.querySelector('.selecionado');
                personagemSelecionado.classList.remove('selecionado');

                personagem.classList.add('selecionado');

                const imagemJogador1 = document.getElementById('personagem-jogador-1');
                imagemJogador1.src = `img/imgPersona/${idSelecionado}.png`;

                const nomejogador1 = document.getElementById('nome-jogador-1');
                const nomeSelecionado = personagem.getAttribute('data-name');

                nomejogador1.innerHTML = nomeSelecionado;

            })
        })
    }
}

export function exibirCardPersonagem1() {
    const cards = document.querySelectorAll('.icon');
    const cardElement = document.getElementById('card');

    cards.forEach((icon) => {
        icon.addEventListener('mouseenter', () => {
            const idSelecionado = icon.id;

            cards.forEach((card) => {
                card.classList.remove('selecionado');
            });

            icon.classList.add('selecionado');

            cardElement.innerHTML = `<img class="cardPersonagem" src="img/imgPersona/${idSelecionado}.jpeg" alt="Personagem ${idSelecionado}">`;
        });

        icon.addEventListener('mouseleave', () => {

            cardElement.innerHTML = '';

        });
    });
}

export function exibirJodador2() {
        const personagens = document.querySelectorAll('.personagem-2');
    
            personagens.forEach((personagem) => {
    
                personagem.addEventListener('mouseenter', () => {
    
                const idSelecionado = personagem.attributes.id.value;
    
                const personagemSelecionado = document.querySelector('.jogador-2-selecionado');
                personagemSelecionado.classList.remove('jogador-2-selecionado');
    
                personagem.classList.add('jogador-2-selecionado');
    
                const imagemJogador2 = document.getElementById('personagem-jogador-2');
                imagemJogador2.src = `img/imgPersona/${idSelecionado}.png`;
    
                const nomejogador2 = document.getElementById('nome-jogador-2');
                const nomeSelecionado = personagem.getAttribute('data-name');
    
                nomejogador2.innerHTML = nomeSelecionado;
            })
        })
}

export function salvarPersonagem(jogador, personagem) {
    const jogador1 = document.getElementById("personagemJogador-1");
    const jogador2 = document.getElementById("personagemJogador-2");

    if(jogador == 'jogador1'){
        jogador1.setAttribute("value", personagem);
    } else if(jogador == 'jogador2'){   
        jogador2.setAttribute("value", personagem);
    }

    personagensSelecionados[jogador] = personagem;
    alert(jogador + " " + personagem)
}

export function retornaJogador1(){
    return personagensSelecionados.jogador1;
}

export function retornaJogador2(){
    return personagensSelecionados.jogador2;
}
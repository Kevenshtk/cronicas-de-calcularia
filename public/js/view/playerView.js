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
function exibirCardPersonagem() {
    const cards = document.querySelectorAll('.icon');
    const cardElement = document.getElementById('card');

    cards.forEach((icon) => {
        icon.addEventListener('mouseenter', () => {
            const idSelecionado = icon.id;

            cards.forEach((card) => {
                card.classList.remove('selecionado');
            });

            icon.classList.add('selecionado');

            cardElement.innerHTML = `<img class="card" src="img/imgPersona/${idSelecionado}.jpeg" alt="Personagem ${idSelecionado}">`;
        });

        icon.addEventListener('mouseleave', () => {

            cardElement.innerHTML = '';

        });
    });
}
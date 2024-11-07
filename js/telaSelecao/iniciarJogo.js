function iniciarJogo() {
    if (personagensSelecionados.jogador1 === null || personagensSelecionados.jogador2 === null) {
        alert("Cada jogador deve escolher um personagem!");
        return;
    } else {
        window.location.href = 'tabuleiro.html';
    }
}
export function salvarPersonagem(jogador, personagem) {
    if(jogador == 'jogador1'){
        jogador1 = personagem;
        return `${jogador} ${personagem}`;
    } else if(jogador == 'jogador2' && modoJogo == 2){  
        jogador2 = personagem;
        return `${jogador} ${personagem}`;
    } else {
        return 'Erro, verifique o modo de jogo';
    }
}

export function retornaJogador(num){
    return num == '1' ? jogador1 : jogador2;
}

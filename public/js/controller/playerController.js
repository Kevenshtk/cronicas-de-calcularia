import { getModoJogo } from '../controller/jogoController.js';

const players = {
    jogador1: '',
    jogador2: ''
};

export function salvarPersonagem(jogador, personagem) {
    if(jogador == 'jogador 1'){
        players.jogador1 = personagem;
        return `${jogador} ${personagem}`;
    } else if(jogador == 'jogador 2' && getModoJogo() == 2){  
        players.jogador2 = personagem;
        return `${jogador} ${personagem}`;
    } else {
        return 'Erro, verifique o modo de jogo';
    }
}

export function retornaJogador(num){
    return num == '1' ? players.jogador1 : players.jogador2;
}

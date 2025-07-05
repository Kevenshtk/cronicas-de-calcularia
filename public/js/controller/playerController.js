import { getModoJogo } from '../controller/jogoController.js';

const paylers = {
    jogador1: '',
    jogador2: ''
};

export function salvarPersonagem(jogador, personagem) {
    if(jogador == 'jogador 1'){
        paylers.jogador1 = personagem;
        return `${jogador} ${personagem}`;
    } else if(jogador == 'jogador 2' && getModoJogo() == 2){  
        paylers.jogador2 = personagem;
        return `${jogador} ${personagem}`;
    } else {
        return 'Erro, verifique o modo de jogo';
    }
}

export function retornaJogador(num){
    return num == '1' ? paylers.jogador1 : paylers.jogador2;
}

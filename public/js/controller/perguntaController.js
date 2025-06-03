export function retornaPergunta(){
    let perguntas = null;

    switch(tabuleiro.atual) {
        case 'inicio':
            perguntas = perguntasInicio;
        break;
        case 'ponte':
            perguntas = perguntasPonte;
        break;
        case 'floresta':
            perguntas = perguntasFloresta;
        break;
        case 'deserto':
            perguntas = perguntasDeserto;
        break;
        case 'vale':
            perguntas = perguntasVale;
        break;
        case 'vulcao':
            perguntas = perguntasVulcao;
        break;
        case 'labirinto':
            perguntas = perguntasLabirinto;
        break;
        case 'final':
            perguntas = perguntasCastelo;
        break;
        case 'fim':
            perguntas = perguntasFinal;
        break;
    }

    const randomIndex = Math.floor(Math.random() * perguntas.length);
    return perguntas[randomIndex];
}

export function checkPerguntaBack(respostaUser, pergunta){
    const { correctAnswer } = pergunta;
    let novaPosicao;

    if(respostaUser === correctAnswer) {
        if(tabuleiro.atual === 'fim'){
            return 'correta';

        } else {
            novaPosicao = movePlayerBack(color, 1);
            movePlayerFront(novaPosicao, color);
            torcarPalayer();
            return 'correta';
        }

    } else {
        if(tabuleiro.atual === 'fim'){
            novaPosicao = movePlayerBack(color, -4);
            movePlayerFront(novaPosicao, color);
            torcarPalayer();
            return 'incorreta';

        } else {
            novaPosicao = movePlayerBack(color, -1);
            movePlayerFront(novaPosicao, color);
            torcarPalayer();
            return 'incorreta';
        }
    }
}
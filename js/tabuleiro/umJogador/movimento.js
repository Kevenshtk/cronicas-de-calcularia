import exibirCard from './cardPertunta.js';

let playerAtual = 1;
let playerPositions = {1: 0};
let tabuleiro = {atual: 'inicio', anterior: 'inicio'};
    
export function rollDado1() {
    let resultDado;

    switch(tabuleiro.atual) {
        case 'inicio':
            resultDado = Math.floor(Math.random() * 3) + 1;
            break;
        case 'ponte':
            resultDado = Math.floor(Math.random() * 4) + 1;
            break;
        case 'floresta':
        case 'vale':
        case 'vulcao':
            resultDado = Math.floor(Math.random() * 6) + 1;
            break;
        case 'labirinto':
            resultDado = Math.floor(Math.random() * 2) + 1;
            break;
        case 'deserto':
            resultDado = Math.floor(Math.random() * 5) + 1;
            break;
        case 'final':
        case 'fim':
            resultDado = Math.floor(Math.random() * 1) + 1;
            break;
    }

    const diceImg = document.getElementById('dadoImg');
    diceImg.src = `img/imgDado/dado-${resultDado}.png`;

    const color = 'blue';
    movePlayer(color, resultDado);
}

function movePlayer(color, passos) {
    const boards = document.querySelectorAll('.board');
    const previousPosition = playerPositions[playerAtual];
    limparCell(boards, previousPosition, color);

    let newPosition = previousPosition + passos;
    const lastCellIndex = 44;
    newPosition = Math.min(lastCellIndex, newPosition);
    newPosition = Math.max(0, newPosition);

    playerPositions[playerAtual] = newPosition;

    boards.forEach(board => {
        const cellId = `#cell-${newPosition}`;
        const cell = board.querySelector(cellId);

        if(cell) {
            if(cell.style.backgroundColor !== '') {
                cell.style.border = `2px solid ${color}`;
            } else {
                cell.style.backgroundColor = color;
                cell.style.border = '';
            }
        }
    });

    let tabuleiroAtual = getBoardAtual(newPosition);

    if(tabuleiro.atual != tabuleiro.anterior && window.innerWidth < 790) {
        const addTabuleiro = document.getElementById(tabuleiro.atual);
        addTabuleiro.style.display = 'block';
        const removeTabuleiro = document.getElementById(tabuleiro.anterior);
        removeTabuleiro.style.display = 'none';
    }

    exibirCard(color, tabuleiroAtual); 
}

function getBoardAtual(position) {
    if(position >= 0 && position <= 3) {
        tabuleiro.atual = 'inicio';
    } else if (position >= 4 && position <= 7) {
        tabuleiro.atual = 'ponte';
        tabuleiro.anterior = 'inicio';
    } else if (position >= 8 && position <= 13) {
        tabuleiro.atual = 'floresta';
        tabuleiro.anterior = 'ponte';
    } else if (position >= 14 && position <= 18) {
        tabuleiro.atual = 'deserto';
        tabuleiro.anterior = 'floresta';
    } else if (position >= 19 && position <= 27) {
        tabuleiro.atual = 'vale';
        tabuleiro.anterior = 'deserto';
    } else if (position >= 28 && position <= 33) {
        tabuleiro.atual = 'vulcao';
        tabuleiro.anterior = 'vale';
    } else if (position >= 34 && position <= 41) {
        tabuleiro.atual = 'labirinto';
        tabuleiro.anterior = 'vulcao';
    } else if (position >= 34 && position <= 42){
        tabuleiro.atual = 'final';
        tabuleiro.anterior = 'labirinto';
    } else {
        tabuleiro.atual = 'fim';
        tabuleiro.anterior = 'fim';
    }

    return tabuleiro.atual;
}

function limparCell(boards, position, playerColor) {
    boards.forEach(board => {
        const cell = board.querySelector(`#cell-${position}`);
        if(cell) {
            if(cell.style.backgroundColor === playerColor) {
                cell.style.backgroundColor = '';
            }
        }
    });
}

export {movePlayer}
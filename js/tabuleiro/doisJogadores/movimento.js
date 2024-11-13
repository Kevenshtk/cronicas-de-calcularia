import exibirCard from './cardPertunta.js';

let playerAtual = 1;
let playerPositions = { 1: 0, 2: 0 };
let boardAtual = 'inicio';

export function rollDado2() {

    let resultDado;

    switch(boardAtual) {
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

    const color = playerAtual === 1 ? 'blue' : 'red';
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
    exibirCard(color, tabuleiroAtual);
    
}

function getBoardAtual(position) {
    if(position >= 0 && position <= 3) {
        boardAtual = 'inicio';
    } else if (position >= 4 && position <= 7) {
        boardAtual = 'ponte';
    } else if (position >= 8 && position <= 13) {
        boardAtual = 'floresta';
    } else if (position >= 14 && position <= 18) {
        boardAtual = 'deserto';
    } else if (position >= 19 && position <= 27) {
        boardAtual = 'vale';
    } else if (position >= 28 && position <= 33) {
        boardAtual = 'vulcao';
    } else if (position >= 34 && position <= 41) {
        boardAtual = 'labirinto';
    } else if (position >= 34 && position <= 42){
        boardAtual = 'final';
    } else {
        boardAtual = 'fim';
    }

    return boardAtual;
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

function torcarPalayer(){
   playerAtual = playerAtual === 1 ? 2 : 1;
}

export {movePlayer, torcarPalayer}
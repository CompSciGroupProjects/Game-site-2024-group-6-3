document.addEventListener('DOMContentLoaded', () => {
    const gameBoardElement = document.getElementById('gameBoard');
    const gameStatus = document.getElementById('gameStatus');
    const currentTurn = document.getElementById('currentTurn');
    const modeSelect = document.getElementById('modeSelect');


    const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let isPlayerTurn = true;
let currentPlayer = 'X';
let gameMode = 'one';

const PLAYER_MARK = 'X';
const COMPUTER_MARK = 'O';

modeSelect.addEventListener('change', () => {
    gameMode = modeSelect.value;
    gameRestart();
});

function Board() {
    gameBoardElement.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        gameBoardElement.innerHTML += `<div data-cell-index="${i}" class="cell"></div>`;
    }
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
    updateTurnDisplay();
}

function handleCellClick(e) {
    const cell = e.target;
    const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

    if (gameBoard[cellIndex] !== '' || (gameMode === 'one' && !isPlayerTurn)) return;

    gameBoard[cellIndex] = currentPlayer;
    cell.innerHTML = currentPlayer;

    if (checkWin(currentPlayer)) {
        gameStatus.innerHTML = `${currentPlayer} Wins!`;
        endGame();
        return;
    }

    if (isBoardFull()) {
        gameStatus.innerHTML = 'Draw!';
        endGame();
        return;
    }

    if (gameMode === 'one') {
        isPlayerTurn = !isPlayerTurn;
        updateTurnDisplay();
        if (!isPlayerTurn) {
            setTimeout(computerMove, 500);
        }
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateTurnDisplay();
    }
}
function computerMove() {
    const emptyCells = gameBoard.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
    const randomCellIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    gameBoard[randomCellIndex] = COMPUTER_MARK;
    document.querySelector(`[data-cell-index="${randomCellIndex}"]`).innerHTML = COMPUTER_MARK;

    if (checkWin(COMPUTER_MARK)) {
        gameStatus.innerHTML = 'Computer Wins!';
        endGame();
        return;
    }

    if (isBoardFull()) {
        gameStatus.innerHTML = 'Draw!';
        endGame();
        return;
    }

    isPlayerTurn = true;
    updateTurnDisplay();
}

function checkWin(mark) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => gameBoard[index] === mark);
    });
}
function isBoardFull() {
    return gameBoard.every(cell => cell !== '');
}

function endGame() {
    document.querySelectorAll('.cell').forEach(cell => cell.removeEventListener('click', handleCellClick));
    currentTurn.innerHTML = '';
}

function updateTurnDisplay() {
    if (gameMode === 'one') {
        currentTurn.innerHTML = isPlayerTurn ? 'Player\'s Turn' : 'Computer\'s Turn';
    } else {
        currentTurn.innerHTML = `${currentPlayer}'s Turn`;
    }
}window.gameRestart = function() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameStatus.innerHTML = '';
    currentTurn.innerHTML = '';
    isPlayerTurn = true;
    currentPlayer = 'X';
    Board();
}

Board();
});


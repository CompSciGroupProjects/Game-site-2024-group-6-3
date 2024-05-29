let board = [];

for (let i = 0; i < 6; i++) {
    board[i] = [];
    for (let j = 0; j < 7; j++) {
        board[i][j] = null;
    }
}

let currentPlayer = 'red';
let winner = false;

function addToSlot(columnNum) {

    for (let row = 6 - 1; row >= 0; row--) {
        if (board[row][columnNum] === null) {
            board[row][columnNum] = currentPlayer;
            document.getElementById(`${row}-${columnNum}`).style.backgroundColor = currentPlayer;
            checkForWin(row, columnNum);
            if (winner===true){
                if (currentPlayer === 'red'){
                    document.getElementById("turn").innerHTML = "Red" + " Won";
                }
                else{
                    document.getElementById("turn").innerHTML = "Yellow" + " Won";
                }
                disableButtons();
                break;
            }
            if (currentPlayer === 'red') {
                currentPlayer = 'yellow';
                document.getElementById("turn").innerHTML = "Yellow Player's Turn";
            } else {
                currentPlayer = 'red';
                document.getElementById("turn").innerHTML = "Red Player's Turn";
            }
            if (isTie()){
                document.getElementById("turn").innerHTML = "It's a tie!";
            }
            break;
        }
    }
}
function isTie(){
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (board[i][j]===null){
                return false;
            }
        }
    }
    return true;
}
function checkForWin(row, colnum) {
    //diag right up
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 1}-${colnum + 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 2}-${colnum + 2}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 3}-${colnum + 3}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch{}
    //diag right up middle
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row - 1}-${colnum - 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 1}-${colnum + 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 2}-${colnum + 2}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch{}
    //diag right down middle
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row - 2}-${colnum - 2}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row - 1}-${colnum - 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 1}-${colnum + 1}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch{}
    //diag right down
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row - 3}-${colnum - 3}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row - 2}-${colnum - 2}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row - 1}-${colnum - 1}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch{}
    //diag left up
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 1}-${colnum - 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 2}-${colnum - 2}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 3}-${colnum - 3}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch{}
    //diag left up middle
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row - 1}-${colnum + 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 1}-${colnum - 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 2}-${colnum - 2}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch{}
    //diag left down middle
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row - 2}-${colnum + 2}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row - 1}-${colnum + 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 1}-${colnum - 1}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch {}
    //diag left down
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row - 3}-${colnum + 3}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row - 2}-${colnum + 2}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row - 1}-${colnum + 1}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch {}
    //up
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 1}-${colnum}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 2}-${colnum}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row + 3}-${colnum}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch {}
    //sideways right
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row}-${colnum + 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row}-${colnum + 2}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row}-${colnum + 3}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch {}
    //sideways right middle
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row}-${colnum - 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row}-${colnum + 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row}-${colnum + 2}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch {}
    //sideways left middle
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row}-${colnum - 2}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row}-${colnum - 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row}-${colnum + 1}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch {}
    //sideways left
    try {
        if (document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row}-${colnum - 1}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row}-${colnum - 2}`).style.backgroundColor && document.getElementById(`${row}-${colnum}`).style.backgroundColor === document.getElementById(`${row}-${colnum - 3}`).style.backgroundColor) {
            winner = true;
        }
    }
    catch {}
}
function disableButtons(){
    for (let row = 6 - 1; row >= 0; row--) {
        for(let col = 7 - 1; col>=0; col--) {
            let button = document.getElementById(`${row}-${col}`);
            button.onclick=null;
        }
    }
}


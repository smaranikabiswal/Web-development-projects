const P1 = "Teal";
const P2 = "Rose";
let currPlayer = P1;
let gameOver = false;
let board;
const rows = 6;
const columns = 7;
let currColumns = [5, 5, 5, 5, 5, 5, 5];

window.onload = setGame;

function setGame() {
    board = [];
    const boardDiv = document.getElementById("board");
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push(' ');
            let tile = document.createElement("div");
            tile.id = `${r}-${c}`;
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            boardDiv.appendChild(tile);
        }
        board.push(row);
    }
}

function setPiece() {
    if (gameOver) return;

    let c = parseInt(this.id.split("-")[1]);
    let r = currColumns[c];

    if (r < 0) return;

    board[r][c] = currPlayer;
    let tile = document.getElementById(`${r}-${c}`);
    let piece = document.createElement("div"); 

    const display = document.getElementById("winner-display");
    
    if (currPlayer === P1) {
        piece.classList.add("p1-piece");
        tile.appendChild(piece);
        currPlayer = P2;
        display.innerText = "Rose's Turn";
        display.style.color = "var(--rose-glow)";
    } else {
        piece.classList.add("p2-piece");
        tile.appendChild(piece);
        currPlayer = P1;
        display.innerText = "Teal's Turn";
        display.style.color = "var(--teal-glow)";
    }

    currColumns[c] = r - 1;
    checkWinner();
}

function checkWinner() {
   
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ' && board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                announceWinner(board[r][c]); return;
            }
        }
    }
    
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] != ' ' && board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]) {
                announceWinner(board[r][c]); return;
            }
        }
    }
    
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ' && board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                announceWinner(board[r][c]); return;
            }
        }
    }
   
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ' && board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                announceWinner(board[r][c]); return;
            }
        }
    }
}

function announceWinner(winner) {
    const display = document.getElementById("winner-display");
    display.innerText = `🏆 ${winner} Dominates!`;
    display.style.color = "white";
    display.parentElement.style.background = winner === "Teal" ? "var(--teal-glow)" : "var(--rose-glow)";
    display.parentElement.style.boxShadow = "0 0 30px rgba(255,255,255,0.3)";
    gameOver = true;
}
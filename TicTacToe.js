const gameTable = document.getElementById("game-table")
let board = [];
let counter = 0;
const GameBoard = (() => {
    for(i = 0; i < 9; i++){
        let divMaker = document.createElement("div")
        divMaker.className = "game-table-part";
        divMaker.id = i;
        gameTable.appendChild(divMaker);
    }
    const addListeners = () => {
        for(i = 0; i < 9; i++){
            divGetter = document.getElementById(i);
            divGetter.addEventListener("click", addToBoard);
            divGetter.style = "cursor: pointer;";
        }
    }
    const removeListeners = () => {
        for(i = 0; i < 9; i++){
            let getDiv = document.getElementById(i)
            getDiv.removeEventListener("click", addToBoard);
            getDiv.style = "cursor: unset;";
        }
    }
    return{
        removeListeners, addListeners
    };
    
})();

const players = (playerOption) => {
    player = playerOption;
    winner = false;
    GameBoard.addListeners()
    const Win = () => {
        winner = true;
    }
    return Win;
}

const addToBoard = (e) => {
    count = counter % 2;
    obj = document.getElementById(e.target.id);
    switch(count){
        case 0:
            if(obj.innerText == ""){
                board[obj.id] = "X"
                addToGameBoard()
                counter++
                gameFlow.CheckForWin();
            }
            else{
                obj.removeEventListener("click", addToBoard);
            }
            break;
        case 1:
            if(obj.innerText == ""){
                board[obj.id] = "O"
                addToGameBoard()
                counter++
                gameFlow.CheckForWin();
            }
            else{
                obj.removeEventListener("click", addToBoard);
            }
    }
}

const addToGameBoard = () => {
    for(i = 0; i < 9; i++){
        if(board[i] == undefined){
            let term = document.getElementById(i);
            term.innerText = "";
        }
        else{
            let term = document.getElementById(i);
            term.innerText = board[i];
        }
    }
}

const gameFlow = (() => {
    let xPlayer = players("X");
    let oPlayer = players("O");
    const CheckForWin = () => {
        if(diagonalWins() == "X" || diagonalWins() == "O" || verticalWins() == "X" || verticalWins() == "O" ||  horizontalWins() == "X" ||  horizontalWins() == "O"){
            GameBoard.removeListeners();
            if(diagonalWins() == "X" || verticalWins() == "X" ||  horizontalWins() == "X"){
                document.getElementById("game-winner").innerText = "X won the Game"
            }
            else if(diagonalWins() == "O" || verticalWins() == "O" ||  horizontalWins() == "O"){
                document.getElementById("game-winner").innerText = "O won the Game"
            }
        }
        else if(counter == 9){
            console.log("draw")
            GameBoard.removeListeners();
        }
    }
    const diagonalWins = () => {
        if(board[0] == board[4] && board[0] == board[8] && board[0] != undefined && board[0] == "X"){
            return "X";
        }
        else if(board[0] == board[4] && board[0] == board[8] && board[0] != undefined && board[0] == "O"){
            return "O";
        }
        else if(board[2] == board[4] && board[2] == board[6] && board[2] != undefined && board[2] == "X"){
            return "X";
        }
        else if(board[2] == board[4] && board[2] == board[6] && board[2] != undefined && board[2] == "O"){
            return "O";
        }
        else{
            return false;
        }
    }
    const verticalWins = () => {
        if(board[0] == board[3] && board[0] == board[6] && board[0] != undefined && board[0] == "X"){
            return "X";
        }
        else if(board[0] == board[3] && board[0] == board[6] && board[0] != undefined && board[0] == "O"){
            return "O";
        }
        else if(board[1] == board[4] && board[1] == board[7] && board[1] != undefined && board[1] == "X"){
            return "X";
        }
        else if(board[1] == board[4] && board[1] == board[7] && board[1] != undefined && board[1] == "O"){
            return "O";
        }
        else if(board[2] == board[5] && board[2] == board[8] && board[2] != undefined && board[2] == "X"){
            return "X";
        }
        else if(board[2] == board[5] && board[2] == board[8] && board[2] != undefined && board[2] == "O"){
            return "O";
        }
        else{
            return false;
        }
    }
    const horizontalWins = () => {
        if(board[0] == board[1] && board[0] == board[2] && board[0] != undefined && board[0] == "X"){
            return "X";
        }
        else if(board[0] == board[1] && board[0] == board[2] && board[0] != undefined && board[0] == "O"){
            return "O";
        }
        else if(board[3] == board[4] && board[3] == board[5] && board[3] != undefined && board[3] == "X"){
            return "X";
        }
        else if(board[3] == board[4] && board[3] == board[5] && board[3] != undefined && board[3] == "O"){
            return "O";
        }
        else if(board[6] == board[7] && board[6] == board[8] && board[6] != undefined && board[6] == "X"){
            return "X";
        }
        else if(board[6] == board[7] && board[6] == board[8] && board[6] != undefined && board[6] == "O"){
            return "O";
        }
        else{
            return false;
        }
    }
    const reset = () => {
        counter = 0;
        board = [];
        GameBoard.removeListeners()
        addToGameBoard()
        GameBoard.addListeners()
        document.getElementById("game-winner").innerText = ""
    }
    return{CheckForWin, reset}
})()

const gameBoard = (function () {
    const body = document.querySelector('body');
    const guiBoard = document.querySelector('.container');
    const gameBoard = Array.from(document.querySelectorAll('.cell'));
    


    
})();


const Player = function (name, playerTurn, assignedLetter) {
    let getName = name.toUpperCase();
    return {getName, playerTurn, assignedLetter};

}

const gameFlow = function () {
    let x_Text = "X";
    let o_Text = "O";
    //Assign X or O to player
    //Alternate player turns
    //Cell display X or O When clicked Depending on player 1 or 2
    //check if three of same letter in row / column/ or diagnal
    //announce thr winner

    const playerTurn = "one";

}
const game = (function() {

    const gameFlow = (function () {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        const xArray = [];
        const oArray = [];
        let turnDisplay = document.querySelector('.turn-display');
        let turn = 1;
       
    const gameBoard = (function () {
        

        const body = document.querySelector('body');
        const container = document.querySelector('.container');
        const gameBoard = Array.from(document.querySelectorAll('.cell'));
        gameBoard.forEach(function (tile) {
            tile.addEventListener("click", function () {
                if (turn === 1) { 
                    const letterX = document.createElement('h3');
                    letterX.innerText = "X";
                    tile.appendChild(letterX);
                    turnDisplay.innerText = "Player 2";
                    let index = gameBoard.indexOf(tile)
                    xArray.push(index)
                   
                    for (let i = 0; i < winningConditions.length; i++) {
                        if (xArray.toString() == winningConditions[i].toString()) {
                            turnDisplay.innerText = "Player One Wins!";
                        } else {
                            turn = 2
                        }
                    }
                } else {
                    const letterO = document.createElement('h3');
                    letterO.innerText = "O";
                    tile.appendChild(letterO);
                    turnDisplay.innerText = "Player 1";
                    let index = gameBoard.indexOf(tile)
                    oArray.push(index)
                    console.log(oArray)

                    
                    for (let i = 0; i < winningConditions.length; i++) {
                        if (oArray.toString() == winningConditions[i].toString()) {
                            turnDisplay.innerText = "Player Two Wins!";
                        } else {
                            turn = 1
                        }
                    }
                }    
            })
            
        })   
        container.addEventListener("click", function () {
            
        })
        
    })();


    const Player = function (name, playerTurn, assignedLetter) {
        let getName = name.toUpperCase();
        let letter = assignedLetter.toUpperCase();
        return {getName, playerTurn, letter};
    }
        let nameOne = prompt("Player 1 Name: ", "player one");
        let nameTwo = prompt("Player 2 Name: ", "player two");
        const playerOne = Player(nameOne, 1, 'x');
        const playerTwo = Player(nameTwo, 2, 'o');

        console.log(playerOne);
        console.log(playerTwo);

    })();

    })();
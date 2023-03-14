function createGameBoard(gameBoard){
    for (let i = 0; i < 20; i++) {
        gameBoard[i] = []
        for (let j = 0; j < 20; j++) {
            gameBoard.push(gameBoard[i][j])
        }
    }
}
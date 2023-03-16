function resetASet() {
    if (confirm('This round will be reset!')) {
        gameBoard = GAME_BOARD
        initialChar = INITIAL_CHAR

        renewPoint(oPoint, xPoint)

        createGameBoard(gameBoard)
        displayGameBoard()

        if (turn % 2 === 0) {
            alert('O GOES FIRST!')
        } else {
            alert('X GOES FIRST!')
        }
    }
}
function reloadGameBoard() {
    if (confirm('Your game will be restarted!')) {
        gameBoard = GAME_BOARD
        turn = TURN
        initialChar = INITIAL_CHAR
        oPoint = INIT_POINT
        xPoint = INIT_POINT

        renewPoint(oPoint, xPoint)

        createGameBoard(gameBoard)
        displayGameBoard()
        alert('O GOES FIRST!')
    }
}
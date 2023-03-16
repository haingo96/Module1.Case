function reloadAfterWin() {
    if (confirm('Your game will be restarted!')) {
        gameBoard = GAME_BOARD
        initialChar = INITIAL_CHAR

        createGameBoard(gameBoard)
        displayGameBoard()
    }
}
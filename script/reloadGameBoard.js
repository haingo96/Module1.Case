function reloadGameBoard() {
    if (confirm('Your game will be restarted!')) {
        gameBoard = GAME_BOARD
        turn = TURN
        initialChar = INITIAL_CHAR

        createGameBoard(gameBoard)
        displayGameBoard()
        alert('O GOES FIRST!')
    }
}
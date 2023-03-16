function reloadAfterWin(lastGameElementValue) {
    if (confirm('Your game will be restarted!')) {
        if (lastGameElementValue === 'X') {
            alert('O GOES FIRST!')
        } else {
            alert('X GOES FIRST!')
        }
        gameBoard = GAME_BOARD
        initialChar = INITIAL_CHAR

        createGameBoard(gameBoard)
        displayGameBoard()
    }
}
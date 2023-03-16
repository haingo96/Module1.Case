function reloadAfterWin(lastGameElementValue) {
    if (confirm('Your game will be restarted!')) {
        if (lastGameElementValue === 'X') {
            alert('O GOES FIRST!')
            xPoint++
        } else {
            alert('X GOES FIRST!')
            oPoint++
        }

        renewPoint(oPoint, xPoint)

        gameBoard = GAME_BOARD
        initialChar = INITIAL_CHAR

        createGameBoard(gameBoard)
        displayGameBoard()
    }
}
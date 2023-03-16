function alertSetResult(gameBoardElement) {
    if (gameBoardElement === 'X') {
        alert('X won!')
        return gameBoardElement
    } else {
        alert('O won!')
        return gameBoardElement
    }
}
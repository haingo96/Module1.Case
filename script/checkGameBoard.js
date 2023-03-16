function checkRow(gameBoard) {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            if (
                (gameBoard[i][j] === 'X' || gameBoard[i][j] === 'O')
                && gameBoard[i][j] === gameBoard[i][j + 1]
                && gameBoard[i][j + 1] === gameBoard[i][j + 2]
                && gameBoard[i][j + 2] === gameBoard[i][j + 3]
                && gameBoard[i][j + 3] === gameBoard[i][j + 4]
            ) {
                alertSetResult(gameBoard[i][j])
                reloadAfterWin(gameBoard[i][j])
            }
        }
    }
}

function checkCol(gameBoard) {
    for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
            if (
                (gameBoard[i][j] === 'X' || gameBoard[i][j] === 'O')
                && gameBoard[i][j] === gameBoard[i + 1][j]
                && gameBoard[i + 1][j] === gameBoard[i + 2][j]
                && gameBoard[i + 2][j] === gameBoard[i + 3][j]
                && gameBoard[i + 3][j] === gameBoard[i + 4][j]
            ) {
                alertSetResult(gameBoard[i][j])
                reloadAfterWin(gameBoard[i][j])
            }
        }
    }
}

function checkRightDownDiagonal(gameBoard) {
    checkUpperRightDownDiagonal(gameBoard)
    checkLowerRightDownDiagonal(gameBoard)
}

function checkLeftDownDiagonal(gameBoard) {
    checkUpperLeftDownDiagonal(gameBoard)
    checkLowerLeftDownDiagonal(gameBoard)
}

function checkGameBoard(gameBoard) {
    checkRow(gameBoard)
    checkCol(gameBoard)
    checkRightDownDiagonal(gameBoard)
    checkLeftDownDiagonal(gameBoard)
}
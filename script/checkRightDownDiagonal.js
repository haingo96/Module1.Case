function checkUpperRightDownDiagonal(gameBoard) {
    for (let i = 0, j = 0; j < 20; j++) {
        for (let m = i, n = j; m < 20; m++, n++) {
            if (
                (gameBoard[m][n] === 'X' || gameBoard[m][n] === 'O')
                && gameBoard[m][n] === gameBoard[m + 1][n + 1]
                && gameBoard[m + 1][n + 1] === gameBoard[m + 2][n + 2]
                && gameBoard[m + 2][n + 2] === gameBoard[m + 3][n + 3]
                && gameBoard[m + 3][n + 3] === gameBoard[m + 4][n + 4]
            ) {
                if (gameBoard[m][n] === 'X') {
                    alert('X won!')
                } else {
                    alert('O won!')
                }
            }
        }
    }
}

function checkLowerRightDownDiagonal(gameBoard) {
    for (let i = 1, j = 0; i < 20; i++) {
        for (let m = i, n = j; m < 20; m++, n++) {
            if (
                (gameBoard[m][n] === 'X' || gameBoard[m][n] === 'O')
                && gameBoard[m][n] === gameBoard[m + 1][n + 1]
                && gameBoard[m + 1][n + 1] === gameBoard[m + 2][n + 2]
                && gameBoard[m + 2][n + 2] === gameBoard[m + 3][n + 3]
                && gameBoard[m + 3][n + 3] === gameBoard[m + 4][n + 4]
            ) {
                if (gameBoard[m][n] === 'X') {
                    alert('X won!')
                } else {
                    alert('O won!')
                }
            }
        }
    }
}
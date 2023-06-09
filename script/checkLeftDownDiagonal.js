function checkUpperLeftDownDiagonal(gameBoard) {
    for (let i = 0, j = 19; j >= 0; j--) {
        for (let k = i, l = j; l >= 0; k++, l--) {
            if (
                (gameBoard[k][l] === 'X' || gameBoard[k][l] === 'O')
                && gameBoard[k][l] === gameBoard[k + 1][l - 1]
                && gameBoard[k + 1][l - 1] === gameBoard[k + 2][l - 2]
                && gameBoard[k + 2][l - 2] === gameBoard[k + 3][l - 3]
                && gameBoard[k + 3][l - 3] === gameBoard[k + 4][l - 4]
            ) {
                document.getElementById(`gameBoard[${k}][${l}]`).style.backgroundColor = '#e1ad01'
                document.getElementById(`gameBoard[${k + 1}][${l - 1}]`).style.backgroundColor = '#e1ad01'
                document.getElementById(`gameBoard[${k + 2}][${l - 2}]`).style.backgroundColor = '#e1ad01'
                document.getElementById(`gameBoard[${k + 3}][${l - 3}]`).style.backgroundColor = '#e1ad01'
                document.getElementById(`gameBoard[${k + 4}][${l - 4}]`).style.backgroundColor = '#e1ad01'

                requestAnimationFrame(() => {
                    setTimeout(() => {
                        alertSetResult(gameBoard[k][l])
                        reloadAfterWin(gameBoard[k][l])
                    })
                })
            }
        }
    }
}

function checkLowerLeftDownDiagonal(gameBoard) {
    for (let i = 1, j = 19; i < 20; i++) {
        for (let k = i, l = j; k < 20; k++, l--) {
            if (
                (gameBoard[k][l] === 'X' || gameBoard[k][l] === 'O')
                && gameBoard[k][l] === gameBoard[k + 1][l - 1]
                && gameBoard[k + 1][l - 1] === gameBoard[k + 2][l - 2]
                && gameBoard[k + 2][l - 2] === gameBoard[k + 3][l - 3]
                && gameBoard[k + 3][l - 3] === gameBoard[k + 4][l - 4]
            ) {
                document.getElementById(`gameBoard[${k}][${l}]`).style.backgroundColor = '#e1ad01'
                document.getElementById(`gameBoard[${k + 1}][${l - 1}]`).style.backgroundColor = '#e1ad01'
                document.getElementById(`gameBoard[${k + 2}][${l - 2}]`).style.backgroundColor = '#e1ad01'
                document.getElementById(`gameBoard[${k + 3}][${l - 3}]`).style.backgroundColor = '#e1ad01'
                document.getElementById(`gameBoard[${k + 4}][${l - 4}]`).style.backgroundColor = '#e1ad01'

                requestAnimationFrame(() => {
                    setTimeout(() => {
                        alertSetResult(gameBoard[k][l])
                        reloadAfterWin(gameBoard[k][l])
                    })
                })

            }
        }
    }
}
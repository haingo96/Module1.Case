function inputValueAndCheck(row, col) {
    if (gameBoard[row][col] !== 'X' && gameBoard[row][col] !== 'O') {
        if (turn % 2 !== 0) {
            gameBoard[row][col] = 'X'
            document.getElementById(`gameBoard[${row}][${col}]`).innerText = 'X'
            document.getElementById(`gameBoard[${row}][${col}]`).style.color = 'red'
        } else {
            gameBoard[row][col] = 'O'
            document.getElementById(`gameBoard[${row}][${col}]`).innerText = 'O'
            document.getElementById(`gameBoard[${row}][${col}]`).style.color = 'blue'
        }

        requestAnimationFrame(() => {
            setTimeout(() => {
                checkGameBoard(gameBoard)
                turn++
            })
        })
    }
}
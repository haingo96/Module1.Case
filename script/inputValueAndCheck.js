function inputValueAndCheck(row, col) {
    if (turn % 2 !== 0) {
        gameBoard[row][col] = 'X'
        document.getElementById(`gameBoard[${row}][${col}]`).innerText = 'X'
        document.getElementById(`gameBoard[${row}][${col}]`).style.color = 'red'
    } else {
        gameBoard[row][col] = 'O'
        document.getElementById(`gameBoard[${row}][${col}]`).innerText = 'O'
        document.getElementById(`gameBoard[${row}][${col}]`).style.color = 'blue'
    }
    checkGameBoard(gameBoard)
    turn++
}
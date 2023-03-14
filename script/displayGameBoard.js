function displayGameBoard() {
    for (let i = 0; i < 20; i++) {
        initialChar += '<div class="lineContainer">'
        for (let j = 0; j < 20; j++) {
            initialChar += `<div class="gameElement" id="gameBoard[${i}][${j}]" onclick="inputValueAndCheck(${i},${j})"></div>`
            document.getElementById('gameContainer').innerHTML = initialChar
        }
        initialChar += '</div>'
        document.getElementById('gameContainer').innerHTML = initialChar
    }
}
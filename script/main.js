const GAME_BOARD = []
const INITIAL_CHAR = ''
const TURN = 0
const INIT_POINT = 0

let gameBoard = GAME_BOARD
let initialChar = INITIAL_CHAR
let turn = TURN
let oPoint = INIT_POINT
let xPoint = INIT_POINT

createGameBoard(gameBoard)
displayGameBoard()
requestAnimationFrame(() => {
    setTimeout(() => {
        alert('O GOES FIRST!')
    })
})
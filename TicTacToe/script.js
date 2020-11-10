const x_class = 'x';
const circle_class = 'circle'
const Winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

const winningMessageElement = document.getElementById('winning-message')
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageText = document.querySelector('[data-winning-message-text]')
const restartButton = document.getElementById('restartButton')
let circleturn

startGame()

restartButton.addEventListener('click', startGame)

function startGame(){
    cellElements.forEach(cell => {
        cell.classList.remove(x_class)
        cell.classList.remove(circle_class)
        cell.removeEventListener('click', handleclick)
        cell.addEventListener('click', handleclick, {once: true})   
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleclick(e)
{
    //placeMak
    const cell = e.target
    const currentclass = circleturn ? circle_class : x_class
    placeMark(cell, currentclass)
    //Check For win
    if(checkWin(currentclass))
    {
        endgame(false)
    }
    else if(isDraw()){
        endgame(true)
    }
    else{
        swapTurns()
        setBoardHoverClass()
    }
    //check for draw
    //switch turns
    //swapTurns()
    //hover effect
    //setBoardHoverClass()
}

function endgame(draw){
    if(draw){ 
        winningMessageText.innerText = 'Draw!'
    }
    else{
        winningMessageText.innerText = `${circleturn ? "O's" :
    "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw(){
    return [...cellElements].every(cell =>{
        return cell.classList.contains(x_class) ||
        cell.classList.contains(circle_class)
    })
}

function placeMark(cell, currentclass)
{
    cell.classList.add(currentclass)
}
function swapTurns(){
    circleturn = !circleturn;
}

function setBoardHoverClass(){
    board.classList.remove(x_class)
    board.classList.remove(circle_class)

    if(circleturn)
    {
        board.classList.add(circle_class)
    }
    else{
        board.classList.add(x_class)
    }
}

function checkWin(currentclass)
{
    return Winning_combinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentclass)
        })
    })
}
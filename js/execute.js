import {
    allCell,
    playAgainDiv,
    resultLabel,
    turnLabel,
    img
} from './selector'

//import img json
import imgJsonData from "../img.json"

let sign = true //sign true for 'O' and false for 'X'
const arrO = [] //clicked cell arr for 'O'
const arrX = [] //clicked cell arr for 'X'

//winningProbabilityCells
const winningProbabilityCells = [
    [1, 2, 3],
    [1, 5, 9],
    [1, 4, 7],
    [4, 5, 6],
    [7, 8, 9],
    [2, 5, 8],
    [3, 6, 9],
    [7, 5, 3]
]


//function to call for cell click event listener
export function executeXO(cell, cellNum) {
    if (sign) { //for O
        arrO.push(cellNum) //store clicked cell to arr O
        cell.textContent = "O"

        checkResult(arrO)
        //change turn label to X cuz O turn is finished
        turnLabel.textContent = "X"
    } else { //for X
        arrX.push(cellNum) //store clicked cell to arr X
        cell.textContent = "X"

        checkResult(arrX)
        //change turn label to O cuz X turn is finished
        turnLabel.textContent = "O"
    }

    //disable click event
    cell.style.pointerEvents = "none"
    sign = !sign
}

//check the result if the game win
function checkResult(arr) {
    // win case
    //this function will return true if the arr given is included in winning probability cells arr
    if (executeResult(arr)) {

        let winner = sign ? "O" : "X"

        resultLabel.textContent = "Winner is " + winner

        //disable click on all cell
        allCell.forEach(i => i.style.pointerEvents = "none")

        //show img
        img.style.display = "block"
        img.src = imgJsonData.win

        //create and show play again btn
        createPlayAgainBtn()
    } else if (arrO.length === 5 && arrX.length === 4) { //draw case
        resultLabel.textContent = "Match is Draw"
        //show img
        img.style.display = "block"
        img.src = imgJsonData.draw

        createPlayAgainBtn()
    }

}

//true will return if the arr given is included in winning probability, othrewise false
function executeResult(arr) {
    return winningProbabilityCells.map(i => {
        return multipleInArray(arr, i)
    }).includes(true)
}

function multipleInArray(arr, values) {
    return values.every(value => {
        return arr.includes(value)
    });
}

function createPlayAgainBtn() {
    const playAgainBtn = document.createElement("button")
    playAgainBtn.textContent = "Play Again"
    playAgainBtn.style.padding = "12px"
    playAgainBtn.style.borderRadius = "5px"
    playAgainBtn.style.border = "1px"
    playAgainBtn.style.backgroundColor = "aqua"
    playAgainBtn.style.cursor = "pointer"
    playAgainDiv.appendChild(playAgainBtn)

    playAgainBtn.addEventListener("click", (e) => {
        //reload page
        window.location.href = "/"
    })
}
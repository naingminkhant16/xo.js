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

//check the result if the game win
function checkResult(arr) {
    let res;
    arr.forEach(item => {
        switch (item) {
            case 1:
                res = [
                    arr.includes(2) && arr.includes(3),
                    arr.includes(5) && arr.includes(9),
                    arr.includes(4) && arr.includes(7)
                ]
                break

            case 2:
                res = [
                    arr.includes(1) && arr.includes(3),
                    arr.includes(5) && arr.includes(8)
                ]
                break

            case 3:
                res = [
                    arr.includes(1) && arr.includes(2),
                    arr.includes(5) && arr.includes(7),
                    arr.includes(6) && arr.includes(9)
                ]
                break

            case 4:
                res = [
                    arr.includes(1) && arr.includes(7),
                    arr.includes(5) && arr.includes(6)
                ]
                break

            case 5:
                res = [
                    arr.includes(1) && arr.includes(9),
                    arr.includes(3) && arr.includes(7),
                    arr.includes(2) && arr.includes(8),
                    arr.includes(4) && arr.includes(6)
                ]
                break

            case 6:
                res = [
                    arr.includes(3) && arr.includes(9),
                    arr.includes(5) && arr.includes(4)
                ]
                break

            case 7:
                res = [
                    arr.includes(1) && arr.includes(4),
                    arr.includes(5) && arr.includes(3),
                    arr.includes(8) && arr.includes(9)
                ]
                break

            case 8:
                res = [
                    arr.includes(2) && arr.includes(5),
                    arr.includes(7) && arr.includes(9)
                ]
                break

            case 9:
                res = [
                    arr.includes(3) && arr.includes(6),
                    arr.includes(1) && arr.includes(5),
                    arr.includes(7) && arr.includes(8)
                ]
                break
            default:
                res = [false]
        }
    })

    // win case
    if (res.includes(true)) {

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
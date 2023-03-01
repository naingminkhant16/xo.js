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
                    multipleInArray(arr, [2, 3]),
                    multipleInArray(arr, [5, 9]),
                    multipleInArray(arr, [4, 7])
                ]
                break

            case 2:
                res = [
                    multipleInArray(arr, [1, 3]),
                    multipleInArray(arr, [5, 8])
                ]
                break

            case 3:
                res = [
                    multipleInArray(arr, [1, 2]),
                    multipleInArray(arr, [5, 7]),
                    multipleInArray(arr, [6, 9])
                ]
                break

            case 4:
                res = [
                    multipleInArray(arr, [1, 7]),
                    multipleInArray(arr, [5, 6]),
                ]
                break

            case 5:
                res = [
                    multipleInArray(arr, [1, 9]),
                    multipleInArray(arr, [3, 7]),
                    multipleInArray(arr, [2, 8]),
                    multipleInArray(arr, [4, 6])
                ]
                break

            case 6:
                res = [
                    multipleInArray(arr, [3, 9]),
                    multipleInArray(arr, [5, 4]),
                ]
                break

            case 7:
                res = [
                    multipleInArray(arr, [1, 4]),
                    multipleInArray(arr, [5, 3]),
                    multipleInArray(arr, [8, 9])
                ]
                break

            case 8:
                res = [
                    multipleInArray(arr, [2, 5]),
                    multipleInArray(arr, [7, 9])
                ]
                break

            case 9:
                res = [
                    multipleInArray(arr, [3, 6]),
                    multipleInArray(arr, [1, 5]),
                    multipleInArray(arr, [7, 8]),
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

function multipleInArray(arr, values) {
    return values.every(value => {
        return arr.includes(value)
    });
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
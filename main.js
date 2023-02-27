import './style.css'

const allCell = document.querySelectorAll('.cell')
const playAgainDiv = document.getElementById('play-again')


const cell1 = document.getElementById('cell1')
const cell2 = document.getElementById('cell2')
const cell3 = document.getElementById('cell3')
const cell4 = document.getElementById('cell4')
const cell5 = document.getElementById('cell5')
const cell6 = document.getElementById('cell6')
const cell7 = document.getElementById('cell7')
const cell8 = document.getElementById('cell8')
const cell9 = document.getElementById('cell9')
const turnLabel = document.getElementById("turn-label")
const resultLabel = document.getElementById("result-label")

// true == O false == X 
// cell == cell
// cellNum == cell num
let sign = true
let arrO = []
let arrX = []


function executeXO(cell, cellNum) {

  if (sign) { //for O
    arrO.push(cellNum)
    cell.textContent = "O"

    checkResult(arrO)
    //change turn label to X cuz O turn is finished
    turnLabel.textContent = "X"
  } else { //for X
    arrX.push(cellNum)
    cell.textContent = "X"

    checkResult(arrX)
    //change turn label to O cuz X turn is finished
    turnLabel.textContent = "O"
  }

  //disable click event
  cell.style.pointerEvents = "none"
  sign = !sign
}

function checkResult(arr) {
  let res
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

  //win 
  if (res.includes(true)) {
    let winner
    sign ? winner = "O" : winner = "X"

    resultLabel.textContent = "Winner is " + winner
    //disable click on all cell
    allCell.forEach(i => i.style.pointerEvents = "none")

    //create and show play again btn
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

}

cell1.addEventListener('click', function () {
  executeXO(cell1, 1)
})

cell2.addEventListener('click', function () {
  executeXO(cell2, 2)
})

cell3.addEventListener('click', function () {
  executeXO(cell3, 3)
})

cell4.addEventListener('click', function () {
  executeXO(cell4, 4)
})

cell5.addEventListener('click', function () {
  executeXO(cell5, 5)
})

cell6.addEventListener('click', function () {
  executeXO(cell6, 6)
})

cell7.addEventListener('click', function () {
  executeXO(cell7, 7)
})

cell8.addEventListener('click', function () {
  executeXO(cell8, 8)
})

cell9.addEventListener('click', function () {
  executeXO(cell9, 9)
})
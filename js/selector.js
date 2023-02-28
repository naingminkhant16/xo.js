const allCell = document.querySelectorAll('.cell')
const playAgainDiv = document.getElementById('play-again')

const turnLabel = document.getElementById("turn-label")
const resultLabel = document.getElementById("result-label")

const img = document.getElementById("img")

const cells = [
    document.getElementById('cell-1'),
    document.getElementById('cell-2'),
    document.getElementById('cell-3'),
    document.getElementById('cell-4'),
    document.getElementById('cell-5'),
    document.getElementById('cell-6'),
    document.getElementById('cell-7'),
    document.getElementById('cell-8'),
    document.getElementById('cell-9'),
]
export {
    allCell,
    playAgainDiv,
    cells,
    turnLabel,
    resultLabel,
    img
}
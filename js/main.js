import '../style/style.css'
import {
  cells
} from './selector'

import {
  executeXO
} from './execute'

cells.forEach((cell, index) => {
  cell.addEventListener('click', function () {
    executeXO(cell, index + 1)
  })
})
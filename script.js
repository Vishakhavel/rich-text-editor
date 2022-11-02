let optionButtons = docuemnt.querySelectorAll('.option-button')

let advancedOptionButton = docuemnt.querySelectorAll('.adv-option-button')

let fontName = document.getElementById('fontName')
let fontSize = document.getElementById('fontSize')
let writingArea = document.getElementById('text-input')
let linkButton = document.getElementById('createLink')
let alignButtons = document.querySelectorAll('.align')
let spacingButtons = document.querySelectorAll('.spacing')
let formatButtons = document.querySelectorAll('.format')
let scriptButtons = document.querySelectorAll('.script')

// list of font list

let fontList = [
  'Arial',
  'Verdana',
  'Times New Roman',
  'Garamond',
  'Courier New',
  'Cursive',
]

// initial settings

const initializer = () => {
  // functoin calls for highlight buttons
  highlighter(alignButtons, true)
  highlighter(spacingButtons, true)
  highlighter(formatButtons, false)
  highlighter(scriptButtons, true)
}

fontList.map((value) => {
  let option = document.createElement('option')
  option.val = value
  option.innerHTML = value
  fontName.appendChild(option)
})

const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener('click', () => {
      // needsRemoval = true means only one show be highlighted and the others should be normal

      if (needsRemoval) {
        let alreadyActive = false

        // if current button is already active
        if (button.classList.contains('active')) {
          alreadyActive = true
        }
        // remove highlight from other buttons

        highlightRemover(className)
        if (!alreadyActive) {
          button.classList.add('active')
        }
      }

      //
      else {
        // if other buttons can be highlighted
        button.classList.toggle('active')
      }
    })
  })
}

window.onload = initializer()
const highlightRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove('active')
  })
}

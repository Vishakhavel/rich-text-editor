let optionButtons = document.querySelectorAll('.option-button')

let advancedOptionButton = document.querySelectorAll('.adv-option-button')

let fontName = document.getElementById('fontName')
let fontSizeRef = document.getElementById('fontSize')
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

  // appending options to fontName

  fontList.map((value) => {
    let fontOption = document.createElement('option')
    fontOption.value = value
    fontOption.innerHTML = value
    fontName.appendChild(fontOption)
    // console.log(fontOption.value)
  })

  // appending optoins to fontSize

  for (let i = 1; i <= 7; i++) {
    let option = document.createElement('option')
    option.value = i
    option.innerHTML = i
    fontSizeRef.appendChild(option)
  }

  // default size = 3
  fontSizeRef.value = 3
}

const modifyText = (command, defaultUi, value) => {
  // execCommand executes the command on a specific text
  document.execCommand(command, defaultUi, value)
}

// basic operations which don't need value parameter, so the second and third args in the execCommand are false and null.
optionButtons.forEach((currentButton) => {
  currentButton.addEventListener('click', () => {
    modifyText(currentButton.id, false, null)
  })
})

// options that require value parameter.
advancedOptionButton.forEach((currentButton) => {
  currentButton.addEventListener('change', () => {
    modifyText(currentButton.id, false, currentButton.value)
    // console.log(currentButton.value)
  })
})

// link

linkButton.addEventListener('click', () => {
  let userLink = prompt('Enter a URL')
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink)
  } else {
    userLink = 'http://' + userLink
    modifyText(linkButton.id, false, userLink)
  }
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

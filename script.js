const calculateScreen = document.querySelector('.calculate')
const resultScreen = document.querySelector('.result')

// VARIABLE TO STORE CALCULATE VALIUE
let calculateValue = ''

// Array of valid operators
const operators = ['%', '/', '*', '-', '+']

// const num = '123.'
// console.log(num.at(-1));    at(-1) will retirve the last text


// Function called when a number is pressed
function tapNum(numValue) {
    // Prevent the decimal point from being added
    // when the calcution screen is empty
    if (calculateValue == '' && numValue == '.') {
        return;
    }

    // Prevent consecutive decimal point from
    // being added
    if (calculateValue.at(-1) == '.' && numValue == '.') {
        return;
    }

    // Add the number to the calculate the screen
    addCalculateScreen(numValue)
}

// Function called when a operator is pressed
function tapOperator(opratoreValue) {
    // Do not allow an operator if the calulation screen is empty
    if (calculateValue == '') return;

    // prevent consecutive operators from being added
    if (operators.some(operators => calculateValue.at(-1) == operators)) {
        return;
    }

    // if there is a previous result use that result and it`s not an error
    // as the tring value for the next calculation 
    if (resultScreen.textContent != '' && resultScreen.textContent != 'Error') {
        calculateValue = resultScreen.textContent
        resultScreen.textContent = ''
    }

    addCalculateScreen(opratoreValue)
}

// function called when =(equal) button is presed
function tapResult() {
    try {
        resultScreen.textContent = eval(calculateValue)
    } catch (e) {
        resultScreen.textContent = 'Error'
    }
}

// function called when crear(c) button is pressed
function tapClear() {
    // clear the calculation value
    calculateValue = ''

    // result the calculation and result screen  
    calculateScreen.textContent = calculateValue
    resultScreen.textContent = ''
}

// Function called the delete(DEL) button is pressed
function tapDel() {
    //  Remove the last character from the calculion string
    calculateValue = calculateValue.slice(0, -1)

    // Cleaar the result screen
    resultScreen.textContent = ''

    // Update the calculator screen
    calculateScreen.textContent = calculateValue


}


// Function to the a value on the calculation screen
function addCalculateScreen(value) {
    // Append the value to the calculation string
    calculateValue += value
    // Update the calculation screen display
    calculateScreen.textContent = calculateValue
}
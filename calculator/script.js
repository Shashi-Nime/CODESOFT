let currentInput = '';

function appendInput(input) {
    currentInput += input;
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    updateDisplay('');
}

function calculate() {
    try {
        const result = eval(currentInput);
        updateDisplay(result);
        currentInput = result.toString();
    } catch (error) {
        updateDisplay('Error');
    }
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
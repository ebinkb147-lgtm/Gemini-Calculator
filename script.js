const resultInput = document.getElementById('result');
let currentInput = '';

function appendCharacter(char) {
    currentInput += char;
    resultInput.value = currentInput;
}

function clearResult() {
    currentInput = '';
    resultInput.value = '';
}

function deleteLastChar() {
    currentInput = currentInput.slice(0, -1);
    resultInput.value = currentInput;
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        resultInput.value = result;
        currentInput = result.toString();
    } catch (error) {
        resultInput.value = 'Error';
        currentInput = '';
    }
}

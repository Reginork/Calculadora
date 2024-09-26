let currentOperation = ''; // Para almacenar la operación actual
let result = null; // Para almacenar el resultado de la operación
let pendingOperation = null; // Para almacenar la operación pendiente (suma, resta, etc.)
let shouldResetDisplay = false; // Controla si el display debe ser reseteado

// Agrega el número al display y a la operación actual
function appendNumber(number) {
    if (shouldResetDisplay) {
        document.getElementById('display').value = '';
        shouldResetDisplay = false; //
    }
    document.getElementById('display').value += number; 
    currentOperation += number; //
}

// Limpia el display y resetea las variables
function clearDisplay() {
    document.getElementById('display').value = '';
    currentOperation = '';
    result = null;
    pendingOperation = null;
}

// Agrega una operación (suma, resta, etc.) y la muestra en el display
function chooseOperation(operation) {
    if (shouldResetDisplay) shouldResetDisplay = false;

    if (pendingOperation !== null) {
        compute();
    }

    pendingOperation = operation;
    currentOperation += ` ${operation} `;
    document.getElementById('display').value = currentOperation;
}

// Calcula el resultado de la operación actual
function compute() {
    try {
        // Controla la división por cero
        if (currentOperation.includes('/ 0')) {
            document.getElementById('display').value = "You can not divide by 0";
            currentOperation = '';
            return;
        }

        result = eval(currentOperation);
        document.getElementById('display').value = result;
        currentOperation = result.toString();
        shouldResetDisplay = true;
    } catch (error) {
        document.getElementById('display').value = "Error";
        currentOperation = '';
    }
}

// Calcula la raíz cuadrada del número actual
function calculateSquareRoot() {
    let value = parseFloat(document.getElementById('display').value);
    if (value >= 0) {
        result = Math.sqrt(value);
        document.getElementById('display').value = result;
        currentOperation = result.toString();
        shouldResetDisplay = true;
    } else {
        document.getElementById('display').value = "Error";
    }
}

// Calcula el porcentaje del número actual
function calculatePercentage() {
    let value = parseFloat(document.getElementById('display').value); 
    result = value / 100;
    document.getElementById('display').value = result;
    currentOperation = result.toString();
    shouldResetDisplay = true;
}

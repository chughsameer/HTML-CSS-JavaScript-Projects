// Function to clear the display
function clearDisplay() {
    document.getElementsByName("display")[0].value = "";
}

// Function to delete the last character from the display
function deleteLast() {
    var currentValue = document.getElementsByName("display")[0].value;
    document.getElementsByName("display")[0].value = currentValue.slice(0, -1);
}

// Function to add a decimal point to the display
function addDecimal() {
    var currentValue = document.getElementsByName("display")[0].value;
    // Check if there's already a decimal point in the display
    if (currentValue.indexOf(".") === -1) {
        document.getElementsByName("display")[0].value += ".";
    }
}

// Function to append a number or operator to the display
function appendToDisplay(value) {
    document.getElementsByName("display")[0].value += value;
}

// Function to add an operator to the display
function addOperator(operator) {
    var currentValue = document.getElementsByName("display")[0].value;
    // Check if the last character is already an operator
    if (currentValue.slice(-1) !== "+" && currentValue.slice(-1) !== "-" && currentValue.slice(-1) !== "*" && currentValue.slice(-1) !== "/") {
        document.getElementsByName("display")[0].value += operator;
    }
}

// Function to calculate the result
function calculate() {
    var expression = document.getElementsByName("display")[0].value;
    // Use eval() to evaluate the expression
    var result = eval(expression);
    // Display the result
    document.getElementsByName("display")[0].value = result;
}
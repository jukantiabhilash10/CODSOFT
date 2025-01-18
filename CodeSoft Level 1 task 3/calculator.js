// Add event listener to capture keyboard input
document.addEventListener('keydown', function(event) {
    // Only handle key presses that are numeric or operators
    if (event.key.match(/[0-9+\-*/.=]/)) {
        appendToDisplay(event.key);
    }
    // Handle backspace for deletion
    if (event.key === 'Backspace') {
        deleteLast();
    }
    // Handle Enter for calculation
    if (event.key === 'Enter') {
        calculate();
    }
    // Handle Escape for clearing the display
    if (event.key === 'Escape') {
        clearDisplay();
    }
});

// Function to append numbers or operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteLast() {
    const currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    const currentDisplay = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(currentDisplay);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn-calc');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');

// 1. Handle Number & Operator clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const val = button.getAttribute('data-val');
        display.value += val;
    });
});

// 2. Handle Clear
clearBtn.addEventListener('click', () => {
    display.value = '';
});

// 3. Handle Calculation with Conditions 
equalBtn.addEventListener('click', () => {
    const expression = display.value;
    const operators = ['+', '-', '*', '/'];
    const lastChar = expression.slice(-1);

    // Condition: Don't calculate if empty
    if (!expression) return;

    // Condition: Check if it ends with an operator
    if (operators.includes(lastChar)) {
        display.value = "Format Error";
        return;
    }

    // Condition: Check for division by zero
    if (expression.includes('/0')) {
        display.value = "Math Error";
        return;
    }

    // Final result
    display.value = eval(expression);
});
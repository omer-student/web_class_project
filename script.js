const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn-calc');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const val = button.getAttribute('data-val');
        display.value += val;
    });
});


clearBtn.addEventListener('click', () => {
    display.value = '';
});


equalBtn.addEventListener('click', () => {
    const expression = display.value;
    const operators = ['+', '-', '*', '/'];
    const lastChar = expression.slice(-1);

    
    if (!expression) return;

    
    if (operators.includes(lastChar)) {
        display.value = "Format Error";
        return;
    }

    
    if (expression.includes('/0')) {
        display.value = "Math Error";
        return;
    }

    
    display.value = eval(expression);
});
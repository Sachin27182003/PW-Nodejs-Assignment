// Create a command-line Node.js program that simulates a basic calculator. The program should allow
// users to perform addition, subtraction, multiplication, and division operations on two numbers.



const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calculate(operation, num1, num2) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : 'Error: Division by zero';
        default:
            return 'Invalid operation. Use add, subtract, multiply, or divide.';
    }
}


rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
            const result = calculate(operation, num1, num2);
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});

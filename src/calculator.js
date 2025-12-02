// src/calculator.js

function evaluate(expression) {
    // Shunting-yard algorithm to convert infix to RPN
    const tokens = tokenize(expression);
    const rpn = shuntingYard(tokens);
    return evaluateRpn(rpn);
}

function tokenize(expression) {
    const tokens = [];
    let i = 0;

    // Handle empty or whitespace-only expressions early
    if (expression.trim() === '') {
        throw new Error('Empty or whitespace-only expression');
    }

    while (i < expression.length) {
        let char = expression[i];
        if (/\s/.test(char)) {
            i++;
            continue;
        }

        // Handle numbers and decimal points
        if (/\d|\./.test(char)) {
            let num = '';
            while (i < expression.length && (/\d|\./.test(expression[i]))) {
                num += expression[i];
                i++;
            }
            tokens.push(parseFloat(num));
            continue;
        }

        // Handle operators. Special handling for unary minus.
        if (['+', '-', '*', '/'].includes(char)) {
            // Check for unary minus:
            // 1. If it's the first character
            // 2. If it follows another operator (e.g., "1*-2", "1+-2")
            if (char === '-' && (tokens.length === 0 || typeof tokens[tokens.length - 1] !== 'number')) {
                // It's a unary minus, so the next token should be a number
                i++; // Move past the '-'
                // Skip any whitespace after unary minus
                while (i < expression.length && /\s/.test(expression[i])) {
                    i++;
                }

                if (!/\d|\./.test(expression[i])) {
                    throw new Error('Malformed expression: Unary minus not followed by a number');
                }

                let num = '-'; // Start the number with a negative sign
                while (i < expression.length && (/\d|\./.test(expression[i]))) {
                    num += expression[i];
                    i++;
                }
                tokens.push(parseFloat(num));
                continue;
            } else {
                // It's a binary operator
                tokens.push(char);
                i++;
                continue;
            }
        }

        throw new Error('Invalid character in expression: ' + char);
    }
    return tokens;
}

function shuntingYard(tokens) {
    const outputQueue = [];
    const operatorStack = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

    for (let token of tokens) {
        if (typeof token === 'number') {
            outputQueue.push(token);
        } else if (['+', '-', '*', '/'].includes(token)) {
            while (
                operatorStack.length > 0 &&
                precedence[token] <= precedence[operatorStack[operatorStack.length - 1]]
            ) {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.push(token);
        }
        // TODO: Handle parentheses for more complex precedence. For now, assuming basic left-to-right processing with operator precedence.
    }

    while (operatorStack.length > 0) {
        outputQueue.push(operatorStack.pop());
    }

    return outputQueue;
}

function evaluateRpn(rpnTokens) {
    const stack = [];

    if (rpnTokens.length === 0) {
        throw new Error('Empty RPN expression');
    }

    for (let token of rpnTokens) {
        if (typeof token === 'number') {
            stack.push(token);
        } else if (['+', '-', '*', '/'].includes(token)) {
            const b = stack.pop();
            const a = stack.pop();

            if (a === undefined || b === undefined) {
                throw new Error('Invalid RPN expression or insufficient operands');
            }

            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/':
                    if (b === 0) {
                        throw new Error('Division by zero');
                    }
                    stack.push(a / b);
                    break;
                default:
                    throw new Error('Unknown operator: ' + token); // Should not happen if tokenize is correct
            }
        }
    }

    if (stack.length !== 1) {
        throw new Error('Invalid RPN expression or too many operands');
    }

    return stack.pop();
}

module.exports = { evaluate };

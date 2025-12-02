// test/calculator.test.js
const { evaluate } = require('../src/calculator');

describe('Calculator evaluate function', () => {
    // Basic operations
    test('should correctly add two numbers', () => {
        expect(evaluate("1 + 1")).toBe(2);
    });

    test('should correctly subtract two numbers', () => {
        expect(evaluate("5 - 3")).toBe(2);
    });

    test('should correctly multiply two numbers', () => {
        expect(evaluate("2 * 4")).toBe(8);
    });

    test('should correctly divide two numbers', () => {
        expect(evaluate("10 / 2")).toBe(5);
    });

    // Operator precedence
    test('should respect operator precedence (multiplication before addition)', () => {
        expect(evaluate("1 + 2 * 3")).toBe(7);
    });

    test('should respect operator precedence (division before subtraction)', () => {
        expect(evaluate("10 - 2 / 2")).toBe(9);
    });

    // Floating point numbers
    test('should handle floating point addition', () => {
        expect(evaluate("0.1 + 0.2")).toBeCloseTo(0.3);
    });

    test('should handle floating point division', () => {
        expect(evaluate("10 / 3")).toBeCloseTo(3.3333333333333335);
    });

    // Negative numbers
    test('should handle negative numbers in addition', () => {
        expect(evaluate("5 + -2")).toBe(3);
    });

    test('should handle negative numbers in multiplication', () => {
        expect(evaluate("-2 * 3")).toBe(-6);
    });

    test('should handle leading negative number', () => {
        expect(evaluate("-5 + 2")).toBe(-3);
    });

    test('should handle expression with nested negative numbers', () => {
        expect(evaluate("10 + -2 * 3")).toBe(4); // 10 + (-6) = 4
    });

    // Division by zero (expecting error or specific value)
    test('should throw error for division by zero', () => {
        expect(() => evaluate("5 / 0")).toThrow('Division by zero');
    });

    // Invalid expressions
    test('should throw error for invalid characters', () => {
        expect(() => evaluate("1 + a")).toThrow('Invalid character in expression: a');
    });

    // Update expected error messages for these tests
    test('should throw error for malformed expressions', () => {
        // "1 + + 2" now results in "Invalid RPN expression or insufficient operands"
        expect(() => evaluate("1 + + 2")).toThrow('Invalid RPN expression or insufficient operands');
    });

    test('should throw error for empty string', () => {
        expect(() => evaluate("")).toThrow('Empty or whitespace-only expression');
    });

    test('should throw error for expression with only whitespace', () => {
        expect(() => evaluate("   ")).toThrow('Empty or whitespace-only expression');
    });

    test('should throw error for malformed unary minus', () => {
        expect(() => evaluate("5 + -")).toThrow('Malformed expression: Unary minus not followed by a number');
    });


    // More complex expressions
    test('should handle complex expression with mixed operators and precedence', () => {
        expect(evaluate("2 + 3 * 4 - 6 / 2")).toBe(11); // 2 + 12 - 3 = 11
    });

    test('should handle expression with multiple digit numbers', () => {
        expect(evaluate("100 + 20 * 3 - 50")).toBe(110); // 100 + 60 - 50 = 110
    });
});
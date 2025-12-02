# Calculator: input expr(string) output result (number) Specification

## 1. Feature: Basic Calculator

### 1.1. Description
This feature implements a simple calculator capable of performing basic arithmetic operations.

### 1.2. Input
- `expr`: A string representing the mathematical expression to be evaluated.
  - **Type**: string

### 1.3. Output
- `result`: The numerical result of the evaluated expression.
  - **Type**: number

## 2. Acceptance Criteria

- The calculator must accept a string expression as input.
- The calculator must return a numerical result.
- The calculator must support addition, subtraction, multiplication, and division.
- The calculator must handle valid integer and floating-point numbers.
- The calculator must correctly handle operator precedence (e.g., multiplication and division before addition and subtraction).
- The calculator must gracefully handle invalid expressions (e.g., malformed syntax, division by zero) by returning an appropriate error or `NaN`.
- The calculator must not support advanced functions (e.g., trigonometry, logarithms), variables, or parentheses beyond defining order of operations.

## 3. Non-Functional Requirements

- **Accuracy**: Results must be mathematically precise within standard floating-point limitations.
- **Performance**: Evaluation of expressions should be near-instantaneous for typical inputs.
- **Robustness**: The calculator should not crash due to invalid inputs.

## 4. Examples

| Input (`expr`)      | Expected Output (`result`) | Notes                                  |
| :------------------ | :------------------------- | :------------------------------------- |
| "1 + 1"             | 2                          | Basic addition                         |
| "5 - 3"             | 2                          | Basic subtraction                      |
| "2 * 4"             | 8                          | Basic multiplication                   |
| "10 / 2"            | 5                          | Basic division                         |
| "1 + 2 * 3"         | 7                          | Operator precedence (multiplication)   |
| "(1 + 2) * 3"       | 9                          | Parentheses for order of operations    |
| "10 / 3"            | 3.3333...                  | Floating-point division                |
| "5 + -2"            | 3                          | Negative numbers                       |
| "5 / 0"             | Error / Infinity / NaN     | Division by zero (graceful handling)   |
| "abc"               | Error / NaN                | Invalid expression                     |
| "1 + +"             | Error / NaN                | Malformed expression                   |

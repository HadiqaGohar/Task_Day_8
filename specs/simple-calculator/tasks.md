# 1. Receive input 2. Validate expression 3. Evaluate safely 4. Return result Tasks

## Feature: Basic Calculator Implementation

### Task 1: Receive Input

**Description**: Implement the primary function `evaluate` that accepts a string as input.

**Acceptance Criteria**:
- A public function `evaluate(expression: string)` must be defined.
- The function must successfully receive a string parameter.

### Task 2: Validate Expression

**Description**: Implement logic to validate the input expression string for syntax correctness and allowed characters.

**Acceptance Criteria**:
- The validation logic must identify and reject expressions containing invalid characters (e.g., letters, unsupported symbols).
- The validation logic must identify and reject malformed expressions (e.g., "1 + + 2", unmatched parentheses if parentheses support is added later).
- Upon invalid input, the function should return an error indication (e.g., `NaN`, `Error` object, or specific error string).

### Task 3: Evaluate Safely

**Description**: Implement the core logic for parsing and evaluating the validated arithmetic expression, ensuring correct operator precedence and handling of mathematical operations. This task will likely be broken down into sub-tasks (e.g., tokenization, Shunting-yard, RPN evaluation).

**Acceptance Criteria**:
- The evaluation logic must correctly perform addition, subtraction, multiplication, and division.
- Operator precedence (multiplication/division before addition/subtraction) must be correctly applied.
- The evaluation must support both integer and floating-point numbers.
- Division by zero must be detected and result in a defined error or `NaN`.
- Intermediate calculations should not overflow/underflow standard numerical limits unexpectedly.

#### Sub-task 3.1: Tokenization
**Description**: Break down the input expression string into meaningful tokens (numbers, operators).
**Acceptance Criteria**:
- Identifies numbers (integers and floats) and operators (+, -, *, /).
- Ignores whitespace.
- Produces an ordered list/array of tokens.

#### Sub-task 3.2: Infix to RPN Conversion (Shunting-yard)
**Description**: Convert the tokenized infix expression into Reverse Polish Notation (RPN) using the Shunting-yard algorithm.
**Acceptance Criteria**:
- Correctly handles operator precedence.
- Correctly handles operator associativity (if applicable for future extensions).
- Produces an RPN token queue.

#### Sub-task 3.3: RPN Evaluation
**Description**: Evaluate the RPN token queue to produce the final numerical result.
**Acceptance Criteria**:
- Processes RPN tokens in order.
- Performs arithmetic operations based on encountered operators.
- Pushes numbers onto a stack and applies operators to the top elements.
- Returns the final result from the stack.

### Task 4: Return Result

**Description**: Ensure the `evaluate` function returns the final computed numerical result or a clear error indication.

**Acceptance Criteria**:
- If evaluation is successful, the `evaluate` function must return a `number`.
- If evaluation fails (e.g., validation error, math error), the `evaluate` function must return a predefined error value or message.
- The output type must conform to the specification (`number` or `string` for error).

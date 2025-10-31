# Lesson 3: The Chain Rule and Implicit Differentiation

## 3.1 The Chain Rule

If y = f(g(x)), then:

    dy/dx = f'(g(x)) * g'(x)

This means you differentiate the outer function, then multiply by the derivative of the inner function.

---

### Example 1

y = (3x^2 + 2)^5  
y' = 5 * (3x^2 + 2)^4 * (6x)  
y' = 30x * (3x^2 + 2)^4

---

### Example 2

y = sin(e^(2x))  
y' = cos(e^(2x)) * e^(2x) * 2  
y' = 2 * e^(2x) * cos(e^(2x))

---

## 3.2 Implicit Differentiation

Used when y is defined implicitly in terms of x.

Differentiate both sides of the equation with respect to x, treating y as a function of x.  
Each time you differentiate y, multiply by dy/dx.

### Example

Given x^2 + y^2 = 25

    2x + 2y(dy/dx) = 0  
    dy/dx = -x / y

---

## 3.3 Higher-Order Chain Rules

For nested functions like y = f(g(h(x))):

    dy/dx = f'(g(h(x))) * g'(h(x)) * h'(x)

Example:

y = cos(x^3 + 2x)  
y' = -sin(x^3 + 2x) * (3x^2 + 2)
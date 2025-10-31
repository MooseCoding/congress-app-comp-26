# Lesson 1: The Concept of the Derivative

## 1.1 Rate of Change and the Derivative

The derivative of a function measures how the output value changes as the input changes.  
It represents the instantaneous rate of change or the slope of the tangent line to the curve at a given point.

For a function f(x), the average rate of change from x to x + h is:

    (f(x + h) - f(x)) / h

The derivative is obtained by taking the limit as h approaches 0:

    f'(x) = lim (h -> 0) of (f(x + h) - f(x)) / h

This gives the slope of the tangent line to f(x) at the point x.

---

## 1.2 Geometric Interpretation

At each point x = a, the derivative f'(a) gives the slope of the tangent line:

    y - f(a) = f'(a) * (x - a)

If f'(a) is positive, the function is increasing near a.  
If f'(a) is negative, the function is decreasing near a.

---

## 1.3 Examples

1. f(x) = x^2

   f'(x) = lim (h -> 0) [(x + h)^2 - x^2] / h  
          = lim (h -> 0) (2xh + h^2) / h  
          = 2x

2. f(x) = |x|

   The right-hand derivative is 1, and the left-hand derivative is -1.  
   Since these are not equal at x = 0, f'(0) does not exist.

---

## 1.4 When a Function Is Not Differentiable

A function is not differentiable at points where:
- There is a sharp corner or cusp.
- The tangent line is vertical.
- The function is discontinuous.

Example: f(x) = |x| is not differentiable at x = 0.

---

## 1.5 Applications

- The derivative represents velocity when position is given as a function of time.
- In physics, the second derivative represents acceleration.

---

## 1.6 Summary

| Concept | Formula |
|----------|----------|
| Average rate of change | (f(x + h) - f(x)) / h |
| Derivative | f'(x) = lim (h -> 0) of (f(x + h) - f(x)) / h |
| Tangent line | y - f(a) = f'(a)(x - a) |
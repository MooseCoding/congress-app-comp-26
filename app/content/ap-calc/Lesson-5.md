# Lesson 5: Applications of Derivatives

## 5.1 Tangent and Normal Lines

If the slope of the tangent at x = a is f'(a), then:

    Tangent line: y - f(a) = f'(a)(x - a)
    Normal line: y - f(a) = -(1 / f'(a))(x - a)

---

## 5.2 Related Rates

When quantities depend on time, differentiate both sides of an equation with respect to t.

### Example

A balloon’s volume is given by V = (4/3) * pi * r^3.  
If dV/dt = 100 cubic cm per second, find dr/dt when r = 5 cm.

    dV/dt = 4 * pi * r^2 * dr/dt  
    100 = 4 * pi * (25) * dr/dt  
    dr/dt = 1 / pi cm/s

---

## 5.3 Optimization

To find maxima or minima, set the derivative equal to zero and test critical points.

### Example

Find the rectangle with perimeter 20 that maximizes area.

    A = x * y  
    2x + 2y = 20 => y = 10 - x  
    A(x) = x(10 - x) = 10x - x^2  
    A'(x) = 10 - 2x = 0 => x = 5  
    y = 5

The maximum area occurs when the rectangle is a square.

---

## 5.4 Motion Along a Line

Given position s(t):

    Velocity: v(t) = s'(t)
    Acceleration: a(t) = s''(t)

The object moves right when v(t) > 0, left when v(t) < 0, and is momentarily at rest when v(t) = 0.

---

## 5.5 Summary

| Application | Concept |
|--------------|----------|
| Tangent lines | Local linear approximation |
| Related rates | Differentiate with respect to time |
| Optimization | Find where derivative equals zero |
| Motion | Derivative = velocity; second derivative = acceleration |
# Lesson 10 - Functions with Return

Functions don't only draw things. They can also perform a calculation or a short task with the parameters they are given, and send back a result. We've seen this before:

```javascript
random(x, y)            // returns a random value between x and y
dist(x1, y1, x2, y2)    // returns the distance between (x1, y1) and (x2, y2)
```

When you call these functions, they do their task and give you back the answer. This is called **returning** a value. Because they return a number, we can use them anywhere a number is expected:

```javascript
circle(random(width), random(height), 50);

let distance = dist(mouseX, mouseY, 300, 300);
text(distance, 20, 40);
```

## Writing a Function that Returns

Our own functions can return any type of value (number, string, boolean etc.) using the `return` keyword:

```javascript
function addNumbers(numOne, numTwo) {
  let total = numOne + numTwo;
  return total;
}
```

Calling `addNumbers()` takes the two arguments, adds them, and returns the result, a number. So `addNumbers()` can be used anywhere a number is expected:

```javascript
let answer = addNumbers(5, 3);          // answer is 8
text(addNumbers(10, 20), 20, 40);       // displays 30
circle(addNumbers(100, 50), 200, 50);   // circle at x = 150
```

When a function reaches `return`, it **stops** and sends the value back. Any code after the `return` line will not run.

## Another Example

The function below:

- Calculates the distance between a point (`xPos`, `yPos`) and the mouse.
- Uses if statements to choose a colour (green, yellow or red) depending on that distance.
- Returns the colour (p5.js lets us store colours in variables with `color()`).

```javascript
function distanceColour(xPos, yPos) {
  let distance = dist(xPos, yPos, mouseX, mouseY);

  if (distance < 100) {
    return color(0, 255, 0);
  }
  else if (distance < 200) {
    return color(255, 255, 0);
  }
  else {
    return color(255, 0, 0);
  }
}
```

The function is called where we would normally choose the fill colour:

```javascript
fill(distanceColour(150, 300));
circle(150, 300, 80);

fill(distanceColour(450, 300));
circle(450, 300, 80);
```

Because it's a function, it can be used for every circle, and each call returns a different colour depending on that circle's position.

> **AP CSP:** In the AP exam's pseudocode, a procedure returns a value with `RETURN(expression)`. It works the same way.

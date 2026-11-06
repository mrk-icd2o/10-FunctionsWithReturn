/*
   Description: Lesson 10 - Functions with Return example
   Author: Mr. Kowalczewski
   Date of last edit: October 28, 2026
*/

function setup() {
  createCanvas(600, 600);
  textSize(18);
}

function draw() {
  background(220);
  fill(0);
  

  // ----- Built-in functions that return -----
  // dist() "return"s a number, so we can store it or use it directly
  let distance = dist(mouseX, mouseY, 300, 450);
  text(`Distance from mouse to the middle circle: ${round(distance)}`, 20, 40);

  // random() "return"s a number as well:
  //circle(random(width), random(height), 50);
  
  console.log(isTheBest("Mr K"));



  // ----- Our own function that returns -----
  let answer = addNumbers(5, 3);
  text(`addNumbers(5, 3) returns ${answer}`, 20, 70);

  // it can be used anywhere a number is expected
  text(`addNumbers(10, 20) returns ${addNumbers(10, 20)}`, 20, 100);

  // ----- Returning a colour -----
  // the function is called where we would normally choose a fill
  fill(distanceColour(150, 300));
  circle(150, 300, 80);

  fill(distanceColour(450, 300));
  circle(450, 300, 80);

  fill(distanceColour(300, 450));
  circle(300, 450, 80);
}

// adds two numbers and returns the result
function addNumbers(numOne, numTwo) {
  let total = numOne + numTwo;
  return total;
  rect(100, 100, 50, 50); // this will never be reached!
}


function isTheBest(name){
  let message = name + " is the best!";
  return message;
}


// returns green, yellow or red depending on how close the mouse is
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

  console.log("Will this ever be reached?");

}

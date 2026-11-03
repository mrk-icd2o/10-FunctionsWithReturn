/*
   Description:
   Author:
   Date of last edit:
*/

function setup() {
  createCanvas(500, 400);
  background(240);

  // test data
  let myWage = 18.50;
  let myHours = 45;

  // call the function with arguments and store the returned result
  let finalPaycheck = calculateNetPay(myWage, myHours);

  // display the pay stub
  fill(0);
  textSize(24);
  text("Weekly Pay Stub", 30, 50);

  textSize(16);
  text("Hourly Wage: $" + myWage, 30, 100);
  text("Hours Worked: " + myHours + " hrs", 30, 130);

  textSize(20);
  fill(0, 150, 0); // green text for money
  text("FINAL NET PAY: $" + finalPaycheck, 30, 220);
}

// function to calculate net pay using multiple parameters
// wage: hourly rate, hours: total hours worked
function calculateNetPay(wage, hours) {

}

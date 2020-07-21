// Step 3a: declare color variable
var backgroundColor;
// Step 4a: declare/assign variable for moving creature
var moveX = 10;

function setup() {
  createCanvas(400, 400);

  // Step 3b: assign a color using the color function
  backgroundColor = color(45, 70, 40);
}

function draw() {
  background(backgroundColor); // Step 3c: use the color variable


  noFill();
  line(mouseX, mouseY, mouseX + 50, mouseY + 120);

  // Step 2: finish the arrow shape following the mouse
  triangle(mouseX - 0, mouseY - 5, mouseX + 60, mouseY + 20, mouseX - 20, mouseY + 45);
  // triangle(30, 75, 58, 20, 86, 75);

  // Step 4b: draw a creature that moves
  fill(20, 100, 20);
  square(moveX, 345, 50, 10);
  fill(10, 200, 100);
  rect(moveX, 375, 50, 50)
  fill(100, 30, 20);
  square(moveX + 10, 350, 10);
  square(moveX + 30, 350, 10);
  fill(10, 30, 100)
  square(moveX + 18, 370, 15, 5);
  moveX = moveX + 1
}



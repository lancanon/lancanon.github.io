function setup() {
  createCanvas(750, 800);
  background(255);

}


function draw() {
  if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 20, 20);
  } 
}

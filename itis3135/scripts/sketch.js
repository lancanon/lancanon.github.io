function setup() {
  createCanvas(750, 800);
  background(255);

}


function draw() {
  stroke(0);

  let weight = map(mouseX, 0, width, 1, 30);
  strokeWeight(weight);

  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
}
}


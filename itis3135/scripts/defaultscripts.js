function myFunction(submit) {
  var getName = document.getElementById("name").value;
  var getMood = document.getElementById("mood").value;
  alert("Vee Company welcomes you, " + getName + "! You are feeling " + getMood + ".");
}

//displays polygon type based on number
function displayPolygon(submit) {
  var favNum = Math.abs(Math.round(Number(document.getElementById('favNum').value)));

  // polygon type
  var polygon = ["", "Monogon", "Bigon", "Triangle", "Quadrilateral", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"];
  
  if (favNum >= 1 && favNum <= 10) {
    alert("Your polygon for your favorite number is a: " + "" + polygon[favNum] + "!");
  } else if (favNum === 0) {
    alert("Not a polygon");
  } else {
    alert("Please enter a number between 0 and 10!");
  } 
}

// basic functions
function batSound(){
  alert("What’s cookin’, good lookin’?")
}

function batWisdom(){
  alert("Despite everything, it's still you.")
}

function calcMpg(){
  var miles = prompt("Enter miles driven");
  miles = parseFloat(miles);
  var gallons = prompt("Enter gallons of gas used");
  gallons = parseFloat(gallons);
  var mpg = miles/gallons;
  mpg = parseInt(mpg);
  alert("Miles per gallon = " + mpg);
}

function ermPhrase(){
  alert("ermm... what the scallop?")
}
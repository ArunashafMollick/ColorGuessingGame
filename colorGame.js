var numOfSquares = 6
var color = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".modeButtons");

init();

function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy"? numOfSquares = 3: numOfSquares = 6;
      reset();
    });
  }
}

function setUpSquares(){
  for(var i = 0; i < squares.length; i++){
      // add click listeners to squares
    squares[i].addEventListener("click",function(){
      // grab color of clicked squares
       var clickedColor = this.style.backgroundColor;
      // compare color of clicked to pickedColor
      if(clickedColor === pickedColor){
        resetButton.textContent = "Play Again?";
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }
      else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  messageDisplay.textContent = "";
  resetButton.textContent = "New colors";
  // generate new Colors
  color = generateRandomColors(numOfSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to new pickedColor
  colorDisplay.textContent = pickedColor;
  // assign color to all squares
  for(var i = 0; i < squares.length; i++){
    if(color[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = color[i];
    } else {
      squares[i].style.display = "none";
    }

  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
    reset();
});

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * color.length);
  return color[random];
}

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColors());
  }
  return arr;
}

function randomColors(){
  // generateRandomColors for red;
  var r = Math.floor(Math.random() * 256);
  // generateRandomColors for green;
  var g = Math.floor(Math.random() * 256);
  // generateRandomColors for blue;
  var b = Math.floor(Math.random() * 256);
  // "rgb(0, 255, 255)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

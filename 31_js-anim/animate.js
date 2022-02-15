// Annabel Zhang, Justin Zou :: Team Tofu
// SoftDev pd2
// K30 -- canvas based JS drawing
// 2022-02-15

// model for HTML5 canvas-based animation

// SKEELTON


//access canvas and buttons via DOM
var c = document.getElementById('playground');
var dotButton = document.getElementById('buttonCircle');
var stopButton = document.getElementById('buttonStop');

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d")

//set fill color to team color
ctx.fillStyle = "#f6e8e0"

var requestID;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
};


var radius = 0;
var growing = true;


//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...")

  // clear()
  // window.requestAnimationFrame();
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 360);
  // ctx.fillStyle = "red";
  ctx.fill();
  radius += 1;
  requestID = window.requestAnimationFrame();



  /*
    ...to
    Wipe the canvas,
    Repaint the circle,

    ...and somewhere (where/when is the right time?)
    Update requestID to propagate the animation.
    You will need
    window.cancelAnimationFrame()
    window.requestAnimationFrame()

   */
};


//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log(requestID);

  if (requestID){
    window.cancelAnimationFrame(requestID);
  }

  growing = false;

};


dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);

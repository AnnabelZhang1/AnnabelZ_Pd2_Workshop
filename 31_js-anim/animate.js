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
    console.log(radius);

      if (growing) {radius += 1}
      else {radius -= 1}

      clear();
      ctx.beginPath();
      ctx.arc(c.clientWidth/2, c.clientHeight/2, radius, 0, 360);
      ctx.fill();

      if (radius === 0){
        growing = true;
      }
      else if (radius === c.clientHeight/2){
        growing = false;
      }
      
      if (requestID){
        window.cancelAnimationFrame(requestID);
      }
      requestID = window.requestAnimationFrame(drawDot);


};


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



//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log(requestID);

  window.cancelAnimationFrame(requestID);
};


dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);

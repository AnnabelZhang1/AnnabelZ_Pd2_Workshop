// Annabel Zhang, Justin Zou :: Team Tofu
// SoftDev pd2
// K32 -- More Moving Parts
// 2022-02-17

// model for HTML5 canvas-based animation


//access canvas and buttons via DOM
var c = document.getElementById('playground');
var dvd = document.getElementById('buttonDVD');
var dotButton = document.getElementById('buttonCircle');
var stopButton = document.getElementById('buttonStop');

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d")

var requestID;  //init global var for use with animation frames

//set fill color to team color
ctx.fillStyle = "#f6e8e0"

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



var drawDVD = () => {
  console.log("waiting for the movie to start..")

  // clear();
  var img = new Image();
  // img.src = 'logo_dvd.jpg'
  img.onload = function() {
    ctx.beginPath();
    ctx.drawImage(img, c.clientWidth/2, c.clientHeight/2, 600/5, 400/5);

  };
  ctx.translate(0.1, 0.1);
  img.src = 'logo_dvd.jpg';

  if posX === c.clientWidth{

  }

  if posY === c.clientHeight{

  }

  // if (requestID){
  //   // clear();
    requestID = window.requestAnimationFrame(drawDVD);
  // }
}



//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log(requestID);

  window.cancelAnimationFrame(requestID);
};


dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
dvd.addEventListener("click", drawDVD);

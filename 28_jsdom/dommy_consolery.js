// Team Tofu :: Jesse Wang, Annabel Zhang, Justin Zou
// SoftDev pd2
// K28 -- Getting more comfortable with the dev console and the DOM
// 2022-02-08
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
//`o["func"](2) = 32` (you can call/execute function within var)
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };

//How would this be used in a more practical sense (than just changing/adding/removing items)?
//You can use functions within functions; EX: addItem(gcd(4,6))
// - You can call variables directly from the console
//How would this be used in a more practical sense (than just changing/adding/removing items)?
var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
function fib(n){
  if (n <= 1)
    return n
  return (fib(n-1) + fib(n-2))
 }

 document.getElementById("fib".innerText=fib(10));
 // window.onload = fib(getRandom(10));

function fact(n){
  if (n == 0)
    return 1
  return n * fact(n-1)
}

function gcd(a,b){
  if (a > b)
    s = b
  else
    s = a
  for (let i = 1; i < s; i++){
    if (a%i == 0 && b%i == 0)
      gcd = i
  }
  return gcd
}

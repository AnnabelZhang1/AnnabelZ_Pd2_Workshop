// Team Tofu :: Annabel Zhang, Justin Zou
// SoftDev pd2
// K27 -- Basic functions in JavaScript
// 2022-02-04
// --------------------------------------------------

 function fib(n){

  if (n <= 1){
    return n
  }
  return (fib(n-1) + fib(n-2))

 }

function fact(n){

  if (n == 0)
    return 1
  return n * fact(n-1)
}

#lang racket
;factorial
(define (fact n)
  (if ( = n 0)
      1
      (* (fact (- n 1)) n)
  )
)

;fibonacci
(define (fib n)
  (if (<= n 1)
      n
  (+ (fib ( - n 1)) (fib (- n 2)))
  )

)
/*
  This problem was asked by Jane Street.

  cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. 
  For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

  Given this implementation of cons:

  def cons(a, b):
      def pair(f):
          return f(a, b)
      return pair
      
  Implement car and cdr.
*/

function cons(a, b) {
  function pair(fCallBack) {
    return fCallBack(a, b)
  }
  return pair;
}

// arguments chỉ dùng cho declare function hoặc expression function
function car(pair) {
  function getFirst() {
    return arguments[0];
  }
  return pair(getFirst);
}

function cdr(pair) {
  function getLast() {
    return arguments[1];
  }
  return pair(getLast);
}

// arguments không thể dùng cho function trong arrow function
const car_ES6 = (pair) => {
  return pair((a, _) => a);
}

const cdr_ES6 = (pair) => {
  return pair((_, b) => b);
}

console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));
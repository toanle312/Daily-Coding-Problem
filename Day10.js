/**
  This problem was asked by Apple.

  Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
 */

const jobScheduler = (func, n) => {
  setTimeout(() => {
    func();
  }, n);
}

const hello = () => {
  console.log('hello');
}

jobScheduler(hello, 5000);
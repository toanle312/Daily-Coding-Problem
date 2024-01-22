/**
  This problem was asked by Google.

  The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.
 */

const estimatePiUsingMonteCarlo = () => {
  let allPoints = 0, quarterCirclePoints = 0;
  for (let i = 0; i < 1000000; i++) {
    const x = Math.random();
    const y = Math.random();
    const r = Math.sqrt(x * x + y * y);
    if (r < 1) {
      quarterCirclePoints++;
    }
    allPoints++;
  }

  return (4 * quarterCirclePoints / allPoints).toFixed(3);
}

console.log(estimatePiUsingMonteCarlo());
function fiboIter(n, fibArr) {
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      fibArr.push(i);
      continue;
    }
    const fib = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(fib);
  }
  return fibArr;
}

function fiboRec(n) {
  if (n <= 1) {
    return n;
  } else {
    return fiboRec(n - 1) + fiboRec(n - 2);
  }
}

const n = 10;
const fibArr = [];
let i=0;
console.log(fiboIter(n, fibArr));
while ( i < 10) {
  console.log(fiboRec(i));
  i++;
}

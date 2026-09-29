function ehPrimo(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(ehPrimo(7));
console.log(ehPrimo(9));

for (let i = 2; i <= 50; i++) {
  if (ehPrimo(i)) {
    console.log(i);
  }
}

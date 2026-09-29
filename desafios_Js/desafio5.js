function fibonacci(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    console.log(a);
    const proximo = a + b;
    a = b;
    b = proximo;
  }
}

fibonacci(7);

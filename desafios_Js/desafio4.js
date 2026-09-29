/*
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
*/

// Arrow function: mesma lógica, com sintaxe mais curta.
const ehPrimo = (n) => {
  if (n < 2) return false;

  // for mantido: ao achar um divisor o laço precisa parar; o forEach não para no meio.
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// Template literal: mostra a chamada e o resultado na mesma linha.
console.log(`ehPrimo(7) → ${ehPrimo(7)}`);
console.log(`ehPrimo(9) → ${ehPrimo(9)}`);

// Array.from: cria o array de 2 a 50 sem montar o laço na mão.
const numeros = Array.from({ length: 49 }, (_, i) => i + 2);
const primos = [];

// forEach: aqui percorre todos os números, então encaixa bem.
numeros.forEach((n) => {
  if (ehPrimo(n)) primos.push(n);
});

console.log(`Primos: ${primos.join(", ")}`);

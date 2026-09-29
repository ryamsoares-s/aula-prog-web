/*
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
*/

// Arrow function: agora devolve um array em vez de só imprimir, então dá para reutilizar o resultado.
const fibonacci = (n) => {
  const termos = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    termos.push(a);
    // Desestruturação: troca os dois valores numa linha, sem variável auxiliar.
    [a, b] = [b, a + b];
  }
  return termos;
};

const n = 7;

// Template literal: monta a saída com ${} em vez de vários console.log.
console.log(`fibonacci(${n}) → ${fibonacci(n).join(", ")}`);

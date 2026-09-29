/*
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/

// Arrow function: a regra fica isolada numa função curta e reutilizável.
const fizzBuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
};

// Array.from: cria o array de 1 a 100 sem montar o laço na mão.
const numeros = Array.from({ length: 100 }, (_, i) => i + 1);

// forEach: percorre todos os números; aqui não precisa parar no meio.
numeros.forEach((n) => console.log(fizzBuzz(n)));

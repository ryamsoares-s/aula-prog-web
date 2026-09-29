/*
function ehPalindromo(texto) {
  texto = texto.toLowerCase();
  for (let i = 0; i < texto.length / 2; i++) {
    if (texto[i] !== texto[texto.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(ehPalindromo("Arara"));
console.log(ehPalindromo("Casa"));
*/

// Arrow function: mesma lógica, com sintaxe mais curta.
const ehPalindromo = (texto) => {
  // const: cria uma nova variável em vez de alterar o parâmetro recebido.
  const t = texto.toLowerCase();

  // for mantido: compara as pontas pelos índices e para na primeira diferença; o forEach não para no meio.
  for (let i = 0; i < t.length / 2; i++) {
    if (t[i] !== t[t.length - 1 - i]) return false;
  }
  return true;
};

// Array + forEach: testa várias palavras sem repetir console.log.
const palavras = ["Arara", "Casa"];

// Template literal: mostra a palavra e o resultado juntos.
palavras.forEach((palavra) => console.log(`${palavra} → ${ehPalindromo(palavra)}`));

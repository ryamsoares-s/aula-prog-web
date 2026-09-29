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

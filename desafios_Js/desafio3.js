function contarVogais(palavra) {
  const vogais = "aeiouáéíóúâêôãõà";
  let total = 0;
  for (const letra of palavra.toLowerCase()) {
    if (vogais.includes(letra)) {
      total++;
    }
  }
  return total;
}

console.log(contarVogais("programação"));

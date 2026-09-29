/*
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
*/

// Arrow function: mesma função, com sintaxe mais curta.
const contarVogais = (palavra) => {
  const vogais = "aeiouáéíóúâêôãõà";
  let total = 0;

  // Objeto: guarda quantas vezes cada vogal apareceu, além do total.
  const porVogal = {};

  // Spread + forEach: [...palavra] transforma a string em array de letras para usar o forEach.
  [...palavra.toLowerCase()].forEach((letra) => {
    if (vogais.includes(letra)) {
      total++;
      porVogal[letra] = (porVogal[letra] || 0) + 1;
    }
  });

  return { total, porVogal };
};

const palavra = "programação";
const { total, porVogal } = contarVogais(palavra);

// Template literal: monta a frase sem concatenar com +.
console.log(`"${palavra}" tem ${total} vogais`);
console.log(porVogal);

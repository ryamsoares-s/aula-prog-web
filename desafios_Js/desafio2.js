const notas = [7, 4, 9, 5, 8];

let aprovados = 0;
let soma = 0;
let maior = notas[0];

for (const nota of notas) {
  if (nota >= 6) {
    aprovados++;
  }
  soma += nota;
  if (nota > maior) {
    maior = nota;
  }
}

const media = soma / notas.length;

console.log("Aprovados: " + aprovados + " | Média: " + media + " | Maior: " + maior);

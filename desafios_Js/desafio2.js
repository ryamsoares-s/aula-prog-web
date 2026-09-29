/*
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
*/

// Objetos: cada aluno guarda nome e nota juntos, em vez de só números soltos.
const alunos = [
  { nome: "Ana", nota: 7 },
  { nome: "Bruno", nota: 4 },
  { nome: "Carla", nota: 9 },
  { nome: "Diego", nota: 5 },
  { nome: "Eva", nota: 8 },
];

// Arrow function: sintaxe mais curta e a lógica fica isolada e reutilizável.
const calcularEstatisticas = (lista) => {
  let aprovados = 0;
  let soma = 0;
  let maior = lista[0].nota;

  // forEach: percorre o array sem controlar índice; aqui não precisa parar no meio.
  lista.forEach((aluno) => {
    if (aluno.nota >= 6) aprovados++;
    soma += aluno.nota;
    if (aluno.nota > maior) maior = aluno.nota;
  });

  // Objeto como retorno: devolve os três resultados de uma vez, com nomes claros.
  return { aprovados, media: soma / lista.length, maior };
};

// Desestruturação: tira os valores do objeto direto para variáveis.
const { aprovados, media, maior } = calcularEstatisticas(alunos);

// Template literal: interpola com ${} em vez de concatenar com +.
console.log(`Aprovados: ${aprovados} | Média: ${media} | Maior: ${maior}`);

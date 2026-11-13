const express = require('express');
const app = express();

app.use(express.json());

let alunos = [
    { id: 1, nome: "Ryam Soares", curso: "Sistemas de Informação"},
    { id: 2, nome: "João da Silva", curso: "Engenharia de Software"},
];
let proximoId = 3;

app.get("/alunos", (request, response) => {
    response.status(200).json(alunos);
});

app.get("/alunos/:id", (request, response) => {
    const id = Number(request.params.id);
    const aluno = alunos.find(item => item.id === id);
    if (!aluno) {
        return response.status(404).json({erro: "Aluno não encontrado"});
    }
    response.status(200).json(aluno);
});

app.post("/alunos", (request, response) => {
    const {nome, curso} = request.body;
    const novoAluno = {id: proximoId++, nome, curso};
    alunos.push(novoAluno);
    response.status(201).json(novoAluno);
});

app.delete("/alunos/:id", (request, response) => {
    const id = Number(request.params.id);
    const existe = alunos.some(item => item.id === id);
    if (!existe) {
        return response.status(404).json({erro: "Aluno não encontrado"});
    }
    alunos = alunos.filter(item => item.id !== id);
    response.status(204).send();
});


app.listen(3001, () => console.log("Servidor rodando em http://localhost:3001"));

















// mkdir crud-alunos
// cd crud-alunos
// npm init -y
// npm install express

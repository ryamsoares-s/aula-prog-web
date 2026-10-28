const express = require('express');
const app = express();

const ddds = [
    { ddd: "65", estado: "MT", cidades: ["Cuiabá", "Várzea Grande", "Pontes e Lacerda"] },
    { ddd: "64", estado: "GO", ciades: ["Goiânia", "Anápolis"] },
]

app.get("/", (request, response) => {
    response.send("Minha primeira API com Express"); 
});

app.get("/ddd", (request, response) => {
    response.json(ddds);
});

app.get("/ddd/:ddd", (request, response) => {
    const encontrado = ddds.find(item => item.ddd === request.params.ddd); 
    if (!encontrado) {
        return response.status(404).json({ erro: "DDD não encontrado" });
    }
    response.json(encontrado);
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));













// npm init -y
// npm install express
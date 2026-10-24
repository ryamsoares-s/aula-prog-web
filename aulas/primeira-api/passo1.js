const express = require('express');
const app = express();

app.get("/", (request, response) => {
   response.send("Minha primeira API com Express"); 
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
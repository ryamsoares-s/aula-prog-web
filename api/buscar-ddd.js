async function buscarDdd(ddd){
    const url = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log(`Estado: ${dados.state}`);
    console.log(`Quantidade de cidades: ${dados.cities.length}`);

    dados.cities.forEach((cidade, indice) => {
        console.log(`${indice + 1}. ${cidade}`);
    });
}

buscarDdd("65");

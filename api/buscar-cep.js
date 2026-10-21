async function buscarCep(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const resposta = await fetch (url); 
    const dados = await resposta.json();
    console.log(dados.localidade, dados.estado);
}

buscarCep("78245000");
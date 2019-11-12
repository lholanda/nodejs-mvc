var teste = "Este é meu móduloA"

var funcao = function(){
    return "minha funcao";
}

// exportando o conteudo do módulo
// module.exports = funcao;

module.exports =  function(){
    return "minha funcao";
}
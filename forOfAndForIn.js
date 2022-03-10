
    //For of percorre os valores do objeto iteravel : "Valor"

    let arrayNames = [`William`, `Carlos`, `Patricia`, `Max`];

    for(let names of arrayNames){
        console.log(names); // Resultado = WIlliam, Carlos, Patricia, Max
    }

    //For in percore as propriedades do objeto iteravel : "Chave"

    for(let index in arrayNames){
        console.log(index); //Resultado = 0, 1, 2, 3
    }
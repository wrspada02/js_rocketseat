
    //Callback, enviar uma function como argumento para outra function, lembrando sempre do "return" para que haja um valor e nao retorne "undefined"
    let valor1, valor2;
    valor1 = 30;
    valor2 = 20;
    console.log(somaValores(
        () => { return valor1 + valor2; }
        ));

    function somaValores(sumAbstract){
        return sumAbstract();
    }
    

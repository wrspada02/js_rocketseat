
    //Function scope, nao importa onde e chamada, ela tem um comportamento hosting dessa forma sempre sendo executada
    const value1 = 20;
    const value2 = 10;


    sumValues(value1, value2);

    function sumValues(num1, num2){
        return num1 + num2;
    }
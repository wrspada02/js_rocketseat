

     const XMLHttpRequest = require('xhr2');
     const dataWeb = new XMLHttpRequest();
    

    dataWeb.open("GET", "https://economia.awesomeapi.com.br/last/GBP-USD", false);
    console.log(dataWeb.responseText);

    

    //Uma function construtora, ou seja e como se fosse uma classe, onde construimos o molde dos nossos dados
    function Person(person){
        this.name = `William`;
        this.age = 19;
        this.weight = 65.6;

        console.log(this.name, this.age, this.weight);
    }


    const person1 = {
        name : '',
        age : 0,
        weight : 0
    }

    Person(person1);
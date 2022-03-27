/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

    function countAmountCategoryAndBooks(){
        let contCategory = 0;
        let books;

        booksByCategory.forEach((item) => {

            for(let value in item){
                if(value.indexOf('category') === 0) contCategory++;
            }
            books = item.books.length;
            books += books;
        })
        console.log(`Quantidade de livros: ${books}`);
        console.log(`Quantidade de categorias: ${contCategory}`);
    }

    function countAmountAuthors(){
        let contAuthor = 0;
        booksByCategory.map((index) => {
            for(let key of index.books){
                if(Object.keys(key).indexOf('author') === 1) contAuthor++;
            }
        })
        console.log(`Quantidade de autores: ${contAuthor}`);
    }

    function showBooksAugustoCury(){
        for(let value of booksByCategory){
            for(let object of value.books){
                if(object.author === "Augusto Cury"){
                    console.log(`Livros do Augusto Cury: ${object.title}`);
                }
            }
        }
    }


//[{}, {}]    

function countAmountCategoryAndBooks_(){
    let contCategory = 0;
    for(value of booksByCategory){
        Object.keys(value).forEach((testCategory) =>{
            if(testCategory.indexOf('category')) contCategory += 1;
        });
    }
    return console.log(`Quantidade de categorias: ${Number(contCategory)}`);
}
const book = {
  title:'Ego is the Enemy',
  author:'Ryan Holiday',
  publisher:{
    name:'Penguin'
  }
}

// rename name to piblisher inside publisher object
const {name: publisherName = 'Self-Publisher'} = book.publisher

console.log(publisherName);

const item = ['Coffe (hot)', '$2.00', "$2.50", "$2.75"]
const [drink, ,price] = item;
console.log(`A medium ${drink} cost ${price}`)
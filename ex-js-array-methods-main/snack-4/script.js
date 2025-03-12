const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

const nameArray = posts.map((element) => element.author);

console.log(nameArray);

console.log(`
  ---
`);

// bonus
const thirdArray = [];

for(let i = 0; i < posts.length; i++){
  thirdArray.push(posts[i].author)
};

console.log(thirdArray)

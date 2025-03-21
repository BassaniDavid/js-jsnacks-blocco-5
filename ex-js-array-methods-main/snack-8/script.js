const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
const marcoObj = students.find((student) => student.name === 'Marco Lanci');
let marcoClass = marcoObj.class;

console.log(marcoClass);

console.log(`
  ---
  
`);

// bonus
let marcoClassBonus;

for(let i = 0; i < students.length; i++){
  if(students[i].name === 'Marco Lanci'){
    marcoClassBonus = students[i].class
  }
}

console.log(marcoClassBonus);
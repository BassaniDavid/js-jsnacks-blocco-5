const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]
const secondArray = numbers.map((number) => number + 1);
console.log(secondArray);

console.log(`
    ---
`);

// bonus
const thirdArray = [];

for(let i = 0; i < numbers.length; i++){thirdArray.push(numbers[i] + 1)};
console.log(thirdArray);

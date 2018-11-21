const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));


const peso11 = 1.1
const peso22 = Number('2.3')

console.log(peso11, peso22);
console.log(Number.isInteger(peso11));
console.log(Number.isInteger(peso22));





const avaliação1 = 9.871;
const avaliação2 = 6.871;

const total = avaliação1*1 + avaliação2*2
const média = total/(peso1+peso2)

console.log(média);
console.log(média.toFixed(2));
console.log(média.toString());
console.log(média.toFixed(2).toString());
console.log(typeof média);

// Transformar o número em binário
console.log(média.toString(2));


/* Lembrando que:
Number (com letra maiúscula) é uma função
number (com letra minúscula) é o tipo de valor
*/
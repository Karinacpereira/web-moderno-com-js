// o nome de variáceis e constantes deve ser fáceis de entender e refletir facilmente o que será feito
var a = 3;

// por regra geral, dê preferência a usar let
let b = 4;

// errado
var a = 30;
let b = 40;

console.log(a, b); 
// aqui podemos perceber que dá erro na let pq se declaramos um novo valor desta maneira, o sistema considera que estamos tentando declarar novamente a let, o que não acontece com a var

// "correto"
var a = 30;
b = 40;

console.log(a, b); 

// melhor prática
a = 300;
b = 400;

console.log(a, b); 


// na constante, o valor não pode ser alterado. Tudo que não tem motivo para ter seu valor alterado durante o sistema deve ser declarado em const
const c = 5;

console.log(c);
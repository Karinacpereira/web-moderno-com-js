// as sentenças de código são lidas de cima para baixo, mas no JS é possível usar o hoisting e buscar no código o que se precisa.

console.log('a =', a);
var a = 2;
console.log('a =', a);

// é como se você tivesse declarado a váriavel mas não tivesse atribuído valor, por isso dá undefined e depois que você declara o valor, ele passa a entender o valor atribuido.


console.log('b =', b);
let b = 5;
console.log('b =', b);

// o efeito de hoisting não funciona quando declaramos let, por isso deve-se prestar atenção para SEMPRE declarar as variáveis antes de usá-las
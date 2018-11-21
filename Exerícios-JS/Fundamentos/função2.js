// armazenando uma função dentro de uma variável

const imprimirSoma = function(a, b){
  console.log(a + b);
}

imprimirSoma(2, 3);


// armazenando uma arrow function em uma variável

const soma = (a, b) => {
  return (a + b);
}

console.log(soma(3, 3));


// retorno implícito

const subtração = (a, b) => a - b;
console.log(subtração(5, 2));
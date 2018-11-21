let valor /*variável não inicializada*/
console.log(valor);

valor = null; /*ausência de valor*/
console.log(valor);

// usa-se null para zerar um valor de referência de uma variável

// console.log(valor.toString());
// TypeError: Cannot read property 'toString' of null

const produto = {};
console.log(produto.preço);
console.log(produto);

produto.preço = 3.50
console.log(produto);
console.log(produto.preço);

produto.preço = undefined /*evitre atribuir undefined*/
console.log(!!produto.preço);
console.log(produto);


// melhor forma de retirar um atibuto é usando delete produto.preço

produto.preço = null /*retirar um valor*/
console.log(!!produto.preço);
console.log(produto);
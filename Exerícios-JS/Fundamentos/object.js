// json(é um formato textual, sempre estará dentro de aspas, como string) não é a mesma coisa de objeto apesar da estrutura ser bastante semelhante 
// sempre terá um atributo e um valor

const prod1 = {};
prod1.nome = 'Celular Ultra Mega' /*adicionando um atributo dinamicamente ao objeto*/
console.log(prod1);
prod1.preço = 4998.90
console.log(prod1);

prod1['Desconto Legal'] = 0.40 /*evitar usar essa forma*/
console.log(prod1);

const prod2 = {
  nome: 'Camisa Preta',
  preço: 79.90
};
console.log(prod2);

const obj = {
  nome: 'Camisa Azul',
  preço: 69.69, 
  obj: {
    blabla: 1,
    obj: {
      eita: 'nóis'
    }
  }
}
console.log(obj);
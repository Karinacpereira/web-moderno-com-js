// novo recurso do ES6

const pessoa = {
  nome: 'Karina',
  idade: 30,
  endereço: {
    logradouro: 'R. Voluntários da Pátria',
    número: 3533,
    complemento: 'apto 73M'
  }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(nome, idade);

const {sobrenome, humor = 'feliz'} = pessoa;
console.log(sobrenome, humor);

const {endereço: {logradouro, número, CEP}} = pessoa;
console.log(logradouro, número, CEP);

/* pode ser feito da maneira convencional

let nome = pessoa.nome;
let idade = pessoa.idade; */


// par Nome/Valor
const saudacao = 'Opa';

function exec() {
  const saudacao = 'Faaaaala';
  return saudacao;
}

// Objetos são grupos aninhados de pares Nome/Valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereço: {
    logradouro: 'Rua dos Bobos',
    número: 0
  }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
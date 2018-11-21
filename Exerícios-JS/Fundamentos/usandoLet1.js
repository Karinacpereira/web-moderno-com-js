var numero  = 1;
{
  let numero = 2
  console.log('dentro =', numero);
}
console.log('fora =', numero);

// let assume escopo de bloco e portanto é acessivel apenas dentro do escopo do bloco em que se encontra.
// let possue escopo global, de funçãoe  de bloco enquando var só possue global e de função
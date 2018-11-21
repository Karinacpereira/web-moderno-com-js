// função é o que executa um processo de acordo com as sentenças de código que foram inseridas dentro. Função é um bloco de código nomeado para que possa ser chamado durante todo o código.

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); /*considera que o segundo parâmetro é undefined e portanto, o resultado é um NaN*/
imprimirSoma(2, 10, 4 , 5, 6, 7, 8); /*considera apenas os dois primeiros e ignora os demais*/
imprimirSoma(); /*caso não sejam informados parâmetros, os dois serão considerados undefined e portanto, o resultado será NaN*/




function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
// quando um valor é colocado para um dos parâmetros da função, ele é utilizado como padrão, caso seja colocado um outro valor, o parâmetro assume o novo valor
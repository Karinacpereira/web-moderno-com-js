let num1 = 1;
let num2 = 2;

num1++ /*acrescenta uma unidade no valor da variável*/
console.log(num1);

num1-- /*subtrai uma unidade no valor da variável*/
console.log(num1);

// quando o operador aparece antes da váriável, ela é calculada com prioridade em relação ao que aparece depois, na mesma sentença

console.log(++num1 === num2--); /* o resultado é verdadeiro pq o incremento acontece antes da comparação, e o decréscimo ocorre depois da comparação, não entrando, portanto, na comparação... */


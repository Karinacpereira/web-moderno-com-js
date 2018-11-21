// estrutura linear, tipo vetor, que pode ou não misturar tipos de valores, porém não deve

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);


valores[4] = 10
console.log(valores);
console.log(valores.length);


/*valores[10] = 1
console.log(valores);
Ao adicionar um valor numa posição do array longe do último valor existente, o retorno do console.log será mostrado assim --> [ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 1 ] <-- identificando que existem posições vazias no array*/

valores.push({id: 3}, false, null, 'teste');/*método push adiciona valores ao array*/
console.log(valores);

console.log(valores.pop()); /*retira o ultimo valor do array*/

delete valores[0];
console.log(valores);

console.log(typeof valores);
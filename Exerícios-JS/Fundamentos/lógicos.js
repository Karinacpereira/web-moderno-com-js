/*  
    *OPERADOR E &&*
    true e true -> true
    true e false -> false
    false e false -> false

    *OPERADOR OU ||*
    true ou ? -> true
    false ou true -> true
    false ou false -> false

    *OPERADOR OU EXCLUSIVO*
    true xor true -> false
    true xor false -> true
    false xor true -> true
    false xor false -> false

    *NEGAÇÃO LÓGICA*
    !true -> false
    !false -> true
*/



function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  /*const comprarTv32 = !!(trabalho1 ^  trabalho2) -- bitwise xor */
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete; 

  return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
const funcs = [];

for (let i = 0; i < 10; i++){
  funcs.push(function(){
    console.log(i);
  });
}

funcs[2]();
funcs[8]();

// como a let possue escopo de bloco, o console mostrará o valor do i no momento em que passou pela posição 2 e 8

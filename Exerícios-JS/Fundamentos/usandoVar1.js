{
  {
    {
      {
        var sera = 'Será???'
        console.log(sera);
      }
    }
  }
}

console.log(sera);

// ao se definir uma variável dentro de uma função, ela fica desponível par aser acessada apenas dentro dessa função
function teste(){
  var local = 123;
  console.log(local);
}

teste()
console.log(local);

// evite usar variáveis em escopo global para não correr o risco de sobrescrever o valor e dar problema no código, prefira usar escopo local


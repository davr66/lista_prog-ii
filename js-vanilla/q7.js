/*
Crie uma função criarContador que retorna um objeto com dois métodos:
incrementar() e zerar() . O contador deve ser interno (não acessível de fora) e
começar em 0. Cada chamada de criarContador deve gerar um contador
independente. Use escopo para proteger a variável do contador.
*/
function criaContador(){
  let contagem =0;
  
  return {
    incrementar:function(){
      contagem++;
      console.log(contagem);
    },
    zerar:function(){
      contagem =0;
      console.log(contagem);
    }
  }
}
console.log("Contador 1:");
const contador1 = criaContador();
contador1.incrementar();//1
contador1.incrementar();//2
contador1.incrementar();//3
contador1.incrementar();//4
contador1.zerar();//0
contador1.incrementar();//1
contador1.incrementar();//2

console.log('Contador 2:')
const contador2 = criaContador();
contador2.incrementar();//1
contador2.incrementar();//2
contador2.zerar();//0
contador2.incrementar();//1
contador2.incrementar();//2
contador2.incrementar();//3
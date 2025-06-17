/*
Crie uma função chamada simularCaixaEletronico que recebe dois parâmetros:
saldoInicial e operacoes . A função deve aplicar as operações (saque ou
depósito) ao saldo, uma por uma. Cada operação é um objeto com { tipo:
'saque' | 'deposito', valor: number } . No final, exiba o saldo final. Implemente
validação para impedir saque com saldo insuficiente.
*/
function simularCaixaEletronico(saldoInicial,operacao){
  let saldoFinal;
  if(operacao.tipo == 'saque'){
    if(saldoInicial<operacao.valor) return "Erro: Saldo insuficiente."
    saldoFinal = saldoInicial - operacao.valor;
  }else if(operacao.tipo == 'deposito')saldoFinal = saldoInicial + operacao.valor;
  else return "Erro: Operação Inválida";
  
  return saldoFinal;
}

console.log(simularCaixaEletronico(100,{tipo:'deposito',valor:200})); //300
console.log(simularCaixaEletronico(250,{tipo:'saque',valor:200}));//50
console.log(simularCaixaEletronico(10,{tipo:'saque',valor:200}));//Saldo insuficiente
console.log(simularCaixaEletronico(10,{tipo:'abcd',valor:200}))//Operação Inválida
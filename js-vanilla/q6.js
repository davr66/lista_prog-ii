/*
6. Crie um código usando for que vá de 1 a 100. Para cada número, se for
múltiplo de 2, mostre "Hello", se for múltiplo de 3, mostre "World"; se for
múltiplo de ambos, mostre "HelloWorld"; e se não for múltiplo de nenhum,
mostre "Nada". Evite repetir código e organize a lógica de forma eficiente
*/

for(let i=1;i<=100;i++){
  if(i%2 ==0)console.log(i,'Hello');
  else if (i%3==0)console.log(i,'World');
  else console.log(i,'Nada');
}
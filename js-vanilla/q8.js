/*
Dado um array de produtos com nome e preço, crie uma função que filtre
os produtos com preço acima de R$ 100. Depois, converta os nomes
desses produtos para maiúsculas e calcule o total dos preços. Use os
métodos filter , map e reduce .
*/
const produtos = [
  ["Arroz", 5.99],
  ["Feijão", 7.5],
  ["Macarrão", 4.2],
  ["Leite", 6.8],
  ["Óleo", 8.0],
  ["Café", 12.9],
  ["Açúcar", 4.75],
  ["Sal", 2.5],
  ["Farinha", 5.2],
  ["Molho de Tomate", 3.3],
  ["Panela de Pressão", 120.0],
  ["Air Fryer", 450.0],
  ["Micro-ondas", 600.0],
  ["Liquidificador", 150.0],
];

function filtraProdutos(arr) {
  let produtosFiltrados = arr
    .filter((produto) => produto[1] > 100)
    .map((produto) => [produto[0].toUpperCase(), produto[1]]);
  
  let soma = produtosFiltrados
  .map((produto) => produto[1])
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  console.log("Soma dos preços de produtos acima de R$100,00: R$"+soma+",00");
  return produtosFiltrados;
}

let produtosFiltrados = filtraProdutos(produtos);
console.log(produtosFiltrados);

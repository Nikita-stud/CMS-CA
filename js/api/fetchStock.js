export function fetchStock(items){
  const container = document.querySelector(".items__container");

  items.forEach(function(item){

    container.innerHTML += `<div><h3>${product.name}</h3></div>`;
  })
}
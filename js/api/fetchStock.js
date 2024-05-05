export function fetchStock(items){
  const container = document.querySelector(".items__box");

  items.forEach(function(item){
    container.innerHTML += `<div class="product">
                              <a href="details.html?id=${item.id}">
                              <h3>${item.name}</h3>
                              <img src ="${item.image.src}" alt="${item.name}"
                              </a>
                            </div>`;
  })
}
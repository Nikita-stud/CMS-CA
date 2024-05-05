import { url } from "./constants/wordPressURL.js";
// import { fetchStock } from "./api/fetchStock.js";
// import { catchAndDisplay } from "./ui/catchAndDisplay.js";

// const container = document.querySelector(".items__container");
// const perPage = document.querySelector(".per-page-selection");
// const categories = document.querySelectorAll(".categories");
// const searchButton = document.querySelector(".search-button");

//  const loadingContainer = document.querySelector(".loading-indicator");


async function getProducts(url){
  try{
    const fetched = await fetch(url);
    const results = await fetched.json();
    console.dir(results)

    // fetchStock(results);

    const container = document.querySelector(".items__box");

    results.forEach(function(item){
    container.innerHTML += `<div class="product">
                              <a href="details.html?id=${item.id}">
                              <h3>${item.name}</h3>
                              <img src ="${item.image.src}" alt="${item.name}"
                              </a>
                            </div>`;
  })


  }catch(error){
    // loadingContainer.style.display ="none"
    // catchAndDisplay(".items__container", "There has been an error fetching the products", "error")
  }
}
getProducts(url)



// perPage.onchange = function(event){
//   const newURL = url + `?per_page=${event.target.value}`;
//   container.innerHTML = "";
//   getProducts(newURL);
// }


// categories.forEach(function(category){
//   category.onclick = function(event){
//     let evenNewerURL;
    
//     const categoryChosen = event.target.value;
//     evenNewerURL = url + `?category=${categoryChosen}`;

//     container.innerHTML ="";
//     getProducts(evenNewerURL);
//   }
// })


// searchButton.onclick = function(){
//   const searchInput = document.querySelector("#search-input").value;
//   const searchURL = url + `?search=${searchInput}`;
//   container.innerHTML ="";
//   getProducts(searchURL);
// }
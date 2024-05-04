import { url } from "./constants/wordPressURL.js";
// import { fetchStock } from "./api/fetchStock.js";

const container = document.querySelector(".items__container");
const perPage = document.querySelector(".per-page-selection");
const categories = document.querySelectorAll(".categories");
const searchButton = document.querySelector(".search-button");


async function getProducts(url){
  try{
    const fetched = await fetch(url);
    const results = await fetched.json();

    // fetchStock(results);
    
  }catch(error){
    console.log(error);
  }
}
getProducts(url)



perPage.onchange = function(event){
  const newURL = url + `?per_page=${event.target.value}`;
  container.innerHTML = "";
  getProducts(newURL);
}


categories.forEach(function(category){
  category.onclick = function(event){
    let evenNewerURL;
    
    const categoryChosen = event.target.value;
    evenNewerURL = url + `?category=${categoryChosen}`;

    container.innerHTML ="";
    getProducts(evenNewerURL);
  }
})


searchButton.onclick = function(){
  const searchInput = document.querySelector("#search-input").value;
  const searchURL = url + `?search=${searchInput}`;
  container.innerHTML ="";
  getProducts(searchURL);
}
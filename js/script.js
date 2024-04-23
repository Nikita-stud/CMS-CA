import { url } from "./constants/wordPressURL";
// import { fetchStock } from "./api/fetchStock";

console.log(url)

const container = document.querySelector(".items__container");


async function getProducts(){
  try{
    const fetched = await fetch(url);
    const results = await fetched.json();

    container.innerHTML = "";

    fetchStock(results);
    
  }catch(error){
    console.log(error);
  }
}
getProducts()
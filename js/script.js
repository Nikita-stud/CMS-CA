import { url } from "./constants/wordPressURL";
import { fetchStock } from "./api/fetchStock";


async function getProducts(){
  try{
    const fetched = await fetch(url);
    const results = await fetched.json();
    console.log(results)

    fetchStock(results);

    
  }catch(error){
    console.log(error);
  }
}
getProducts()
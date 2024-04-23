import { url } from "./constants/wordPressURL";
import { fetchSingleItem } from "./api/fetchSingleItem";

async function getProduct(){
  try{
    const fetched = await fetch(url);
    const results = await fetched.json();

    fetchSingleItem(results);

  }catch(error){
    console.log(error);
  }
}
getProduct()
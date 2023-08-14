import { productData } from "/finalProject/public/js/basket/database.js";
import { isItem } from "/finalProject/public/js/basket/detail2.js";

isItem()

const listProduct = productData.map(productData => productData.price)
document.getElementById("leftbox1").innerHTML = listProduct;
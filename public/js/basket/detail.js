import { productData } from "/finalProject/public/js/basket/database.js";
let newUrl = "";
let urlList = new URL(newUrl);
let list = urlList.searchParams.get("id")
console.log(list);
const listProduct = productData.map(productData => productData.nameProduct)
listProduct.forEach(element => {
    if(list == element){
        let indexList=listProduct.indexOf(list)
        productData[indexList].picture
    }
});
document.getElementById("leftbox1").innerHTML = listProduct;
// console.log(listProduct)

// function isItem(){
//     let takeItem = localStorage.getItem("information")
//     console.log(takeItem);
//     if(takeItem){
//         document.getElementById("dangnhap").style.display = "none";
//         document.getElementById("user").style.display = "flex"
//     }
// }
// isItem()





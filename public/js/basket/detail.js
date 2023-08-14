import { productData } from "/finalProject/public/js/basket/database.js";

const listProduct = productData.map(productData => productData.nameProduct)
listProduct.forEach(element => {
    if(list == element){
        let indexList=listProduct.indexOf(list)
    }
});
// document.getElementById("leftbox1").innerHTML = listProduct;
// console.log(listProduct)

export function isItem(){
    let takeItem = localStorage.getItem("information")
    console.log(takeItem);
    if(takeItem){
        document.getElementById("dangnhap").style.display = "none";
        document.getElementById("user").style.display = "flex"
    }
}

exp
// let newUrl = "#";
// let urlList = new URL(newUrl);
// let list = urlList.searchParams.get("id")
// console.log(list);
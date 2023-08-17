import { productData } from "/finalProject/public/js/basket/data.js";


let newUrl= window.location;
console.log(newUrl);
let url = new URL(newUrl);
let search_param = url.searchParams;
if(search_param.has("id")){
    // console.log(search_param.get("id"));
    const newId = Number(search_param.get("id"))
    console.log(newId);
    const newData = productData.find(({ id }) => id === newId )
    console.log(newData);
    document.getElementById("leftbox").innerHTML=newData
}



function isItem(){
    let takeItem = localStorage.getItem("information")
    console.log(takeItem);
    if(takeItem){
        document.getElementById("dangnhap").style.display = "none";
        document.getElementById("change").style.display = "flex"
    }
}
isItem()
import { productData } from "/finalProject/public/js/basket/data.js";


let newUrl= window.location;
console.log(newUrl);
let url = new URL(newUrl);
let search_param = url.searchParams;
if(search_param.has("id")){
    // console.log(search_param.get("id"));
    const newId = Number(search_param.get("id"))
    console.log(newId);
    // console.log(id);
    // console.log(newData);
    const newData = productData.find(({ id }) => id === newId )
    console.log(newData);
    document.getElementById("leftbox").innerHTML=newData
}



// var url = window.location.pathname;
// var id = url.substring(url.lastIndexOf('/') + 1);
// console.log(id);
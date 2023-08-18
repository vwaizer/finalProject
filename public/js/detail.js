import { productData } from "./basket/data.js";
import { clickFunction } from "./detail2.js";

let newUrl= window.location.href;
let url = new URL(newUrl);
let search_param = url.searchParams;
if(search_param.has("id")){
    // console.log(search_param.get("id"));
    const newId = parseInt(search_param.get("id"))
    console.log(newId);
    const newData = productData.find(({ id }) => id === newId )
    console.log(newData);
    document.getElementById("leftbox").innerHTML=`
     <div >
          <div class="d-flex flex-column justify-content-center p-3">
            <div class="p-2">${newData.nameProduct}</div>
            <div class="p-2"><img src="${newData.picture}" style="height: 500px"> </div>
            <div class="p-2">${newData.price}</div>
          </div>
        </div> 
    `
}
// function clickButton(){
//     window.location.href="http://127.0.0.1:5500/basket.html?id=${idItem}"
// }
document.getElementById("click").addEventListener("click", function () {
    clickFunction(search_param.get("id"))
})
function isItem(){
    let takeItem = localStorage.getItem("information")
    console.log(takeItem);
    if(takeItem){
        document.getElementById("dangnhap").style.display = "none";
        document.getElementById("change").style.display = "flex"
    }
}
isItem()
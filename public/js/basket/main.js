import {productData} from "/public/js/data.js"
import {addItem,saleFunction,sumItem} from "/public/js/basket/function.js"

let database=productData
var url = new URL(window.location.href);
var list = url.searchParams.get("id");
console.log(list)
let qualityItem=[]
let sumTotal=0
localStorage.setItem("sum",0)
let nameItem=database.map(database =>database.nameProduct)
let priceItem=database.map(database =>database.price)
console.log(priceItem[0])
nameItem.forEach(element => {
    let index=nameItem.indexOf(element)
    
    if(url.searchParams.get("quality")!=null)
{
     qualityItem.push(url.searchParams.get("quality"))   
     console.log("in null")
}
    else{
        qualityItem.push("1")
    }

    addItem(nameItem[index],qualityItem[index],priceItem[index])
    sumTotal=sumItem(qualityItem[index],priceItem[index])
    localStorage.setItem("sum",sumTotal)
    
})

document.getElementById("button").addEventListener("click",function(){
    saleFunction(sumTotal)
})







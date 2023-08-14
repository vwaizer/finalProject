import {database} from "/public/js/basket/testDatabase.js"
import {addItem,saleFunction,sumItem} from "/public/js/basket/function.js"

let sum=0
var url = new URL(window.location.href);
var list = url.searchParams.get("id");
console.log(list)
let qualityItem=[]

let nameItem=database.map(database =>database.nameProduct)
let priceItem=database.map(database =>database.price)
nameItem.forEach(element => {
    let index=nameItem.indexOf(element)
    
    if(url.searchParams("quality"))
{
     qualityItem.push(url.searchParams.get("quality"))   
}
    else{
        qualityItem.push("1")
    }

    addItem(nameItem[index],qualityItem[index],priceItem[index])
    
})





import {database} from "/public/js/basket/testDatabase.js"
import {addItem,saleFunction,sumItem} from "/public/js/basket/function.js"

let sum=0
var url = new URL(window.location.href);
var list = url.searchParams.get("id");
console.log(list)
let qualityItem=1
if(url.searchParams("quality"))
{
     qualityItem=url.searchParams.get("quality")
    
}

let nameItem=database.map(database =>database.nameProduct)
let priceItem=database.map(database =>database.price)
nameItem.forEach(element => {
    let index=nameItem.indexOf(element)
    addItem(nameItem[index],qualityItem,priceItem[index])
});

addItem(nameItem,qualityItem,priceItem)




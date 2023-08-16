import {productData} from "/public/js/data.js"
import {addItem,saleFunction,sumItem} from "/public/js/basket/function.js"

let database=productData
// var url = new URL(window.location.href);
var url=new URL("http://www.example.com/edit.html?id=9&quality=5")
var list = url.searchParams.get("id");
let listItem=[]
var checkList=[]
checkList.push(...list)
console.log(checkList);
checkList.forEach(checkListItem =>{
    if(checkListItem == ","){

    }
    else{
        listItem.push(parseInt(checkListItem))
    }
})

console.log(listItem)
let qualityItem=[]
let sumTotal=0
localStorage.setItem("sum",0)
let idItem=database.map(database => database.id)
let nameItem=database.map(database =>database.nameProduct)
let priceItem=database.map(database =>database.price)
listItem.forEach(element => {
    let index=idItem.indexOf(element)
    console.log(index)
    let quality

    if(url.searchParams.get("quality")!=null)
{

     qualityItem.push("quality:"+url.searchParams.get("quality")+"=>")
     qualityItem.push("id of product"+index)   
     quality=url.searchParams.get("quality")
}
    else{

        qualityItem.push(" quality: 1 =>")
        qualityItem.push("id of produce:"+index)
        quality="1"
    }
    console.log(qualityItem)
    addItem(nameItem[index],quality,priceItem[index])
    
    sumTotal=sumItem(quality,priceItem[index])
    localStorage.setItem("sum",sumTotal)
    localStorage.setItem("dataArray",qualityItem)
})

document.getElementById("button").addEventListener("click",function(){
    saleFunction(sumTotal)
})







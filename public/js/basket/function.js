import { database } from "./database"

let sum=0
function addItem(){
    item=localStorage.getItem("item")
    nameItem=item.name
    qualityItem=item.quality
    for(let i=0;i<database.length;i++){
        if (database[i].name==nameItem){
            let priceItem=database[i].price
        }
    }
    document.getElementById("itemArea").innerHTML=`
    <div class="d-flex flex-row justify-content-around p-3" id="item" >
                    <div class="p-2" id="${nameItem}">${nameItem}</div>
                    <div class="p-2">${qualityItem}</div>
                    <div class="p-2">${priceItem}</div>
                    <div class="p-2"><button type="button" class="btn-close" onclick="removeItem('${nameItem}')"></button></div>
            </div>
    `
}
function sumItem(){
    item=localStorage.getItem("item")
    nameItem=item.name
    qualityItem=item.quality
    for(let i=0;i<database.length;i++){
        if (database[i].name==nameItem){
            sum+=database[i].price*qualityItem
        }
    }
    document.getElementById("sum").innerHTML=sum
}
sumItem()
function couponItem(couponCode){
    subSum=sum
    if (couponCode == "GIAMGIA10"){
        subSum=sum*0.9
    }
    else if(couponCode=="GIAMGIA20"){
        subSum=sum*0.8
    }
    else if(couponCode=="GIAMGIA30"){
        subSum=sum*0.7
    }
    document.getElementById("subSum").innerHTML=subSum
}
function removeItem(){

}

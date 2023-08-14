


export function removeItem(nameItem){
    let listItem=localStorage.getItem("item")

    for(let i=0;i<listItem.length;i=i+2){
        if(listItem[i].name == nameItem){
            listItem[i].quality=0;
            break;
        }
    }
    document.getElementById(nameItem).innerHTML=``;

}

 export function saleFunction(){
            couponCode=document.getElementById("input")
            if(document.getElementById("input")==""){

            }
            else{
                let subSum=sum
            if (couponCode == "GIAMGIA1"){
                subSum=sum*0.9
            }
            else if(couponCode=="GIAMGIA2"){
                subSum=sum*0.8
            }
            else if(couponCode=="GIAMGIA3"){
                subSum=sum*0.7
            }
            document.getElementById("subSum").style.display="flex"
            document.getElementById("sum").style.textDecoration="line-through"
            document.getElementById("subSum").innerHTML=subSum
            }
            
        }

export function addItem(nameItem,qualityItem=1,priceItem){
    
    document.getElementById("itemArea").innerHTML +=`
        <div id="${nameItem}">
                    <div class="d-flex flex-row justify-content-around p-3" >
                        <div class="p-2" >${nameItem}</div>
                        <div class="p-2">${qualityItem}</div>
                        <div class="p-2">${priceItem}</div>
                        <div class="p-2"><button type="button" class="btn-close" ></button></div>
                    </div>
        </div>
    `
}


export function separateItem(item,nameItem){
    let name=""
    let quality=""
    let i=0
    while(i<item.length){
        
        if(item[i]== ","){
            break;
        }
        name+=item[i]
        i++;
    }
    i++
    while(i<item.length){
        if(item[i]==" "){
            i++
        }
        else{
            quality+=item[i]
        i++
        }

    }
    nameItem[0]=name
    quality=parseInt(quality)
    return quality

}

export function sumItem(){

    document.getElementById("sum").innerHTML=sum
    document.getElementById("subSum").style.display="none"

}



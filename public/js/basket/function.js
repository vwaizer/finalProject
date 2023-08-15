




 export function saleFunction(sum){
            
            let couponCode=document.getElementById("input").value
           
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
            document.getElementById("subSum").style.color="red"
            document.getElementById("sum").style.color="gray"
            document.getElementById("sum").style.textDecoration="line-through"
            document.getElementById("subSum").innerHTML=subSum+" VND"
            }
            
        }

export function addItem(nameItem,qualityItem=1,priceItem){

    document.getElementById("itemArea").innerHTML +=`
        <div id="${nameItem}">
                    <div class="d-flex flex-row justify-content-around p-3 border rounded-3" >
                        <div class="p-2 border rounded-4 container" >${nameItem}</div>
                        <div class="p-2 border rounded-4">${qualityItem}</div>
                        <div class="p-2 border rounded-4">${priceItem}</div>
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

export function sumItem(qualityItem,priceItem){
    let sumInFunction=0
    sumInFunction+=parseFloat(qualityItem)*parseFloat(priceItem)*1000
    let sum=sumInFunction+parseFloat(localStorage.getItem("sum"))
    document.getElementById("sum").style.color="red"
    document.getElementById("sum").style.fontSize="30px"
    document.getElementById("sum").innerHTML=sum+" VND"
    document.getElementById("subSum").style.display="none"
    return sum

}



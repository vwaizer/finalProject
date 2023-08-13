let database=localStorage.getItem("database")
let sum=0
// function removeItem(nameItem){
//     let listItem=localStorage.getItem("item")

//     for(let i=0;i<listItem.length;i=i+2){
//         if(listItem[i].name == nameItem){
//             listItem[i].quality=0;
//             break;
//         }
//     }
//     document.getElementById(nameItem).innerHTML=``;

// }
 function saleFunction(){
            couponCode=document.getElementById("input")
            if(document.getElementById("input")==""){

            }
            else{
                let subSum=sum
            if (couponCode == "1"){
                subSum=sum*0.9
            }
            else if(couponCode=="2"){
                subSum=sum*0.8
            }
            else if(couponCode=="3"){
                subSum=sum*0.7
            }
            document.getElementById("subSum").style.display="flex"
            document.getElementById("sum").style.textDecoration="line-through"
            document.getElementById("subSum").innerHTML=subSum
            }
            
        }

function addItem(){
    let priceItem
    let item=localStorage.getItem("item");
    let nameItem=[]
    let qualityItem=0
    qualityItem=separateItem(item,nameItem)
    // for(let i=0;i<database.length;i++){
    //     if (database[i].name==nameItem[0]){
    //         priceItem=database[i].price
    //         break;
    //     }
    // }
    
    // database.map(x =>{
    //     if(x.name==nameItem[0]){
    //         priceItem=x.price
    //     }
    // })
    priceItem=15
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


function separateItem(item,nameItem){
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

function sumItem(){
    let priceItem
    let item=localStorage.getItem("item");
    let nameItem=[]
    let qualityItem=0
    qualityItem=separateItem(item,nameItem)
    // for(let i=0;i<database.length;i++){
    //     if (database[i].name==nameItem){
    //         sum+=database[i].price*qualityItem
    //     }
    // }
    // database.map((item)=>{
    //     if(item.name==nameItem){
    //         sum+=item.price*qualityItem
    //     }
    // })
    document.getElementById("sum").innerHTML=sum
    document.getElementById("subSum").style.display="none"
}


addItem()
sumItem()
let currentPage=1
let limitProductOnOnePage=6
let listProduct = document.querySelectorAll('.item')
// console.log(listProduct)
function loadItem(){
    let beginProduct =(currentPage-1) * limitProductOnOnePage
    let endProduct = limitProductOnOnePage*currentPage-1
    listProduct.forEach((item,index)=>{
        if(index >=beginProduct && index <= endProduct){
            item.style.display='block'
        }else{
            item.style.display='none'
        }
    })
    Pages()
}
loadItem()
function Pages(){
    let page = Math.ceil(listProduct.length/limitProductOnOnePage)
    
     document.querySelector('.list_Page').innerHTML=''
    let i=1

    while(i <=page){
        let newPage = document.createElement('li')
        newPage.innerText=i
        if(i==currentPage){
            newPage.classList.add('current')
        }
        newPage.setAttribute('onclick','changePage('+i+')')

            
        document.querySelector('.list_Page').appendChild(newPage)
        i++
    }
    
}
    function changePage(i){
        currentPage=i
            
        loadItem()
        
    }
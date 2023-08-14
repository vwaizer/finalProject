import { productData } from "../data.js";


// let productData = [
//     {   
//         class: 'Lipstick',
//         picture: "public/img/3CE Blur Matte Lipstick 4g.webp",
//         category: 'Son Thỏi',
//         nameProduct: 'Son Thỏi 3CE Blur Matte Lipstick 4g',
//         price: '389,000',
//     },
//     {
//         class: 'Foundation',
//         picture: 'public/img/FOCALLURE dạng lỏng kiểm soát dầu che lỗ chân lông tự nhiên 30g.jpg',
//         category: 'Foundation',
//         nameProduct: 'Kem Nền FOCALLURE Dạng Lỏng Kiểm Soát Dầu Che Lỗ Chân Lông 30g',
//         price: '179,000'
//     },
//     {
//         class: 'Lipstick',
//         picture: "public/img/3CE Cloud Lip Tint.webp",
//         category: 'Son Kem',
//         nameProduct: 'Son Kem 3CE Cloud Lip Tint',
//         price: '289,000'
//     },
//     {

//         class: 'Lipstick',
//         picture: "public/img/3CE Soft Matte.webp",
//         category: 'Son Thỏi',
//         nameProduct: 'Son Thỏi 3CE Soft Matte Lipstick Clear Layer Edition',
//         price: '339,000',

//     },
//     {

//         class: 'Lipstick',
//         picture: 'public/img/3CE Velvet Lip Tint.webp',
//         category: 'Son Kem',
//         nameProduct: 'Son Kem 3CE Velvet Lip Tint',
//         price: '289,000',
//     },
//     {

//         class: 'Foundation',
//         picture: 'public/img/Espoir Pro Tailor Foundation Be Glow SPF25 PA++.webp',
//         category: ' Foundation',
//         nameProduct: 'Espoir Pro Tailor Foundation Be Glow SPF25 PA++',
//         price: "400,000",

//     },
//     {

//         class: 'Lipstick',
//         picture: 'public/img/Bbia Last Velvet Lip Tint.webp',
//         category: 'Son Kem',
//         nameProduct: "Son Kem Bbia Last Velvet Lip Tint",
//         price: '139,000'
//     },
//     {
//         class: 'Lipstick',
//         picture: 'public/img/Maybelline Fit Me Foundation Matte + Poreless Normal To Oily SPF 22.webp',
//         category: 'Foundation',
//         nameProduct: 'Maybelline Fit Me Foundation Matte + Poreless Normal To Oily SPF 22',
//         price: '209,000'
//     },
//     {

//         class: 'Lipstick',
//         picture: 'public/img/Black Rouge Air Fit Velvet Season 9 - Acoustic Mood.webp',
//         category: 'Son Kem',
//         nameProduct: 'Son Kem Black Rouge Air Fit Velvet Season 9 - Acoustic Mood',
//         price: '169,000',
//     },
//     {
//         class: 'Foundation',
//         picture: 'public/img/GLAMRR Q Vegan Super Cover Cushion.webp',
//         category: 'Cushion',
//         nameProduct: 'Phấn Nước GLAMRR Q Vegan Super Cover SPF50+/PA+++ (1 Lõi)',
//         price: '395,000',
//     },
//     {

//         class: 'Lipstick',
//         picture: "public/img/Black Rouge Wearable Velvet Lipstick.webp",
//         category: 'Son Thỏi',
//         nameProduct: 'Son Thỏi Black Rouge Wearable Velvet Lipstick',
//         price: '109,000'
//     },
//     {

//         class: 'Lipstick',
//         picture: 'public/img/Blackrouge half n half water glow season 2.webp',
//         category: 'Son Tint',
//         nameProduct: 'Son Tint Blackrouge half n half water glow season 2',
//         price: '169,000'
//     },
//     {

//         class: 'Lipstick',
//         picture: 'public/img/Dearmay California Cherry Velvet Tint.webp',
//         category: 'Son Tint',
//         nameProduct: 'Son Tint Dearmay California Cherry Velvet Tint',
//         price: '155,000'
//     },
//     {

//         class: 'Lipstick',
//         picture: 'public/img/Dearmay La Piste Lip Tint.webp',
//         category: 'Son Tint',
//         nameProduct: 'Son Tint Dearmay La Piste Lip Tint',
//         price: '115,000'
//     },
//     {

//         class: 'Lipstick',
//         picture: 'public/img/Lilybyred Glassy Layer Fixing Tint.webp',
//         category: 'Son Tint',
//         nameProduct: 'Son Tint Lilybyred Glassy Layer Fixing Tint',
//         price: '109,000'
//     },

//     {

//         class: 'Lipstick',
//         picture: 'public/img/Lilybyred Mood Cinema Velvet Epilogue 3.5g.webp',
//         category: 'Son Thỏi',
//         nameProduct: 'Son Thỏi Lylibyred Mood Cinema Velvet Epilogue 3.5g',
//         price: '109,000',

//     },
//     {
//         class: 'Foundation',
//         picture: 'public/img/GLAMRR Q LONG WEAR DD CUSHION (1 lõi x 13g).avif',
//         category: 'Cushion',
//         nameProduct: 'Phấn nước GLAMRR Q LONG WEAR DD 13g SPF50+/PA+++ (1 lõi)',
//         price: '325,000',
//     },
//     {

//         class: 'Lipstick',
//         picture: 'public/img/Maybelline.webp',
//         category: 'Son Thỏi',
//         nameProduct: 'Son Thỏi Maybelline Ultimate',
//         price: '339,000',
//     },
//     {
//         class: 'Foundation',
//         picture: 'public/img/COLORKEY Foundation.jpg',
//         category: 'Foundation',
//         nameProduct: 'Kem nền dạng lỏng lâu trôi COLORKEY',
//         price: '238,000'
//     },
//     {
//         class: 'Lipstick',
//         picture: 'public/img/Merzy The Watery Dew Tint 3.jpg',
//         category: 'Son Tint',
//         nameProduct: 'Son Tint Merzy The Watery Dew Tint 3',
//         price: '159,000'
//     },
//     {
//         class: 'Foundation',
//         picture: 'public/img/Clio Kill Cover Glow Foundation SPF50+ PA++++ 38g.jpg',
//         category: 'Foundation',
//         nameProduct: 'Kem Nền Clio Kill Cover Glow Foundation SPF50+ PA++++ 38g',
//         price: '239,000'
//     },
//     {
//         class: 'Lipstick',
//         picture: 'public/img/Merzy The Watery Dew.jpg',
//         category: 'Son Tint',
//         nameProduct: 'Son Tint Merzy The Watery Dew',
//         price: '159,000'
//     },
//     {
//         class: 'Foundation',
//         picture: 'public/img/Loreal Paris Infallible Stay Fresh 24h Foundation.jpg',
//         category: 'Foundation',
//         nameProduct: 'Kem Nền Loreal Paris Infallible Stay Fresh 24h',
//         price: '255,000'
//     },

//     {
//         class: 'Lipstick',
//         picture: 'public/img/Peripera Ink Mood Matte Stick.jpeg',
//         category: 'Son Thỏi',
//         nameProduct: 'Son Thỏi Peripera Ink Mood Matte Stick',
//         price: '145,000',
//     },
//     {
//         class: 'Lipstick',
//         picture: 'public/img/Romand Blur Fudge.webp',
//         category: 'Son Kem',
//         nameProduct: 'Son Kem Romand Blur Fudge',
//         price: '159,000',

//     },
//     {
//         class: 'Lipstick',
//         picture: 'public/img/Sugarplum MistyNow Blurring Tint.webp',
//         category: 'Son Tint',
//         nameProduct: 'Son Tint Sugarplum MistyNow Blurring Tint',
//         price: '189,000',

//     },
//     {
//         class: 'Foundation',
//         picture: 'public/img/Superstay 24H Long Lasting Full Coverage.jpeg',
//         category: 'Foundation',
//         nameProduct: 'Kem nền Che Phủ Cao, Lâu Trôi Superstay 24H  30ml',
//         price: '239,000'
//     },
//     {
//         class: 'Foundation',
//         picture: "public/img/L'Oreal Paris True match Blendable Foundation.webp",
//         category: 'Foundation',
//         nameProduct: "Kem Nền L'Oreal Paris True match Blendable Foundation 30ml",
//         price: '269,000'
//     },
//     {
//         class: 'Foundation',
//         picture: "public/img/Espoir Pro Tailor Be Glow Cushion .webp",
//         category: 'Cushion',
//         nameProduct: "Phấn Nước Espoir Pro Tailor Be Glow SPF42 PA++ (Kèm Lõi Refill) ",
//         price: '269,000'
//     },
//     {
//         class: 'Foundation',
//         picture: "public/img/Romand Bare Water Cushion SPF38 PA+++.webp",
//         category: 'Cushion',
//         nameProduct: "Phấn Nước Romand Bare Water SPF38 PA+++ (1 lõi) ",
//         price: '349,000'
//     }

// ]

//phân trang
let currentPage=1
let limitProductOnOnePage=6
let listProduct = document.querySelectorAll('.item')
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
        console.log(i);
        const newPage = document.createElement('li')
        
        newPage.innerText=i
        const contextPage = newPage.textContent
        newPage.addEventListener('click',()=>{
                    currentPage=contextPage
                    loadItem()
                })
              
        if(i===currentPage){
            newPage.classList.add('current')
        }
  
        document.querySelector('.list_Page').appendChild(newPage)
        i++
    }
    
}
  
// console.log(productData)
let currentURL = window.location.href
let selectPrice =document.getElementById('select_product_price')
// Chuyển object trong mảng sang HTML
let containeItems = document.querySelector('.product')
function renderProductToHTML(array){
    containeItems.innerHTML = '';
    array.forEach(function (obj) { 
       
        let divItem = document.createElement('div')
        divItem.setAttribute('data-index',obj.id)
        let divImg = document.createElement('div')
        
        let divNameItem = document.createElement('div')
        let pNameProduct = document.createElement('p')
        let spanfullName = document.createElement('span')
        let spanPrice = document.createElement('span')
        let divPriceContain = document.createElement('div')
        let imgItem = document.createElement('img')
        containeItems.classList.add('containe_items')
        divNameItem.classList.add('name_item')
        divPriceContain.classList.add('priceContain')
        divImg.classList.add('picture_item')
        divItem.classList.add('item')
    
        if (obj.nameProduct.length <= 35) {
            spanfullName.innerHTML = ` ${obj.nameProduct}&nbsp <br><br>`
        } else {
            spanfullName.innerHTML = obj.nameProduct
        }
        spanPrice.innerHTML = `${obj.price}đ`
        divPriceContain.appendChild(spanPrice)
        pNameProduct.appendChild(spanfullName)
        divNameItem.appendChild(pNameProduct)
        containeItems.appendChild(divItem)
        divItem.appendChild(divImg)
        divItem.appendChild(divNameItem)
        divItem.appendChild(divPriceContain)
        imgItem.src = obj.picture
        divImg.appendChild(imgItem)
    })
    listProduct = document.querySelectorAll('.item');
    loadItem(); 
    
}
renderProductToHTML(productData)
selectPrice.addEventListener('change',function(){
    arrangePrice(productData)
})

let a = document.querySelectorAll('.item')
console.log(a)
for(let i=0;i<a.length;i++){
    a[i].addEventListener('click',function(){
        const id=a[i].dataset.index
        const newURL = currentURL.replace(/\/[^\/]*$/,`/detail-and-information_Toan.html?id=${id}`)
        console.log(a[i].dataset.index)
        window.location.pathname = newURL;
    })
}

// Sắp xếp sản phẩm theo giá 
function arrangePrice (arr){
          if(selectPrice.value==='Increase'){
    console.log(1)
              arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))

  }else if(selectPrice.value==='Down'){
    console.log(2)
  
    arr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
  } 
  renderProductToHTML(arr)
}

// Lọc sản phẩm theo Navbar tìm kiếm và theo giá
const lipstickList = productData.filter(product=> product.class==='Lipstick')
const foundationList = productData.filter(product=> product.class==='Foundation')
const cleanserList= productData.filter(product=> product.class==='Cleanser')

const LipstickNav = document.getElementById('Lipstick')
const FoundationNav = document.getElementById('Foundation')
const CleanserNav = document.getElementById('Cleanser')

LipstickNav.addEventListener('click',function(){
    renderProductToHTML(lipstickList)
    selectPrice.addEventListener('change',function(){
        arrangePrice(lipstickList)
    })
})

FoundationNav.addEventListener('click',function(){
    renderProductToHTML(foundationList)
    selectPrice.addEventListener('change',function(){
        arrangePrice(foundationList)
})
})

CleanserNav.addEventListener('click',function(){
    renderProductToHTML(cleanserList)
    selectPrice.addEventListener('change',function(){
        arrangePrice(foundationList)
})
})

let optionIncrease = document.querySelector('#optionIncrease')
let optionDown = document.querySelector('#optionDown')
const price = document.querySelectorAll('.price')
console.log(optionIncrease)
let productData = [
    {
        picture: "public/img/3CE Blur Matte Lipstick 4g.webp",
        category: 'Son Thỏi',
        nameProduct: 'Son Thỏi 3CE Blur Matte Lipstick 4g',
        price: '389,000',
    },
    {
        picture: 'public/img/FOCALLURE dạng lỏng kiểm soát dầu che lỗ chân lông tự nhiên 30g.jpg',
        category: 'Foundation',
        nameProduct: 'Kem Nền FOCALLURE Dạng Lỏng Kiểm Soát Dầu Che Lỗ Chân Lông 30g',
        price: '179,000'
    },
    {
        picture: "public/img/3CE Cloud Lip Tint.webp",
        category: 'Son Kem',
        nameProduct: 'Son Kem 3CE Cloud Lip Tint',
        price: '289,000'
    },
    {

        picture: "public/img/3CE Soft Matte.webp",
        category: 'Son Thỏi',
        nameProduct: 'Son Thỏi 3CE Soft Matte Lipstick Clear Layer Edition',
        price: '339,000',

    },
    {

        picture: 'public/img/3CE Velvet Lip Tint.webp',
        category: 'Son Kem',
        nameProduct: 'Son Kem 3CE Velvet Lip Tint',
        price: '289,000',
    },
    {

        picture: 'public/img/Espoir Pro Tailor Foundation Be Glow SPF25 PA++.webp',
        category: ' Foundation',
        nameProduct: 'Espoir Pro Tailor Foundation Be Glow SPF25 PA++',
        price: "400,000",

    },
    {

        picture: 'public/img/Bbia Last Velvet Lip Tint.webp',
        category: 'Son Kem',
        nameProduct: "Son Kem Bbia Last Velvet Lip Tint",
        price: '139,000'
    },
    {
        picture: 'public/img/Maybelline Fit Me Foundation Matte + Poreless Normal To Oily SPF 22.webp',
        category: 'Foundation',
        nameProduct: 'Maybelline Fit Me Foundation Matte + Poreless Normal To Oily SPF 22',
        price: '209,000'
    },
    {

        picture: 'public/img/Black Rouge Air Fit Velvet Season 9 - Acoustic Mood.webp',
        category: 'Son Kem',
        nameProduct: 'Son Kem Black Rouge Air Fit Velvet Season 9 - Acoustic Mood',
        price: '169,000',
    },
    {
        picture: 'public/img/GLAMRR Q Vegan Super Cover Cushion.webp',
        category: 'Cushion',
        nameProduct: 'Phấn Nước GLAMRR Q Vegan Super Cover SPF50+/PA+++ (1 Lõi)',
        price: '395,000',
    },
    {

        picture: "public/img/Black Rouge Wearable Velvet Lipstick.webp",
        category: 'Son Thỏi',
        nameProduct: 'Son Thỏi Black Rouge Wearable Velvet Lipstick',
        price: '109,000'
    },
    {

        picture: 'public/img/Blackrouge half n half water glow season 2.webp',
        category: 'Son Tint',
        nameProduct: 'Son Tint Blackrouge half n half water glow season 2',
        price: '169,000'
    },
    {

        picture: 'public/img/Dearmay California Cherry Velvet Tint.webp',
        category: 'Son Tint',
        nameProduct: 'Son Tint Dearmay California Cherry Velvet Tint',
        price: '155,000'
    },
    {

        picture: 'public/img/Dearmay La Piste Lip Tint.webp',
        category: 'Son Tint',
        nameProduct: 'Son Tint Dearmay La Piste Lip Tint',
        price: '115,000'
    },
    {

        picture: 'public/img/Lilybyred Glassy Layer Fixing Tint.webp',
        category: 'Son Tint',
        nameProduct: 'Son Tint Lilybyred Glassy Layer Fixing Tint',
        price: '109,000'
    },

    {

        picture: 'public/img/Lilybyred Mood Cinema Velvet Epilogue 3.5g.webp',
        category: 'Son Thỏi',
        nameProduct: 'Son Thỏi Lylibyred Mood Cinema Velvet Epilogue 3.5g',
        price: '109,000',

    },
    {
        picture: 'public/img/GLAMRR Q LONG WEAR DD CUSHION (1 lõi x 13g).avif',
        category: 'Cushion',
        nameProduct: 'Phấn nước GLAMRR Q LONG WEAR DD 13g SPF50+/PA+++ (1 lõi)',
        price: '325,000',
    },
    {

        picture: 'public/img/Maybelline.webp',
        category: 'Son Thỏi',
        nameProduct: 'Son Thỏi Maybelline Ultimate',
        price: '339,000',
    },
    {
        picture: 'public/img/COLORKEY Foundation.jpg',
        category: 'Foundation',
        nameProduct: 'Kem nền dạng lỏng lâu trôi COLORKEY',
        price: '238,000'
    },
    {

        picture: 'public/img/Merzy The Watery Dew Tint 3.jpg',
        category: 'Son Tint',
        nameProduct: 'Son Tint Merzy The Watery Dew Tint 3',
        price: '159,000'
    },
    {
        picture: 'public/img/Clio Kill Cover Glow Foundation SPF50+ PA++++ 38g.jpg',
        category: 'Foundation',
        nameProduct: 'Kem Nền Clio Kill Cover Glow Foundation SPF50+ PA++++ 38g',
        price: '239,000'
    },
    {

        picture: 'public/img/Merzy The Watery Dew.jpg',
        category: 'Son Tint',
        nameProduct: 'Son Tint Merzy The Watery Dew',
        price: '159,000'
    },
    {
        picture: 'public/img/Loreal Paris Infallible Stay Fresh 24h Foundation.jpg',
        category: 'Foundation',
        nameProduct: 'Kem Nền Loreal Paris Infallible Stay Fresh 24h',
        price: '255,000'
    },

    {

        picture: 'public/img/Peripera Ink Mood Matte Stick.jpeg',
        category: 'Son Thỏi',
        nameProduct: 'Son Thỏi Peripera Ink Mood Matte Stick',
        price: '145,000',
    },
    {

        picture: 'public/img/Romand Blur Fudge.webp',
        category: 'Son Kem',
        nameProduct: 'Son Kem Romand Blur Fudge',
        price: '159,000',

    },
    {

        picture: 'public/img/Sugarplum MistyNow Blurring Tint.webp',
        category: 'Son Tint',
        nameProduct: 'Son Tint Sugarplum MistyNow Blurring Tint',
        price: '189,000',

    },
    {
        picture: 'public/img/Superstay 24H Long Lasting Full Coverage.jpeg',
        category: 'Foundation',
        nameProduct: 'Kem nền Che Phủ Cao, Lâu Trôi Superstay 24H  30ml',
        price: '239,000'
    },
    {
        picture: "public/img/L'Oreal Paris True match Blendable Foundation.webp",
        category: 'Foundation',
        nameProduct: "Kem Nền L'Oreal Paris True match Blendable Foundation 30ml",
        price: '269,000'
    },
    {
        picture: "public/img/Espoir Pro Tailor Be Glow Cushion .webp",
        category: 'Cushion',
        nameProduct: "Phấn Nước Espoir Pro Tailor Be Glow SPF42 PA++ (Kèm Lõi Refill) ",
        price: '269,000'
    },
    {
        picture: "public/img/Romand Bare Water Cushion SPF38 PA+++.webp",
        category: 'Cushion',
        nameProduct: "Phấn Nước Romand Bare Water SPF38 PA+++ (1 lõi) ",
        price: '349,000'
    }




]

// console.log(productData)
let containeItems = document.querySelector('.containe_items')
let selectPrice =document.getElementById('select_product_price')



function arrangePrice(){
          let selectOption=selectPrice.options[selectPrice.selectedIndex]
        console.log(selectOption.value)
        if(selectOption.value==1){
            productData.forEach(function (obj){
                    obj.sort((a, b) => {
            if (a.price < b.price) {
                return -1
            } if (a.price > b.price) {
                return 1
            }
            return 0
        })
            })
       
        
        }else console.log(678)
    
}

productData.forEach(function (obj) {
    let divItem = document.createElement('div')
    let divImg = document.createElement('div')
    let divNameItem = document.createElement('div')
    let pNameProduct = document.createElement('p')
    let spanfullName = document.createElement('span')
    let spanPrice = document.createElement('span')
    let divPriceContain = document.createElement('div')
    let imgItem = document.createElement('img')

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

    selectPrice.addEventListener('change',arrangePrice)
})
console.log(containeItems)

// console.log(optionPrice)
function sortIncrease() {

    productData.sort((a, b) => {
        if (a.price < b.price) {
            return -1
        } if (a.price > b.price) {
            return 1
        }
        return 0
    })
}


console.log(productData)

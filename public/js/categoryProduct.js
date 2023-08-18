import { productData } from "../js/data.js";


//phân trang
let currentPage = 1
const limitProductOnOnePage = 15
let listProduct = document.querySelectorAll('.item')
function loadItem() {
    let beginProduct = (currentPage - 1) * limitProductOnOnePage
    let endProduct = limitProductOnOnePage * currentPage - 1
    listProduct.forEach((item, index) => {
        if (index >= beginProduct && index <= endProduct) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
    Pages()
}
loadItem()
function Pages() {
    let page = Math.ceil(listProduct.length / limitProductOnOnePage)

    document.querySelector('.list_Page').innerHTML = ''
    let i = 1

    while (i <= page) {
        // console.log(i);
        const newPage = document.createElement('li')

        newPage.innerText = i
        const contextPage = newPage.textContent
        newPage.addEventListener('click', () => {
            currentPage = contextPage
            loadItem()
        })

        if (i === currentPage) {
            newPage.classList.add('current')
        }
        document.querySelector('.list_Page').appendChild(newPage)
        i++
    }
}

// console.log(productData)
let currentURL = window.location.href
let selectPrice = document.getElementById('select_product_price')
// Chuyển object trong mảng sang HTML
let containeItems = document.querySelector('.product')
export function renderProductToHTML(array) {
    containeItems.innerHTML = '';
    array.forEach(function (obj) {

        let divItem = document.createElement('div')
        // đưa id của sản phẩm lên url
        divItem.addEventListener('click', function () {
            const id = obj.id;
            const newURL = currentURL.replace(/\/[^\/]*$/, `/detail-and-information_Toan.html?id=${id}`);
            window.location.href = newURL;
        })
        // divItem.setAttribute('data-index',obj.id)
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
            spanfullName.innerHTML = ` ${obj.nameProduct}&nbsp<br><br>`
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
selectPrice.addEventListener('change', function () {
    arrangePrice(productData)
})

let a = document.querySelectorAll('.item')
console.log(a)
// for(let i=0;i<a.length;i++){
//     a[i].addEventListener('click',function(){
//         const id=a[i].dataset.index
//         const newURL = currentURL.replace(/\/[^\/]*$/,`/detail-and-information_Toan.html?id=${id}`)
//         console.log(a[i].dataset.index)
//         window.location.pathname = newURL;
//     })
// }

// Sắp xếp sản phẩm theo giá 
function arrangePrice(arr) {
    if (selectPrice.value === 'Increase') {
        console.log(1)
        arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))




    } else if (selectPrice.value === 'Down') {
        console.log(2)

        arr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))



    }

    renderProductToHTML(arr)

}

// Lọc sản phẩm theo Navbar tìm kiếm và theo giá

// mảng sản phẩm 
const lipstickList = productData.filter(product => product.class === 'Lipstick')
const foundationList = productData.filter(product => product.class === 'Foundation')
const cleanserList = productData.filter(product => product.class === 'Cleanser')
const creameLipsList = productData.filter(product => product.category === 'Son Kem')
const matteLipsList = productData.filter(product => product.category === 'Son Thỏi')
const tintLipsList = productData.filter(product => product.category === 'Son Tint')
const foundaChildList = productData.filter(product => product.category === 'Foundation')
const cushionList = productData.filter(product => product.category === 'Cushion')
const bbCreamList = productData.filter(product => product.category === 'BB Cream')
const ccCreamList = productData.filter(product => product.category === 'CC Cream')
const waterCleanserList = productData.filter(product => product.category === 'Water Cleanser')
const oilCleanserList = productData.filter(product => product.category === 'Oil Cleanser')


const LipstickNav = document.getElementById('Lipstick')
const FoundationNav = document.getElementById('Foundation')
const CleanserNav = document.getElementById('Cleanser')
const CreamLips = document.getElementById('cream-lips')
const tintLips = document.getElementById('tint-lips')
const matteLips = document.getElementById('matte-lips')
const foundaChild = document.getElementById('foundation-child')
const cushion = document.getElementById('cushion')
const bbCream = document.getElementById('bb-cream')
const ccCream = document.getElementById('cc-cream')
const waterCleanser = document.getElementById('water-Cleanser')
const oilCleanser = document.getElementById('oil-Cleanser')
const navItem = document.querySelectorAll('.NavItem li')
const nameOfNav = document.querySelector('.name_Of_Nav')
const headerName = document.querySelectorAll('.topnav a')[2]
console.log(headerName)
for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', function () {
        nameOfNav.innerText = navItem[i].innerText
        console.log(nameOfNav.innerText)
    })
}
headerName.addEventListener('click', function () {
    window.location.href="CategoryProduct.html"

})
console.log(currentURL)

LipstickNav.addEventListener('click', function () {
 
    renderProductToHTML(lipstickList)
    selectPrice.addEventListener('change', function () {
        arrangePrice(lipstickList)


    })
})



FoundationNav.addEventListener('click', function () {
    renderProductToHTML(foundationList)
    
    selectPrice.addEventListener('change', function () {
        arrangePrice(foundationList)
    })
})

CleanserNav.addEventListener('click', function () { 
    renderProductToHTML(cleanserList)
    
    selectPrice.addEventListener('change', function () {
        arrangePrice(cleanserList)
    })
})
CreamLips.addEventListener('click', function () {
    renderProductToHTML(creameLipsList)
    selectPrice.addEventListener('change', function () {
        arrangePrice(creameLipsList)
    })
})
matteLips.addEventListener('click', function () {
    renderProductToHTML(matteLipsList)
    selectPrice.addEventListener('change', function () {
        arrangePrice(matteLipsList)
    })
})
tintLips.addEventListener('click', function () {
    renderProductToHTML(tintLipsList)
    selectPrice.addEventListener('change', function () {
        arrangePrice(tintLipsList)
    })
})
foundaChild.addEventListener('click', function () {
    renderProductToHTML(foundaChildList)
    selectPrice.addEventListener('change', function () {
        arrangePrice(foundaChildList)
    })
})
cushion.addEventListener('click', function () {
    renderProductToHTML(cushionList)
    selectPrice.addEventListener('change', function () {
        arrangePrice(cushionList)
    })
})
bbCream.addEventListener('click', function () {
    renderProductToHTML(bbCreamList)
    selectPrice.addEventListener('change', function () {
        arrangePrice(bbCreamList)
    })
})
ccCream.addEventListener('click', function () {
    renderProductToHTML(ccCreamList)
    selectPrice.addEventListener('change', function () {
        arrangePrice(ccCreamList)
    })
})
waterCleanser.addEventListener('click', function () {
    renderProductToHTML(waterCleanserList)
    selectPrice.addEventListener('change', function () {
        arrangePrice(waterCleanserList)
    })
})
oilCleanser.addEventListener('click', function () {
    renderProductToHTML(oilCleanserList)
    selectPrice.addEventListener('change', function () {
        arrangePrice(oilCleanserList)
    })
})


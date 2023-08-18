import { productData } from "./data.js";
import { clickFunction } from "./detail2.js";

let newUrl= window.location.href;
let url = new URL(newUrl);
let search_param = url.searchParams;
if(search_param.has("id")){
    // console.log(search_param.get("id"));
    const newId = parseInt(search_param.get("id"))
    console.log(newId);
    const newData = productData.find(({ id }) => id === newId )
    console.log(newData);
    document.getElementById("leftbox").innerHTML=`
     <div >
          <div class="d-flex flex-column justify-content-between p-3">
            <div class="p-2"><img src="${newData.picture}" style="height: 500px"> </div>
          </div>
        </div> 
    `
    document.getElementById("rightbox").innerHTML=`
    <div >
    <div class="d-flex flex-column justify-content-center p-3">
      <div class="p-2"><h2>Tên sản phẩm: ${newData.nameProduct}</h2></div>
      <div class="p-2"><h6>Loại: ${newData. brand}</h6></div>
      <div class="p-2"><h6>Xuất xứ: ${newData.brandOrigin}</h6></div>
      <div class="p-2"><h6>Thành phần: ${newData.ingredients}</h6></div>
      <div class="p-2"><h6>Hạn sử dụng: ${newData.expiryDate}</h6></div>
      <div class="p-2"><h6>Giá: ${newData.price}</h6></div>
    </div>
  </div> `
}
// function clickButton(){
//     window.location.href="http://127.0.0.1:5500/basket.html?id=${idItem}"
// }
document.getElementById("click").addEventListener("click", function () {
    clickFunction(search_param.get("id"))
})
function isItem(){
    let takeItem = localStorage.getItem("information")
    console.log(takeItem);
    if(takeItem){
        document.getElementById("dangnhap").style.display = "none";
        document.getElementById("change").style.display = "flex"
    }
}
isItem()

// Lắng nghe sự kiện click trên mục liên hệ trong thanh navbar
document.getElementById("contact").addEventListener("click", function() {
    // Lấy vị trí của phần footer
    const footerPosition = document.getElementById("contactInfo").offsetTop;
  
    // Cuộn trang xuống vị trí của phần footer
    window.scrollTo({
      top: footerPosition,
      behavior: "smooth" // Tạo hiệu ứng cuộn mượt
    });
  });
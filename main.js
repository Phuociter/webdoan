var clickLogin = document.getElementById("button_login");
var userModal= document.getElementById('user_modal');
var loginModal = document.getElementById('login_modal');
var clickSignUp = document.getElementById('sign_up_button');
var signUpModal = document.getElementById('sign_up_modal');
var clickProduct = document.querySelector('.product');
var clickCloseProductInfo = document.querySelector('.close_detail');

function showform() {
    userModal.style.display = 'block';
}
function showlogin() {
            signUpModal.style.display = 'none';
            loginModal.style.display = 'block';
            
}
function closeUser() {
            userModal.style.display = 'none';
}
function showSignUp() {
          loginModal.style.display = 'none';
          signUpModal.style.display = 'block';
}
// function closeProductInfo(){
//             productInfo.style.display = 'none';
// }
function createProduct() {
    if (localStorage.getItem('product') == null){
        var productArray = [
            {productID:100,img:  'IMG/101.jpg',name:'Nam GA-700-1ADR',price:2114000,brand:'G-SHOCK'},
            {productID:101,img:  'IMG/102.jpg',name:'Nam GA-800-1ADR',price:990000,brand:'G-SHOCK'},
            {productID:102,img:  'IMG/103.jpg',name:'Nam GA-2100GB-1ADR ',price:3533000,brand:'G-SHOCK'},
            {productID:103,img:  'IMG/104.jpg',name:'Nam GA-2100SB-1ADR ',price:3316000,brand:'G-SHOCK'},
            {productID:104,img:  'IMG/105.jpg',name:'Forgotten Future Nam DW-5600FF-8DR',price:2764000,brand:'G-SHOCK'},
            {productID:105,img:  'IMG/106.jpg',name:'Forgotten Future Nam GA-700FF-8ADR  ',price:3178000,brand:'G-SHOCK'},
            {productID:106,img:  'IMG/107.jpg',name:'Forgotten Future  Nam GA-2200FF-8ADR',price:4224000,brand:'G-SHOCK'},
            {productID:108,img:  'IMG/108.jpg',name:'Nữ GMA-S2100BA-4ADR',price:2902000,brand:'G-SHOCK'},
            {productID:109,img:  'IMG/109.jpg',name:'Nam GA-2100-1A1DR',price:2902000,brand:'G-SHOCK'},
            {productID:110,img:  'IMG/110.jpg',name:'Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:111,img:  'IMG/111.webp',name:'Cosmograph Daytona',price:1937733000,brand:'ROLEX'},
            {productID:112,img:  'IMG/112.webp',name:'Lady-Datejust',price:407394000,brand:'ROLEX'},
            {productID:113,img:  'IMG/113.webp',name:'RETROGRADE DAY-DATE',price:1280000000,brand:'VACHERON'},
            {productID:114,img:  'IMG/114.webp',name:'DUAL TIME',price:1260000000,brand:'VACHERON'},
            {productID:115,img:  'IMG/115.webp',name:'TRIPLE CALENDRIER 1942',price:625000000,brand:'VACHERON'},
            {productID:116,img:  'IMG/116.webp',name:'QUARTZ',price:850000000,brand:'VACHERON'},
            {productID:117,img:  'IMG/117.webp',name:'GMT-Master II',price:410005500,brand:'ROLEX'},
            {productID:118,img:  'IMG/118.webp',name:'Sky-Dweller',price:1062880500,brand:'ROLEX'},
            {productID:119,img:  'IMG/119.webp',name:'Day-Date 40',price:1577346000,brand:'ROLEX'},
            {productID:120,img:  'IMG/120.webp',name:'Datejust 36',price:221977500,brand:'ROLEX'},
            {productID:121,img:  'IMG/121.webp',name:'Air-King',price:185416500,brand:'ROLEX'},
            {productID:122,img:  'IMG/122.webp',name:'Rolex Deapsea',price:360387000,brand:'ROLEX'},
            {productID:123,img:  'IMG/123.webp',name:'OVERSEAS CHRONOGRAPH',price:925000000,brand:'VACHERON'},
            {productID:124,img:  'IMG/124.webp',name:'Day-Date 36',price:1462400000,brand:'ROLEX'},
            {productID:125,img:  'IMG/125.webp',name:'Oyster Perpetual 31',price:141021000,brand:'ROLEX'},
            {productID:126,img:  'IMG/126.webp',name:'Datejust 31',price:396498000,brand:'ROLEX'},
            {productID:127,img:  'IMG/127.webp',name:'RETROGRADE DAY-DATE',price:1600000000,brand:'VACHERON'},
            {productID:128,img:  'IMG/128.jpg',name:'Nam GM-5600-1DR',price:4352000,brand:'G-SHOCK'},
            {productID:129,img:  'IMG/129.jpg',name:'GNam GM-2100-1ADR ',price:5803000,brand:'G-SHOCK'},
            {productID:130,img:  'IMG/130.webp',name:'Explorer 36',price:292488000,brand:'ROLEX'},
            {productID:131,img:  'IMG/131.webp',name:'AMERICAN 1921',price:865000000,brand:'VACHERON'},
            {productID:132,img:  'IMG/132.webp',name:'OVERSEAS SELF-WINDING',price:1570000000,brand:'VACHERON'},
            {productID:133,img:  'IMG/133.webp',name:'SELF-WINDING',price:329000000,brand:'VACHERON'},
            {productID:134,img:  'IMG/134.webp',name:'OVERSEAS SELF-WINDING',price:1140000000,brand:'VACHERON'},
            {productID:135,img:  'IMG/135.webp',name:'MOON PHASE',price:2120000000,brand:'VACHERON'},
            {productID:136,img:  'IMG/136.webp',name:'DUAL TIME',price:800000000,brand:'VACHERON'},
            {productID:137,img:  'IMG/137.webp',name:'CO‑AXIAL MASTER CHRONOMETER',price:147200000,brand:'OMEGA'},
            {productID:138,img:  'IMG/138.webp',name:'AQUA TERRA 150M',price:368000000,brand:'OMEGA'},
            {productID:139,img:  'IMG/139.webp',name:'BULLHEAD ',price:2256000000,brand:'OMEGA'},
            {productID:140,img:  'IMG/140.webp',name:'CO‑AXIAL MASTER CHRONOMETER',price:190350000,brand:'OMEGA'},
            {productID:141,img:  'IMG/141.webp',name:'DARK SIDE OF THE MOON',price:251450000,brand:'OMEGA'},
            {productID:142,img:  'IMG/142.webp',name:'DARK SIDE OF THE MOON',price:175075000,brand:'OMEGA'},
            {productID:143,img:  'IMG/143.webp',name:'PLANET OCEAN 600M',price:166850000,brand:'OMEGA'},
            {productID:144,img:  'IMG/144.webp',name:'PLOPROF 1200M',price:296100000,brand:'OMEGA'},
            {productID:145,img:  'IMG/145.webp',name:'PRESTIGE',price:116325000,brand:'OMEGA'},
            {productID:146,img:  'IMG/146.webp',name:'RACING ',price:150400000,brand:'OMEGA'},
            {productID:147,img:  'IMG/148.webp',name:'TOURBILLON',price:4551950000,brand:'OMEGA'},
           
        ]
        localStorage.setItem('product',JSON.stringify(productArray));
    }
}
var content = document.getElementById('content');
var PageProduct = document.getElementById('page_product')
function scrollToTop() {
    window.scroll({
          top: 230,
          left: 0,
          behavior: 'smooth' // Điều này làm cho cuộn mượt hơn
        });
}
function showListPageProductStranger(){
    let numberOfPageProduct = divideProductPage('product').length; //? = 4
    let PageProductTemp = '';
    for(let i = 0; i < numberOfPageProduct; i++) {
          PageProductTemp += '<button class="page_number" onclick="showProductStranger('+i+'),scrollToTop()">'+(i+1)+'</button>'
    }
    PageProduct.innerHTML = PageProductTemp;
}
function showProductStranger(i) {
    showListPageProductStranger();
    pageOfProduct = divideProductPage('product');
    let contentTemp = '';
    for(let j = 0; j < pageOfProduct[i].length; j++) {
        // onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')" sau id="product"
          contentTemp += '<div class="product" onclick="productDetail('+pageOfProduct[i][j].productID+')" ><img src="'+pageOfProduct[i][j].img+'" alt="" class="product_img"><p class="product_name">'+pageOfProduct[i][j].name+'</p><p class="product_price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
    }
    content.innerHTML = contentTemp;
}
function showProductsByBrand(brand) {
    var productArray = JSON.parse(localStorage.getItem('product'));
    var filteredProducts = productArray.filter(function (content) {
      return content.brand === brand;
    });
  
    // Hiển thị sản phẩm theo brand(thương hiệu)
    var contentTemp = '';
    for (var i = 0; i < filteredProducts.length; i++) {
      contentTemp += '<div class="product" onclick="productDetail(' + filteredProducts[i].productID + ')"><img src="' + filteredProducts[i].img + '" alt="" class="product_img"><p class="product_name">' + filteredProducts[i].name + '</p><p class="product_price">' + currency(filteredProducts[i].price) + '</p></div>';
    }
    content.innerHTML = contentTemp;
}
function productDetail(productID) {
    var productDetail = document.getElementById('product_detail');
    var productInfo = document.getElementById('infomation');
    productDetail.style.display = 'block';
    productInfo.style.display = 'block';
    let productArray = JSON.parse(localStorage.getItem('product'));
    var i;
    for (i = 0; i < productArray.length; i++) {
          if(productID == productArray[i].productID){
            productDetail.innerHTML = '<div id="infomation"><button class="close_detail" onclick="closeProductDetail()" type="button">&times;</button><div class="left_info"><img class="img_in_info" src="'+productArray[i].img+'" alt=""></div><div class="right_info"><h2 class="product_name">'+productArray[i].name+'</h2><h4 class="product_price">Giá : '+currency(productArray[i].price)+'</h4><h4>Số lượng : </h4><button class="quantity_crease" onclick="quantitydown()">-</button><input  id="quantity" type="text" value="1"><button class="quantity_decrease" onclick="quantityup()">+</button><button id="add_cart" onclick="cartAdd('+productArray[i].productID+'),closeProductDetail()">Thêm vào giỏ hàng</button></div></div>'
             break;
          }
    }
    // productDetail.innerHTML = '<div id="infomation"><button class="close_detail" onclick="closeProductDetail()" type="button">&times;</button><div class="left_info"><img class="img_in_info" src="'+productArray[i].img+'" alt=""></div><div class="right_info"><h2 class="product_name">'+productArray[i].name+'</h2><h4 class="product_price">Giá : '+currency(productArray[i].price)+'</h4><h4>Số lượng : </h4><button class="quantity_crease" onclick="quantitydown()">-</button><input  id="quantity" type="text" value="1"><button class="quantity_decrease" onclick="quantityup()">+</button><button id="add_cart" onclick="cartAdd('+productArray[i].productID+'),closeProductDetail()">Thêm vào giỏ hàng</button></div></div>'
}
function closeProductDetail() {
     document.getElementById('product_detail').style.display = 'none'
     document.getElementById('infomation').style.display = 'none';
}
function quantitydown() {
    if(quantity.value != 1) {
          quantity.value--;
    }
}
function quantityup() {
    quantity.value++;
}
function currency(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}

// function createSlideShowArray() {
//     if(localStorage.getItem('slideshow') == null) {
//           let slideShowArray = [
//                 {slideShowID : 0, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/UZjHB4GICYEIQIyhKajpuhHIieB6Wg9HyFg4nFy9.gif"},
//                 {slideShowID : 1, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/mKNNluCvJOMKjIDUzdJBDq0LKuI939qK9zJC6atr.gif"},
//                 {slideShowID : 2, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/9BJItFvQLCmOZaR3tYCj2hcuBpuMhlwgZ2a65R9N.gif"},
//                 {slideShowID : 3, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/ol989p3XImck4WQpKLC8YBbl11jaZ0x5OOz8U067.gif"},
//                 {slideShowID : 4, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/2PJHQer21QRAADNGJwonlV41gmCUUxTzIFKOv5ZV.gif"},
//           ];
//           localStorage.setItem('slideshow',JSON.stringify(slideShowArray));
//     } 
// }
// var index = 0;
// var countDown;
// moveSlideShow();

// function moveSlideShow() {
//     let slideShow = document.getElementById('slideShow-img');
//     let slideShowArray = JSON.parse(localStorage.getItem('slideshow'));
    
//     let numSlides = slideShowArray.length;
//     if(index >= numSlides) {
//           index = 0;
//     } else if(index < 0) {
//           index = numSlides - 1;
//     }
//     slideShow.style.display = 'block';
//     slideShow.innerHTML = '<img src="'+slideShowArray[index].img+'" alt="">';
//     countDown = setTimeout(function() {
//           moveSlideShowAfter();
//     },2000)
// }
// function moveSlideShowBefore() {
//     clearTimeout(countDown);
//     index--;
//     moveSlideShow(index);
// }
// function moveSlideShowAfter() {
//     clearTimeout(countDown);
//     index++;
//     moveSlideShow(index);
// }

function divideProductPage(keyName) {
    let pageOfProduct = [];
    let productArray = JSON.parse(localStorage.getItem(keyName));
    let pageOfProductTemp = [];
    let dem = 0;
    for(let i = 0; i < productArray.length; i++) {
          pageOfProductTemp.push(productArray[i]);
          dem++;
          if(dem == 12) {
                pageOfProduct.push(pageOfProductTemp);
                pageOfProductTemp = [];
                dem = 0;
          }
    }
    pageOfProduct.push(pageOfProductTemp); //? thêm những sản phẩm còn dư khi tạo trang (VD: 26sp : 12 = 2 dư 2)
    /* console.log(pageOfProduct); */
    return pageOfProduct;
}
var clickLogin = document.getElementById("button_login");
var loginModal = document.querySelector('.user_modal');
var closeLogin = document.querySelector('.close_login');
var clickSignUp = document.getElementById('sign_up_button');
var signUpModal = document.getElementById('sign_up');
var clickCloseSignUp = document.querySelector('.close_sign_up');
var clickProduct = document.querySelector('.card');
var productInfo = document.querySelector('.product_info_modal');
var clickCloseProductInfo = document.querySelector('.close_info');

function showlogin() {
        clickLogin.onclick = function() {
            loginModal.style.display = 'block';
        };
}
function closeByLogin() {
        closeLogin.onclick = function() {
            loginModal.style.display = 'none';
        };
}

function showSignUp() {
        clickSignUp.onclick = function() {
            signUpModal.style.display = 'block';
        };
        closeByLogin();
}

function closeSignUp() {
        clickCloseSignUp.onclick = function() {
            signUpModal.style.display = 'none';
        };
}
function buttonProductInfo() {
        clickProduct.onclick = function() {
            productInfo.style.display = 'block';
        };
}
function closeProductInfo(){
        clickCloseProductInfo.onclick = function() {
            productInfo.style.display = 'none';
        };
}
function createProduct() {
    if (localStorage.getItem('card') == null){
        var productArray = [
            {productID:100,img:'https://cdn.tgdd.vn/Products/Images/7264/199605/g-shock-ga-700-1adr-den-up-2-org.jpg',name:'G-SHOCK 52.5 mm Nam GA-700-1ADR',price:2114000,brand:'G-SHOCK'},
            {productID:101,img:'https://cdn.tgdd.vn/Products/Images/7264/199609/g-shock-ga-800-1adr-den-2-3-org.jpg',name:'G-SHOCK 46 mm Nam GA-800-1ADR',price:990000,brand:'G-SHOCK'},
            {productID:102,img:'https://cdn.tgdd.vn/Products/Images/7264/315213/g-shock-ga-2100gb-1adr-nam-2-1.jpg',name:'G-Shock 45.4 mm Nam GA-2100GB-1ADR ',price:3533000,brand:'G-SHOCK'},
            {productID:103,img:'https://cdn.tgdd.vn/Products/Images/7264/315214/g-shock-ga-2100sb-1adr-nam-2-1.jpg',name:'G-Shock 45.4 mm Nam GA-2100SB-1ADR ',price:3316000,brand:'G-SHOCK'},
            {productID:104,img:'https://cdn.tgdd.vn/Products/Images/7264/311127/g-shock-dw-5600ff-8-nam-1-1.jpg',name:'G-Shock Forgotten Future 42.8 mm Nam DW-5600FF-8DR',price:2764000,brand:'G-SHOCK'},
            {productID:105,img:'https://cdn.tgdd.vn/Products/Images/7264/311126/g-shock-ga-700ff-8a-nam-1-1.jpg ',name:'G-Shock Forgotten Future 53.4 mm Nam GA-700FF-8ADR  ',price:3178000,brand:'G-SHOCK'},
            {productID:106,img:'https://cdn.tgdd.vn/Products/Images/7264/311125/g-shock-ga-2200ff-8adr-nam-1-1.jpg',name:'G-Shock Forgotten Future 47.1 mm Nam GA-2200FF-8ADR',price:4224000,brand:'G-SHOCK'},
            {productID:107,img:'https://cdn.tgdd.vn/Products/Images/7264/305813/g-shock-gm-5600-1dr-nam-1-1.jpg',name:'G-SHOCK 43.2 mm Nam GM-5600-1DR',price:4352000,brand:'G-SHOCK'},
            {productID:108,img:'https://cdn.tgdd.vn/Products/Images/7264/302231/g-shock-gma-s2100ba-4adr-nu-1.jpg',name:'G-Shock 42.9 mm Nữ GMA-S2100BA-4ADR',price:2902000,brand:'G-SHOCK'},
            {productID:109,img:'https://cdn.tgdd.vn/Products/Images/7264/289339/g-shock-ga-2100-1a1dr-nam-1-2.jpg',name:'G-Shock 45.4 mm Nam GA-2100-1A1DR',price:2902000,brand:'G-SHOCK'},
            {productID:110,img:'https://cdn.tgdd.vn/Products/Images/7264/286412/g-shock-gm-2100-1adr-nam-2-1.jpg',name:'G-SHOCK 45.4 mm Nam GM-2100-1ADR ',price:5803000,brand:'G-SHOCK'},
            {productID:111,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:112,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m126603-0001.png?impolicy=v7&imwidth=1600',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:113,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:114,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:115,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:116,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:117,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:118,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:119,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:120,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:121,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:122,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:123,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},

        ]
        localStorage.setItem('card',JSON.stringify(productArray));
    }
}

var content = document.getElementById('product');
var PageProduct = document.getElementById('page_product')
function scrollToTop() {
    window.scroll({
          top: 230,
          left: 0,
          behavior: 'smooth' // Điều này làm cho cuộn mượt hơn
        });
}
function showListPageProductStranger(){
    let numberOfPageProduct = divideProductPage('card').length; //? = 4
    let PageProductTemp = '';
    for(let i = 0; i < numberOfPageProduct; i++) {
          PageProductTemp += '<button class="page_number" onclick="showProductStranger('+i+'),scrollToTop()">'+(i+1)+'</button>'
    }
    PageProduct.innerHTML = PageProductTemp;
}
function showProductStranger(i) {
    showListPageProductStranger();
    pageOfProduct = divideProductPage('card');
    let contentTemp = '';
    for(let j = 0; j < pageOfProduct[i].length; j++) {
        // onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')" sau id="card"
          contentTemp += '<div class="card" onclick="productDetail('+pageOfProduct[i][j].productId+')" ><img src="'+pageOfProduct[i][j].img+'" alt="" class="card_img"><p class="card_name">'+pageOfProduct[i][j].name+'</p><p class="card_price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
    }
    content.innerHTML = contentTemp;
}
function quantitydown() {
    if(quantity.value != 1) {
          quantity.value--;
    }
}
function quantityup() {
    quantity.value++;
}
function productDetail(productId) {
    var productDetail = document.getElementById('product_info');
    productInfo.style.display = 'none';
    productDetail.style.display = 'none';
    let productArray = JSON.parse(localStorage.getItem('card'));
    var i;
    for (i = 0; i < productArray.length; i++) {
          if(productId == productArray[i].productId) break;
    }
    productDetail.innerHTML = '<button type="button" class="close_info">&times;</button><img src="'+productArray[i].img+'" alt=""><div class="right_info"><h2 class="product_name">'+productArray[i].name+'</h2><h4 class="product_price">Giá : '+currency(productArray[i].price)+'</h4><h4>Số lượng : </h4><button class="quantity_crease" onclick="quantitydown()">-</button><input id="quantity" type="text" value="1"><button class="quantity_decrease" onclick="quantityup()">+</button><p><button id="add_cart" onclick="cartAdd('+productArray[i].productId+'),closeProductDetail()">Thêm vào giỏ hàng</button></p></div>'
    
    productInfo.style.display = 'block';
    productDetail.style.display = 'block';
}
function closeProductDetail(){
    var productDetail = document.getElementById('product-detail');
    productDetail.style.display = 'none';
    productInfo.style.display = 'none';
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
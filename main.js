var clickLogin = document.getElementById("button_login");
var userModal= document.getElementById('user_modal');
var loginModal = document.getElementById('login_modal');
var clickSignUp = document.getElementById('sign_up_button');
var signUpModal = document.getElementById('sign_up_modal');
var clickProduct = document.querySelector('.card');
var clickCloseProductInfo = document.querySelector('.close_detail');

function showlogin() {
            userModal.style.display = 'block';
}
function closeUser() {
            userModal.style.display = 'none';
}
function showSignUp() {
          document.getElementById('login_modal').style.display = 'none';
          signUpModal.style.display = 'block';
}
// function closeProductInfo(){
//             productInfo.style.display = 'none';
// }
function createProduct() {
    if (localStorage.getItem('card') == null){
        var productArray = [
            {productID:100,img:'https://cdn.tgdd.vn/Products/Images/7264/199605/g-shock-ga-700-1adr-den-up-2-org.jpg',name:'Nam GA-700-1ADR',price:2114000,brand:'G-SHOCK'},
            {productID:101,img:'https://cdn.tgdd.vn/Products/Images/7264/199609/g-shock-ga-800-1adr-den-2-3-org.jpg',name:'Nam GA-800-1ADR',price:990000,brand:'G-SHOCK'},
            {productID:102,img:'https://cdn.tgdd.vn/Products/Images/7264/315213/g-shock-ga-2100gb-1adr-nam-2-1.jpg',name:'Nam GA-2100GB-1ADR ',price:3533000,brand:'G-SHOCK'},
            {productID:103,img:'https://cdn.tgdd.vn/Products/Images/7264/315214/g-shock-ga-2100sb-1adr-nam-2-1.jpg',name:'Nam GA-2100SB-1ADR ',price:3316000,brand:'G-SHOCK'},
            {productID:104,img:'https://cdn.tgdd.vn/Products/Images/7264/311127/g-shock-dw-5600ff-8-nam-1-1.jpg',name:'Forgotten Future Nam DW-5600FF-8DR',price:2764000,brand:'G-SHOCK'},
            {productID:105,img:'https://cdn.tgdd.vn/Products/Images/7264/311126/g-shock-ga-700ff-8a-nam-1-1.jpg ',name:'Forgotten Future Nam GA-700FF-8ADR  ',price:3178000,brand:'G-SHOCK'},
            {productID:106,img:'https://cdn.tgdd.vn/Products/Images/7264/311125/g-shock-ga-2200ff-8adr-nam-1-1.jpg',name:'Forgotten Future  Nam GA-2200FF-8ADR',price:4224000,brand:'G-SHOCK'},
            {productID:107,img:'https://cdn.tgdd.vn/Products/Images/7264/305813/g-shock-gm-5600-1dr-nam-1-1.jpg',name:'Nam GM-5600-1DR',price:4352000,brand:'G-SHOCK'},
            {productID:108,img:'https://cdn.tgdd.vn/Products/Images/7264/302231/g-shock-gma-s2100ba-4adr-nu-1.jpg',name:'Nữ GMA-S2100BA-4ADR',price:2902000,brand:'G-SHOCK'},
            {productID:109,img:'https://cdn.tgdd.vn/Products/Images/7264/289339/g-shock-ga-2100-1a1dr-nam-1-2.jpg',name:'Nam GA-2100-1A1DR',price:2902000,brand:'G-SHOCK'},
            {productID:110,img:'https://cdn.tgdd.vn/Products/Images/7264/286412/g-shock-gm-2100-1adr-nam-2-1.jpg',name:'GNam GM-2100-1ADR ',price:5803000,brand:'G-SHOCK'},
            {productID:111,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'Nam GW-A1100R-4ADR ',price:16680000,brand:'G-SHOCK'},
            {productID:112,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m124273-0001.png?impolicy=v7&imwidth=1600',name:'Explorer 36',price:292488000,brand:'ROLEX'},
            {productID:113,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m126506-0001.png?impolicy=v7&imwidth=1600',name:'Cosmograph Daytona',price:1937733000,brand:'ROLEX'},
            {productID:114,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m126713grnr-0001.png?impolicy=v7&imwidth=1600',name:'GMT-Master II',price:410005500,brand:'ROLEX'},
            {productID:115,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m336239-0002.png?impolicy=v7&imwidth=1600',name:'Sky-Dweller',price:1062880500,brand:'ROLEX'},
            {productID:116,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m228236-0012.png?impolicy=v7&imwidth=1600',name:'Day-Date 40',price:1577346000,brand:'ROLEX'},
            {productID:117,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m126234-0051.png?impolicy=v7&imwidth=1600',name:'Datejust 36',price:221977500,brand:'ROLEX'},
            {productID:118,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m126900-0001.png?impolicy=v7&imwidth=1600',name:'Air-King',price:185416500,brand:'ROLEX'},
            {productID:119,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m136660-0003.png?impolicy=v7&imwidth=1600',name:'Rolex Deapsea',price:360387000,brand:'ROLEX'},
            {productID:120,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m279384rbr-0004.png?impolicy=v7&imwidth=1600',name:'Lady-Datejust',price:407394000,brand:'ROLEX'},
            {productID:121,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m128348rbr-0049.png?impolicy=v7&imwidth=1600',name:'Day-Date 36',price:1462400000,brand:'ROLEX'},
            {productID:122,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m277200-0010.png?impolicy=v7&imwidth=1600',name:'Oyster Perpetual 31',price:141021000,brand:'ROLEX'},
            {productID:123,img:'https://content.rolex.com/v7/dam/2023-06/upright-c/m278343rbr-0016.png?impolicy=v7&imwidth=1600',name:'Datejust 31',price:396498000,brand:'ROLEX'},
            {productID:124,img:'https://www.vacheron-constantin.com/dam/rcq/vac/16/19/63/0/1619630.png.transform.vacprodcard.png',name:'RETROGRADE DAY-DATE',price:1280000000,brand:'VACHERON'},
            {productID:125,img:'https://www.vacheron-constantin.com/dam/rcq/vac/21/33/60/8/2133608.png.transform.vacprodcard.png',name:'AMERICAN 1921',price:865000000,brand:'VACHERON'},
            {productID:126,img:'https://www.vacheron-constantin.com/dam/rcq/vac/16/15/83/5/1615835.png.transform.vacprodcard.png',name:'TRIPLE CALENDRIER 1942',price:625000000,brand:'VACHERON'},
            {productID:127,img:'https://www.vacheron-constantin.com/dam/rcq/vac/20/39/25/5/2039255.png.transform.vacprodcard.png',name:'OVERSEAS SELF-WINDING',price:1570000000,brand:'VACHERON'},
            {productID:128,img:'https://www.vacheron-constantin.com/dam/rcq/vac/20/52/87/1/2052871.png.transform.vacprodcard.png',name:'OVERSEAS CHRONOGRAPH',price:925000000,brand:'VACHERON'},
            {productID:129,img:'https://www.vacheron-constantin.com/dam/rcq/vac/16/51/57/6/1651576.png.transform.vacprodcard.png',name:'SELF-WINDING',price:329000000,brand:'VACHERON'},
            {productID:130,img:'https://www.vacheron-constantin.com/dam/rcq/vac/16/23/85/0/1623850.png.transform.vacprodcard.png',name:'DUAL TIME',price:1260000000,brand:'VACHERON'},
            {productID:131,img:'https://www.vacheron-constantin.com/dam/rcq/vac/16/21/86/1/1621861.png.transform.vacprodcard.png',name:'OVERSEAS SELF-WINDING',price:1140000000,brand:'VACHERON'},
            {productID:132,img:'https://www.vacheron-constantin.com/dam/rcq/vac/S2/r-/SF/ZI/0U/CZ/PZ/CY/V3/0M/pA/S2r-SFZI0UCZPZCYV30MpA.png.transform.vacprodcard.png',name:'RETROGRADE DAY-DATE',price:1600000000,brand:'VACHERON'},
            {productID:133,img:'https://www.vacheron-constantin.com/dam/rcq/vac/19/64/96/1/1964961.png.transform.vacprodcard.png',name:'QUARTZ',price:850000000,brand:'VACHERON'},
            {productID:134,img:'https://www.vacheron-constantin.com/dam/rcq/vac/r3/w5/I7/7P/IE/a0/Ki/Dw/B-/Hh/6Q/r3w5I77PIEa0KiDwB-Hh6Q.png.transform.vacprodcard.png',name:'MOON PHASE',price:2120000000,brand:'VACHERON'},
            {productID:135,img:'https://www.vacheron-constantin.com/dam/rcq/vac/23/72/46/4/2372464.png.transform.vacprodcard.png',name:'DUAL TIME',price:800000000,brand:'VACHERON'},

        ]
        localStorage.setItem('card',JSON.stringify(productArray));
    }
}

function brandCategory() {

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

function productDetail(productId) {
    var productDetail = document.getElementById('product_detail');
    productDetail.style.display = 'block';
    let productArray = JSON.parse(localStorage.getItem('card'));
    var i;
    for (i = 0; i < productArray.length; i++) {
          if(productId == productArray[i].productId) break;
    }
    productDetail.innerHTML = '<div id="infomation"><button class="close_detail" onclick="closeProductDetail()" type="button">&times;</button><div class="left_info"><img class="img_in_info" src="'+productArray[i].img+'" alt=""></div><div class="right_info"><h2 class="product_name">'+productArray[i].name+'</h2><h4 class="product_price">Giá : '+currency(productArray[i].price)+'</h4><h4>Số lượng : </h4><button class="quantity_crease" onclick="quantitydown()">-</button><input  id="quantity" type="text" value="1"><button class="quantity_decrease" onclick="quantityup()">+</button><button id="add_cart" onclick="cartAdd('+productArray[i].productId+'),closeProductDetail()">Thêm vào giỏ hàng</button></div></div>'
}
function closeProductDetail() {
     document.getElementById('product_detail').style.display = 'none'
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
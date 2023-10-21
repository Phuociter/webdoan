var clickLogin = document.getElementById("button_login");
var loginModal = document.querySelector('.user_modal');
var closeLogin = document.querySelector('.close_login');
var clickSignUp = document.getElementById('sign_up_button');
var signUpModal = document.getElementById('sign_up');
var clickCloseSignUp = document.querySelector('.close_sign_up');
var signUpModal = document.getElementById('sign_up');
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
function creatProduct() {
    if (localStorage.getItem('card') == null){
        var productArray = [
            {productID:100,img:'https://cdn.tgdd.vn/Products/Images/7264/199605/g-shock-ga-700-1adr-den-up-2-org.jpg',name:'G-SHOCK 52.5 mm Nam GA-700-1ADR',price:2114000},
            {productID:101,img:'https://cdn.tgdd.vn/Products/Images/7264/199609/g-shock-ga-800-1adr-den-2-3-org.jpg',name:'G-SHOCK 46 mm Nam GA-800-1ADR',price:990000},
            {productID:102,img:'https://cdn.tgdd.vn/Products/Images/7264/315213/g-shock-ga-2100gb-1adr-nam-2-1.jpg',name:'G-Shock 45.4 mm Nam GA-2100GB-1ADR ',price:3533000},
            {productID:103,img:'https://cdn.tgdd.vn/Products/Images/7264/315214/g-shock-ga-2100sb-1adr-nam-2-1.jpg',name:'G-Shock 45.4 mm Nam GA-2100SB-1ADR ',price:3316000},
            {productID:104,img:'https://cdn.tgdd.vn/Products/Images/7264/311127/g-shock-dw-5600ff-8-nam-1-1.jpg',name:'G-Shock Forgotten Future 42.8 mm Nam DW-5600FF-8DR',price:2764000},
            {productID:105,img:'https://cdn.tgdd.vn/Products/Images/7264/311126/g-shock-ga-700ff-8a-nam-1-1.jpg ',name:'G-Shock Forgotten Future 53.4 mm Nam GA-700FF-8ADR  ',price:3178000},
            {productID:106,img:'https://cdn.tgdd.vn/Products/Images/7264/311125/g-shock-ga-2200ff-8adr-nam-1-1.jpg',name:'G-Shock Forgotten Future 47.1 mm Nam GA-2200FF-8ADR',price:4224000},
            {productID:107,img:'https://cdn.tgdd.vn/Products/Images/7264/305813/g-shock-gm-5600-1dr-nam-1-1.jpg',name:'G-SHOCK 43.2 mm Nam GM-5600-1DR',price:4352000},
            {productID:108,img:'https://cdn.tgdd.vn/Products/Images/7264/302231/g-shock-gma-s2100ba-4adr-nu-1.jpg',name:'G-Shock 42.9 mm Nữ GMA-S2100BA-4ADR',price:2902000},
            {productID:109,img:'https://cdn.tgdd.vn/Products/Images/7264/289339/g-shock-ga-2100-1a1dr-nam-1-2.jpg',name:'G-Shock 45.4 mm Nam GA-2100-1A1DR',price:2902000},
            {productID:110,img:'https://cdn.tgdd.vn/Products/Images/7264/286412/g-shock-gm-2100-1adr-nam-2-1.jpg',name:'G-SHOCK 45.4 mm Nam GM-2100-1ADR ',price:5803000},
            {productID:111,img:'https://cdn.tgdd.vn/Products/Images/7264/283575/g-shock-gw-a1100r-4adr-nam-2-1.jpg',name:'G-SHOCK 53.8 mm Nam GW-A1100R-4ADR ',price:16680000},
        ]
        localStorage.setItem('card',JSON.stringify(productArray));
    }
}
function init() {
        showlogin();
        closeByLogin();

        showSignUp();
        closeSignUp();

        buttonProductInfo();
        closeProductInfo();
}

window.onload = init;
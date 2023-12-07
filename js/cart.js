//Biến giỏ hàng chứa các sản phẩm của khách hàng
var cart = [];
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');
//Kiểm tra người dùng đã đăng nhập chưa
var userLogged;
function checkLoggedUser(){
    userLogged = JSON.parse(localStorage.getItem('userLogged'));
    if (userLogged)
        return true;
}
//Click vào icon giỏ hàng để hiển thị giỏ hàng
let iconCart = document.getElementById('cart-icon');
iconCart.addEventListener('click', function(){
    document.getElementById('showCart').style.display = 'grid';
})

document.getElementById('closeCart').addEventListener('click', function(){
    document.getElementById('showCart').style.display = 'none';
})

function addCart(id){
    if (checkLoggedUser()){
        let positionThisProductInCart = cart.findIndex((value) => value.product_id == id);
        if (cart.length <= 0){
            cart = [{
                product_id: id,
                quanity: 1,
            }]
        }else if(positionThisProductInCart < 0){
            cart.push({
                product_id: id,
                quanity: 1
            });
        } else{
            cart[positionThisProductInCart].quanity += 1;
        }
        addCartToHTML();
        addCartToLocalStogare();
    } else{
        alert("BẠN CẦN ĐĂNG NHẬP ĐỂ MUA HÀNG !!!");
        renderLoginForm();
    }
}

const addCartToLocalStogare = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addCartToHTML(){
    listCartHTML.innerHTML = '';
    let totalQuanity = 0;
    if (cart.length > 0){
        cart.forEach(cart => {
            totalQuanity += cart.quanity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_id;
            let positionProduct = cars.findIndex((value) => value.id == cart.product_id);
            let info = cars[positionProduct];
            newCart.innerHTML = 
            `
                        <div class="img">
                            <img src="${info.mainImg}" alt="">
                        </div>
                        <div class="name">
                            ${info.name}
                        </div>
                        <div class="totalPrice">
                            ${(info.price * cart.quanity).toLocaleString('en-US')}
                        </div>
                        <div class="quanity">
                            <span id="minus" class="minus"><</span>
                            <span><p>${cart.quanity}</p></span>
                            <span id="plus" class="plus">></span>
                        </div>
            `;
            listCartHTML.appendChild(newCart);
        })
    }
    iconCartSpan.innerText = totalQuanity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if (positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuanity(product_id, type);
    }
});

const changeQuanity = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0){
        switch(type){
            case 'plus':
                cart[positionItemInCart].quanity += 1;
                break;

            default:
                let valueChange = cart[positionItemInCart].quanity - 1;
                if (valueChange > 0){
                    cart[positionItemInCart].quanity = cart[positionItemInCart].quanity - 1 ;
                } else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }   
    }
    addCartToLocalStogare();
    addCartToHTML();
}


function themVaoGioHang(){
    alert("Thêm vào giỏ hàng thành công !!!");
}

function datHang(){
    alert("ĐẶT HÀNG THÀNH CÔNG !!!");
    document.getElementById('showCart').style.display = 'none';
}
const imgContainer = document.querySelector(".aspect-ratio-169");
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const dotItem = document.querySelectorAll(".dot");
let index = 0;
let imgNumber = imgPosition.length;

imgPosition.forEach(function(image, i){
    image.style.left = i * 100 + "%";
    dotItem[i].addEventListener("click", function(){
        Slider(i);
    });
});

function imgSlide(){
    index++;
    if (index >= imgNumber){
        index = 0;
    }
    Slider(index);
}

function Slider(index){
    imgContainer.style.left = "-" + index * 100 + "%";
    const dotActive = document.querySelector('.active');
    dotActive.classList.remove("active");
    dotItem[index].classList.add("active");
}

setInterval(imgSlide, 5000);

document.addEventListener("scroll",function(){
    var header = document.getElementById("myHeader");
    if (window.scrollY > 100){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
});
//Hiện Login Form
function renderLoginForm(){
    document.getElementById("login-form").style.display = 'block';
    document.getElementById("myHeader").style.display = 'none';
    document.getElementById('trangchu').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('category').style.display = 'none';
}
//Lấy dữ liệu Đăng Ký
function getSignUpValue(){
        alert("Đăng ký thành công !!!");
        document.getElementById("signUpForm").style.display = 'none';
        document.getElementById("loginForm").style.display = 'block';
}
//Thay đổi giá trị flex của Others
const others = document.getElementById("others");

function updateOthers(){
    others.style.flex = 1.25;
}

document.getElementById('logout').addEventListener('click', function(){
    location.reload();
    document.getElementById("customerName1").style.display = 'flex';
    document.getElementById("customerName2").style.display = 'none';
})

//Lấy dữ liệu Đăng Nhập
function getLoginValue(){
        document.getElementById("customerName1").style.display = 'none';
        document.getElementById("customerName2").style.display = 'inline-block';
        document.getElementById("hello").innerHTML = 'Xin chào khachhang1'  
        updateOthers();
        alert("Đăng nhập thành công !!!");
        document.getElementById("login-form").style.display = 'none';
        document.getElementById("myHeader").style.display = 'flex';
        document.getElementById('trangchu').style.display = 'block';
        document.getElementById('footer').style.display = 'block';
}
//Hiển thị chưa cập nhật
function chuaCapNhat(){
    alert("Chưa có thông tin");
}
//Chức năng tắt trang chi tiết sản phẩm
function closeProductInfo1(){
    document.getElementById('productDetail1').style.display = 'none';
}

function closeProductInfo2(){
    document.getElementById('productDetail2').style.display = 'none';
}

function closeProductInfo3(){
    document.getElementById('productDetail3').style.display = 'none';
}

function closeProductInfo4(){
    document.getElementById('productDetail4').style.display = 'none';
}

function closeProductInfo5(){
    document.getElementById('productDetail5').style.display = 'none';
}

function closeProductInfo6(){
    document.getElementById('productDetail6').style.display = 'none';
}

function closeProductInfo7(){
    document.getElementById('productDetail7').style.display = 'none';
}

function closeProductInfo8(){
    document.getElementById('productDetail8').style.display = 'none';
}

function closeProductInfo9(){
    document.getElementById('productDetail9').style.display = 'none';
}

function closeProductInfo10(){
    document.getElementById('productDetail10').style.display = 'none';
}

function closeProductInfo11(){
    document.getElementById('productDetail11').style.display = 'none';
}

function closeProductInfo12(){
    document.getElementById('productDetail12').style.display = 'none';
}

function closeProductInfo13(){
    document.getElementById('productDetail13').style.display = 'none';
}

function closeProductInfo14(){
    document.getElementById('productDetail14').style.display = 'none';
}

function closeProductInfo15(){
    document.getElementById('productDetail15').style.display = 'none';
}

function closeProductInfo16(){
    document.getElementById('productDetail16').style.display = 'none';
}

function closeProductInfo17(){
    document.getElementById('productDetail17').style.display = 'none';
}

//Nút tăng giảm số lượng
    let amountElement = document.getElementById('amount');
    let amount = amountElement.value;

    var render = (amount) =>{
        amountElement.value = amount;
    }
//HandlePlus
    let handlePlus = () =>{
        amount++;
        render(amount);
    }

//HandleMinus
    let handleMinus = () =>{
        if (amount > 1){
            amount--;
        }
        render(amount);
    }

    amountElement.addEventListener('input', () => {
        amount = amountElement.value;
        amount = parseInt(amount);
        amount = (isNan(amount) || amount == 0)? 1:amount;
        render(amount);
    });
//Hiện chi tiết sản phẩm
function showProductInfo(id){
    render(0);
    document.getElementById('productDetail').style.display = 'flex';
    var cars = JSON.parse(localStorage.getItem("listCars"));    
    for (let i = 0; i < cars.length; i++){
        if (cars[i].id === id){
            document.getElementById('productImg').src = cars[i].mainImg;
            document.getElementById('productName').innerHTML = cars[i].name;
            document.getElementById('productType').innerHTML = 'Loại xe: ' + cars[i].type;
            document.getElementById('productBrand').innerHTML = 'Hãng xe: ' + cars[i].brand;
            document.getElementById('productPrice').innerHTML = 'Giá: ' + cars[i].price.toLocaleString('en-US');
            document.getElementById('front-design').innerHTML = cars[i].frontDesign;
            document.getElementById('imgFront').src = cars[i].frontImg;
            document.getElementById('body-design').innerHTML = cars[i].bodyDesign;
            document.getElementById('imgBody').src = cars[i].bodyImg;
            document.getElementById('tail-design').innerHTML = cars[i].tailDesign;
            document.getElementById('imgTail').src = cars[i].tailImg;
            document.getElementById('productAddToCart').addEventListener('click', (event) => {
                addCart(cars[i].id)
            })
        }
    }
}

function showProductInfo1(){
    render(0);
    document.getElementById('productDetail1').style.display = 'flex';
}

function showProductInfo2(){
    render(0);
    document.getElementById('productDetail2').style.display = 'flex';
}

function showProductInfo3(){
    render(0);
    document.getElementById('productDetail3').style.display = 'flex';
}

function showProductInfo4(){
    render(0);
    document.getElementById('productDetail4').style.display = 'flex';
}

function showProductInfo5(){
    render(0);
    document.getElementById('productDetail5').style.display = 'flex';
}

function showProductInfo6(){
    render(0);
    document.getElementById('productDetail6').style.display = 'flex';
}

function showProductInfo7(){
    render(0);
    document.getElementById('productDetail7').style.display = 'flex';
}

function showProductInfo8(){
    render(0);
    document.getElementById('productDetail8').style.display = 'flex';
}

function showProductInfo9(){
    render(0);
    document.getElementById('productDetail9').style.display = 'flex';
}

function showProductInfo10(){
    render(0);
    document.getElementById('productDetail10').style.display = 'flex';
}

function showProductInfo11(){
    render(0);
    document.getElementById('productDetail11').style.display = 'flex';
}

function showProductInfo12(){
    render(0);
    document.getElementById('productDetail12').style.display = 'flex';
}

function showProductInfo13(){
    render(0);
    document.getElementById('productDetail13').style.display = 'flex';
}

function showProductInfo14(){
    render(0);
    document.getElementById('productDetail14').style.display = 'flex';
}

function showProductInfo15(){
    render(0);
    document.getElementById('productDetail15').style.display = 'flex';
}

function showProductInfo16(){
    render(0);
    document.getElementById('productDetail16').style.display = 'flex';
}

function showProductInfo17(){
    render(0);
    document.getElementById('productDetail17').style.display = 'flex';
}

function vuive(){
}

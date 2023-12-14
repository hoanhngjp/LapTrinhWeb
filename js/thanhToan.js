function closeThanhToan(){
    document.getElementById('thanhToanContainer').style.display = 'none';
}

function quayLai1(){
    document.getElementById('thanhToanContainer').style.display = 'none';
}

function kiemTraThongTinDatHang(){
    document.getElementById('chiTiet').style.display = 'none';
    document.getElementById('datHang').style.display = 'block';
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function quayLai2(){
    document.getElementById('chiTiet').style.display = 'block';
    document.getElementById('datHang').style.display = 'none';
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function datHang1(){
    document.getElementById('xacNhanDatHangContainer').style.display = 'flex';
}

function quayLai3(){
    document.getElementById('xacNhanDatHangContainer').style.display = 'none';
}

function datHang2(){
    document.getElementById('xacNhanDatHangContainer').style.display = 'none';
    document.getElementById('thanhToanContainer').style.display = 'none';
    alert("Cảm ơn bạn đã đặt hàng !!!");
    let iconCartSpan = document.querySelector('.icon-cart span');
    let listCartHTML = document.querySelector('.listCart');
    iconCartSpan.innerText = `0`;
    listCartHTML.innerHTML = '';
}

function chooseAddress(){
    var addressInput = document.getElementById("address");
    address = "439 An Dương Vương, Phường 5, Quận 5, Thành phố Hồ Chí Minh"
    if (document.getElementById('old').checked){
        addressInput.value = address;
        addressInput.style.display = 'flex';
    }
    if (document.getElementById('new').checked){
        addressInput.style.display = 'flex';
        addressInput.value = "";
        addressInput.placeholder = "Nhập địa chỉ mới";
    }
}
function taoDoiTuongSanPham(hinhAnh, ten, giaGoc, id) {
    var sanPham = new Object();
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    if (id != null) {
        sanPham.id = id;
        
    } else {
        sanPham.id = TaoId();
    }
    sanPham.toJson = function(){
        var json = JSON.stringify(this);
        return json;
    }

    sanPham.fromJSON = function(json){
        var sanPhamDayDu = new Object();
        var doiTuong = JSON.parse(json);
        var sanPhamDayDu = taoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.id);
        return sanPhamDayDu;
    }
    return sanPham;
}

function chuyenDanhSachSanPhamThanhHTML(danhSachSanPham){
    /* bước 1: tạo vòng lặp duyệt tất cả phần tử trong mảng */
    /* bước 2: tạo ra đoạn html cho mỗi phần tử */
    /* bước 3: cộng chuỗi các đoạn html để tạo thành 1 đoạn html lớn bằng các html nhỏ*/
    var HTMLTong = '';
    for(var i = 0 ; i <danhSachSanPham.length ; i ++){
        var sanPham = danhSachSanPham[i];
        var HTML = chuyenDoiTuongSanPhamThanhHTML2(sanPham);
        HTMLTong =HTMLTong + HTML;
    }
    return HTMLTong

}

function chuyenDoiTuongSanPhamThanhHTML2(sanPham){
    var sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.id);
    var HTML = '';
    HTML = HTML + "<div class='sanpham'>";
    HTML = HTML + "     <div class='hinhanh'>";
    HTML = HTML + "         <img src='" + sanPham.hinhAnh + "'>";
    HTML = HTML + "     </div>";
    HTML = HTML + '<button onclick = "onClickDuaVaoGioHang(\''+ sanPham.id +'\')" class="btn"></button>';   
    HTML = HTML + "     <h1 class='tensanpham'>"+sanPham.ten +"</h1>";      
    HTML = HTML + "     <p class='giagocsanpham'>"+sanPham.giaGoc+"đ"+"</p>";    
    HTML = HTML + "</div>"
    
    return HTML;
}
function laySanPhamTheoID(idSanPham){
    var sanPham = new Object();
    var danhSachSanPham = layDanhSachSanPhamTuLocalStorage();
    for(var i = 0; i < danhSachSanPham.length; i++){
        var sanPhamHienTai = danhSachSanPham[i];
        if(sanPhamHienTai.id == idSanPham){
            sanPham = sanPhamHienTai;
        }
    }
    sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.id);
    return sanPham;
}
function layDanhSachSanPhamTuLocalStorage(){
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham2');

    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}

function TaoDoiTuongItemGioHang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    console.log(itemGioHang);
    return itemGioHang;
}

function layGioHangTuLocalStorage() {
    var danhSachItemGioHang = new Array();
    var jsonDanhSachIteamGioHang = localStorage.getItem('gioHang');
    if (jsonDanhSachIteamGioHang != null)
        danhSachItemGioHang = JSON.parse(jsonDanhSachIteamGioHang);

    return danhSachItemGioHang;
}
function themVaoGioHang(idSanPham, danhSachItemGioHang) {
    var danhSachItemGioHangSauKhiDuocThem = danhSachItemGioHang;
    var itemGioHang = taoDoiTuongItemGioHang(idSanPham, 1);
    danhSachItemGioHangSauKhiDuocThem.push(itemGioHang);

    return danhSachItemGioHang;
}
function luuGioHangXuongLocalStorage(danhSachItemGioHang) {
    /* Bước1: chuyển doóid tươngnj thành jsson */
    var jsonDanhSachIteamGioHang = JSON.stringify(danhSachItemGioHang);
    /* Bước 2: lưu json xuống local storage */
    localStorage.setItem('gioHang', jsonDanhSachIteamGioHang);

}
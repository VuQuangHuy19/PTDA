document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("show-terms")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn mặc định của thẻ <a>
      var terms = document.getElementById("terms");
      if (terms.style.display === "none" || terms.style.display === "") {
        terms.style.display = "block"; // Hiện phần điều khoản
      } else {
        terms.style.display = "none"; // Ẩn phần điều khoản
      }
    });
});

// Hàm cập nhật quận/huyện
function updateDistricts() {
  const tinhTp = document.getElementById("tinh-tp").value;
  const quanHuyenSelect = document.getElementById("quan-huyen");
  quanHuyenSelect.innerHTML = ""; // Xóa danh sách quận/huyện hiện tại

  let districts = [];

  switch (tinhTp) {
    case "Hà Nội":
      districts = [
        "Ba Đình",
        "Hoàn Kiếm",
        "Đống Đa",
        "Hai Bà Trưng",
        "Hoàng Mai",
        "Tây Hồ",
        "Nam Từ Liêm",
        "Bắc Từ Liêm",
        "Long Biên",
        "Thanh Xuân",
      ];
      break;
    case "Hồ Chí Minh":
      districts = [
        "1",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "Bình Thạnh",
        "Gò Vấp",
        "Phú Nhuận",
        "Thủ Đức",
        "Nhà Bè",
        "Hóc Môn",
        "Bình Tân",
        "Củ Chi",
        "Đông Anh",
      ];
      break;
    case "Đà Nẵng":
      districts = [
        "Hải Châu",
        "Thanh Khê",
        "Liên Chiểu",
        "Ngũ Hành Sơn",
        "Sơn Trà",
        "Hòa Vang",
        "Cẩm Lệ",
      ];
      break;
    case "Hải Phòng":
      districts = [
        "Hồng Bàng",
        "Ngô Quyền",
        "Lê Chân",
        "Kiến An",
        "Đồ Sơn",
        "An Dương",
        "An Lão",
        "Tiên Lãng",
        "Vĩnh Bảo",
      ];
      break;
    case "Cần Thơ":
      districts = [
        "Ninh Kiều",
        "Ô Môn",
        "Bình Thủy",
        "Cái Răng",
        "Thốt Nốt",
        "Phong Điền",
        "Cờ Đỏ",
        "Vĩnh Thạnh",
        "Thới Lai",
      ];
      break;
    case "An Giang":
      districts = [
        "Châu Đốc",
        "Long Xuyên",
        "Tân Châu",
        "An Phú",
        "Phú Tân",
        "Châu Phú",
        "Tri Tôn",
        "Tịnh Biên",
        "Chợ Mới",
        "Đức Huệ",
      ];
      break;
    case "Bà Rịa - Vũng Tàu":
      districts = [
        "Vũng Tàu",
        "Bà Rịa",
        "Long Điền",
        "Đất Đỏ",
        "Xuyên Mộc",
        "Tân Thành",
        "Côn Đảo",
      ];
      break;
    case "Bắc Giang":
      districts = [
        "Bắc Giang",
        "Lục Ngạn",
        "Lạng Giang",
        "Yên Thế",
        "Tân Yên",
        "Hiệp Hòa",
        "Sơn Động",
        "Yên Dũng",
        "Việt Yên",
      ];
      break;
    case "Bắc Ninh":
      districts = [
        "Bắc Ninh",
        "Từ Sơn",
        "Yên Phong",
        "Gia Bình",
        "Quế Võ",
        "Lương Tài",
        "Thuận Thành",
      ];
      break;
    case "Bến Tre":
      districts = [
        "Bến Tre",
        "Châu Thành",
        "Mỏ Cày Bắc",
        "Mỏ Cày Nam",
        "Giồng Trôm",
        "Ba Tri",
        "Bình Đại",
        "Thạnh Phú",
        "Chợ Lách",
      ];
      break;
    case "Bình Dương":
      districts = [
        "Thủ Dầu Một",
        "Dĩ An",
        "Biên Hòa",
        "Bến Cát",
        "Tân Uyên",
        "Phú Giáo",
        "Bắc Tân Uyên",
        "Bình Long",
      ];
      break;
    case "Bình Định":
      districts = [
        "Qui Nhơn",
        "An Nhơn",
        "Bình Khê",
        "Hoài Nhơn",
        "Phù Cát",
        "Phù Mỹ",
        "Vĩnh Thạnh",
        "Tây Sơn",
        "Hà Văn",
        "Nhơn Hòa",
        "Đức Phước",
      ];
      break;
    case "Bình Phước":
      districts = [
        "Đồng Xoài",
        "Phước Long",
        "Bình Long",
        "Chơn Thành",
        "Bù Đốp",
        "Bù Gia Mập",
        "Lộc Ninh",
        "Đồng Phú",
      ];
      break;
    case "Cà Mau":
      districts = [
        "Cà Mau",
        "Đầm Dơi",
        "Năm Căn",
        "Ngọc Hiển",
        "Phú Tân",
        "Thới Bình",
        "Trần Văn Thời",
        "U Minh",
      ];
      break;
    case "Cao Bằng":
      districts = [
        "Cao Bằng",
        "Bảo Lạc",
        "Bảo Lâm",
        "Hòa An",
        "Nguyên Bình",
        "Thạch An",
        "Quảng Hòa",
        "Trà Lĩnh",
        "Trùng Khánh",
      ];
      break;
    case "Đắk Lắk":
      districts = [
        "Buôn Ma Thuột",
        "Buôn Hồ",
        "Cư Kuin",
        "Krông Ana",
        "Krông Búk",
        "Krông Năng",
        "Ea H'Leo",
        "Lắk",
        "M'Đrắk",
        "Cư M'Gar",
      ];
      break;
    case "Đắk Nông":
      districts = [
        "Gia Nghĩa",
        "Đắk Glong",
        "Đắk Mil",
        "Cư Jút",
        "Krông Nô",
        "Đắk Song",
        "Tuy Đức",
      ];
      break;
    case "Điện Biên":
      districts = [
        "Điện Biên Phủ",
        "Mường Lay",
        "Điện Biên",
        "Mường Nhé",
        "Mường Ảng",
        "Tủa Chùa",
        "Nậm Pồ",
        "Điện Biên Đông",
      ];
      break;
    case "Đồng Nai":
      districts = [
        "Biên Hòa",
        "Nhơn Trạch",
        "Long Thành",
        "Đồng Nai",
        "Vĩnh Cửu",
        "Trảng Bom",
        "Tân Phú",
        "Thống Nhất",
        "Cẩm Mỹ",
      ];
      break;
    case "Đồng Tháp":
      districts = [
        "Sa Đéc",
        "Lấp Vò",
        "Châu Thành",
        "Hồng Ngự",
        "Tam Nông",
        "Tân Hồng",
        "Đồng Tháp",
        "Thanh Bình",
        "Cao Lãnh",
      ];
      break;
    case "Gia Lai":
      districts = [
        "Pleiku",
        "An Khê",
        "Ayun Pa",
        "Chư Prông",
        "Chư Sê",
        "Đăk Đoa",
        "Đức Cơ",
        "Kbang",
        "Krông Pa",
        "Mang Yang",
        "Phú Thiện",
        "Iagrai",
      ];
      break;
    case "Hà Giang":
      districts = [
        "Hà Giang",
        "Đồng Văn",
        "Mèo Vạc",
        "Yên Minh",
        "Quản Bạ",
        "Vị Xuyên",
        "Bắc Mê",
        "Hoàng Su Phì",
        "Xín Mần",
        "Trạm Tấu",
      ];
      break;
    case "Hà Nam":
      districts = ["Phủ Lý", "Duy Tiên", "Kim Bảng", "Thanh Liêm", "Lý Nhân"];
      break;
    case "Hà Tĩnh":
      districts = [
        "Hà Tĩnh",
        "Hương Khê",
        "Nghi Xuân",
        "Thạch Hà",
        "Cẩm Xuyên",
        "Kỳ Anh",
        "Can Lộc",
        "Lộc Hà",
      ];
      break;
    case "Hải Dương":
      districts = [
        "Hải Dương",
        "Chí Linh",
        "Kim Thành",
        "Kinh Môn",
        "Nam Sách",
        "Thanh Hà",
        "Gia Lộc",
        "Tứ Kỳ",
        "Bình Giang",
      ];
      break;
    case "Hậu Giang":
      districts = [
        "Vị Thanh",
        "Ngã Bảy",
        "Châu Thành",
        "Long Mỹ",
        "Phụng Hiệp",
        "Vĩnh Viễn",
        "Hòa An",
      ];
      break;
    case "Hòa Bình":
      districts = [
        "Hòa Bình",
        "Đà Bắc",
        "Mai Châu",
        "Lạc Sơn",
        "Lạc Thủy",
        "Kim Bôi",
        "Tân Lạc",
        "Yên Thủy",
      ];
      break;
    case "Hưng Yên":
      districts = [
        "Hưng Yên",
        "Mỹ Hào",
        "Đức Hòa",
        "Khoái Châu",
        "Kim Động",
        "Yên Mỹ",
        "Tiên Lữ",
        "Văn Lâm",
        "Văn Giang",
      ];
      break;
    case "Khánh Hòa":
      districts = [
        "Nha Trang",
        "Cam Ranh",
        "Vạn Ninh",
        "Ninh Hòa",
        "Khánh Vĩnh",
        "Diên Khánh",
        "Trường Sa",
      ];
      break;
    case "Kiên Giang":
      districts = [
        "Rạch Giá",
        "Kiên Lương",
        "Hà Tiên",
        "An Biên",
        "An Minh",
        "Châu Thành",
        "Giang Thành",
        "Gò Quao",
        "Tân Hiệp",
      ];
      break;
    case "Kon Tum":
      districts = [
        "Kon Tum",
        "Đăk Hà",
        "Đăk Tô",
        "Ngọc Hồi",
        "Sa Thầy",
        "Kon Plong",
        "Đăk Glei",
        "Tu Mơ Rông",
      ];
      break;
    case "Lai Châu":
      districts = [
        "Lai Châu",
        "Tam Đường",
        "Mường Tè",
        "Nậm Nhùn",
        "Phong Thổ",
        "Sìn Hồ",
        "Tân Uyên",
      ];
      break;
    case "Lâm Đồng":
      districts = [
        "Đà Lạt",
        "Bảo Lộc",
        "Đơn Dương",
        "Lạc Dương",
        "Đạ Tẻh",
        "Đam Rông",
        "Cát Tiên",
        "Bảo Lâm",
      ];
      break;
    case "Lạng Sơn":
      districts = [
        "Lạng Sơn",
        "Tràng Định",
        "Đình Lập",
        "Hữu Lũng",
        "Chi Lăng",
        "Cao Lộc",
        "Văn Lãng",
        "Đồng Đăng",
      ];
      break;
    case "Lào Cai":
      districts = [
        "Lào Cai",
        "Sa Pa",
        "Mường Khương",
        "Bảo Thắng",
        "Bảo Yên",
        "Si Ma Cai",
        "Văn Bàn",
        "Đồng Văn",
      ];
      break;
    case "Long An":
      districts = [
        "Tân An",
        "Bến Lức",
        "Thủ Thừa",
        "Châu Thành",
        "Đức Hòa",
        "Đức Huệ",
        "Mộc Hóa",
        "Thạnh Hóa",
        "Vĩnh Hưng",
      ];
      break;
    case "Nam Định":
      districts = [
        "Nam Định",
        "Mỹ Lộc",
        "Vụ Bản",
        "Nam Trực",
        "Trực Ninh",
        "Xuân Trường",
        "Đồng Hỷ",
        "Giao Thủy",
        "Ngọc Dương",
      ];
      break;
    case "Ninh Bình":
      districts = [
        "Ninh Bình",
        "Tam Điệp",
        "Gia Viễn",
        "Nho Quan",
        "Yên Khánh",
        "Hoa Lư",
        "Kim Sơn",
      ];
      break;
    case "Ninh Thuận":
      districts = [
        "Phan Rang-Tháp Chàm",
        "Ninh Hải",
        "Ninh Sơn",
        "Bác Ái",
        "Thuận Bắc",
        "Thuận Nam",
      ];
      break;
    case "Phú Thọ":
      districts = [
        "Việt Trì",
        "Phú Thọ",
        "Đoan Hùng",
        "Hạ Hòa",
        "Thanh Ba",
        "Tân Sơn",
        "Phù Ninh",
        "Lâm Thao",
        "Cẩm Khê",
        "Tam Nông",
      ];
      break;
    case "Phú Yên":
      districts = [
        "Tuy Hòa",
        "Sông Cầu",
        "Đông Hòa",
        "Phú Hòa",
        "Tây Hòa",
        "Sơn Hòa",
        "Đồng Xuân",
        "Trà My",
      ];
      break;
    case "Quảng Bình":
      districts = [
        "Đồng Hới",
        "Ba Đồn",
        "Quảng Trạch",
        "Tuyên Hóa",
        "Minh Hóa",
        "Lệ Thủy",
        "Bố Trạch",
      ];
      break;
    case "Quảng Nam":
      districts = [
        "Tam Kỳ",
        "Hội An",
        "Đại Lộc",
        "Duy Xuyên",
        "Quế Sơn",
        "Nông Sơn",
        "Thăng Bình",
        "Tiên Phước",
        "Phước Sơn",
      ];
      break;
    case "Quảng Ngãi":
      districts = [
        "Quảng Ngãi",
        "Ba Tơ",
        "Bình Sơn",
        "Đức Phổ",
        "Mộ Đức",
        "Tư Nghĩa",
        "Sơn Tịnh",
        "Trà Bồng",
        "Lý Sơn",
      ];
      break;
    case "Quảng Ninh":
      districts = [
        "Hạ Long",
        "Cẩm Phả",
        "Móng Cái",
        "Uông Bí",
        "Đông Triều",
        "Quảng Yên",
        "Văn Đồn",
        "Tiên Yên",
      ];
      break;
    case "Quảng Trị":
      districts = [
        "Đông Hà",
        "Quảng Trị",
        "Gio Linh",
        "Vĩnh Linh",
        "Hướng Hóa",
        "Cam Lộ",
        "Triệu Phong",
      ];
      break;
    case "Sóc Trăng":
      districts = [
        "Sóc Trăng",
        "Bạc Liêu",
        "Kế Sách",
        "Châu Thành",
        "Long Phú",
        "Thạnh Trị",
        "Ngọc Tố",
        "Trần Đề",
      ];
      break;
    case "Sơn La":
      districts = [
        "Sơn La",
        "Sông Mã",
        "Mộc Châu",
        "Quỳnh Nhai",
        "Phù Yên",
        "Yên Châu",
        "Mai Sơn",
        "Thường Xuân",
      ];
      break;
    case "Tây Ninh":
      districts = [
        "Tây Ninh",
        "Tân Biên",
        "Tân Châu",
        "Bến Cầu",
        "Hòa Thành",
        "Gò Dầu",
        "Dương Minh Châu",
      ];
      break;
    case "Thái Bình":
      districts = [
        "Thái Bình",
        "Đông Hưng",
        "Hưng Hà",
        "Quỳnh Phụ",
        "Thái Thụy",
        "Tiền Hải",
        "Vũ Thư",
      ];
      break;
    case "Thái Nguyên":
      districts = [
        "Thái Nguyên",
        "Sông Công",
        "Đại Từ",
        "Phổ Yên",
        "Định Hóa",
        "Phú Bình",
        "Võ Nhai",
        "Phú Lương",
      ];
      break;
    case "Thanh Hóa":
      districts = [
        "Thanh Hóa",
        "Bỉm Sơn",
        "Sầm Sơn",
        "Nghi Sơn",
        "Thọ Xuân",
        "Vĩnh Lộc",
        "Hậu Lộc",
        "Quảng Xương",
        "Tĩnh Gia",
      ];
      break;
    case "Thừa Thiên - Huế":
      districts = [
        "Huế",
        "Hương Thủy",
        "Hương Trà",
        "Phong Điền",
        "Quảng Điền",
        "Phú Vang",
        "A Lưới",
        "Nam Đông",
      ];
      break;
    case "Tiền Giang":
      districts = [
        "Mỹ Tho",
        "Gò Công",
        "Gò Công Đông",
        "Châu Thành",
        "Chợ Gạo",
        "Tân Phú Đông",
        "Tân Hiệp",
      ];
      break;
    case "Vĩnh Long":
      districts = [
        "Vĩnh Long",
        "Mang Thít",
        "Tam Bình",
        "Trà Ôn",
        "Long Hồ",
        "Bình Minh",
      ];
      break;
    case "Vĩnh Phúc":
      districts = [
        "Vĩnh Yên",
        "Phúc Yên",
        "Bình Xuyên",
        "Lập Thạch",
        "Tam Dương",
        "Vĩnh Tường",
        "Yên Lạc",
      ];
      break;
    case "Yên Bái":
      districts = [
        "Yên Bái",
        "Lục Yên",
        "Văn Yên",
        "Trấn Yên",
        "Mù Cang Chải",
        "Văn Chấn",
      ];
      break;
    default:
      districts = [];
  }

  // Cập nhật danh sách quận/huyện vào phần tử <select>
  districts.forEach(function (district) {
    var option = document.createElement("option");
    option.value = district;
    option.textContent = district;
    quanHuyenSelect.appendChild(option);
  });
}

// Gọi hàm cập nhật quận/huyện khi thay đổi tỉnh/thành phố
document.getElementById("tinh-tp").addEventListener("change", updateDistricts);

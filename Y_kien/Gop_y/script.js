// Lấy các phần tử trong form
const tinhDropdown = document.getElementById("tinh");
const huyenDropdown = document.getElementById("huyen");
const xaDropdown = document.getElementById("xa");

// Lưu trữ dữ liệu tỉnh, huyện, xã sau khi tải
let allData = [];

// Hàm gọi API để lấy dữ liệu tỉnh/thành phố, huyện, xã/phường
async function loadProvincesData() {
  try {
    const response = await fetch("https://provinces.open-api.vn/api/?depth=2");
    allData = await response.json(); // Lưu toàn bộ dữ liệu
    populateDropdown(tinhDropdown, allData, "Chọn tỉnh/thành phố");
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
  }
}

// Hàm thêm các lựa chọn vào dropdown
function populateDropdown(dropdown, items, defaultText) {
  dropdown.innerHTML = `<option value="">${defaultText}</option>`;
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.code; // Sử dụng code từ API
    option.textContent = item.name; // Sử dụng name từ API
    dropdown.appendChild(option);
  });
}

// Hàm thêm quận/huyện tương ứng với tỉnh được chọn
function loadDistrictsByProvince(provinceCode) {
  const selectedProvince = allData.find(
    (province) => province.code == provinceCode
  );
  if (selectedProvince && selectedProvince.districts) {
    populateDropdown(
      huyenDropdown,
      selectedProvince.districts,
      "Chọn quận/huyện"
    );
    huyenDropdown.disabled = false;
    xaDropdown.disabled = true;
    xaDropdown.innerHTML = '<option value="">Chọn xã/phường</option>';
  }
}

// Hàm thêm xã/phường tương ứng với huyện được chọn
function loadWardsByDistrict(districtCode) {
  const provinceCode = tinhDropdown.value;
  const selectedProvince = allData.find(
    (province) => province.code == provinceCode
  );
  const selectedDistrict = selectedProvince.districts.find(
    (district) => district.code == districtCode
  );

  if (selectedDistrict && selectedDistrict.wards) {
    populateDropdown(xaDropdown, selectedDistrict.wards, "Chọn xã/phường");
    xaDropdown.disabled = false;
  } else {
    xaDropdown.disabled = true;
    xaDropdown.innerHTML = '<option value="">Không có xã/phường</option>';
  }
}

// Sự kiện khi chọn tỉnh/thành phố
tinhDropdown.addEventListener("change", function () {
  const provinceCode = this.value;
  if (provinceCode) {
    loadDistrictsByProvince(provinceCode); // Lấy quận/huyện khi chọn tỉnh
  } else {
    huyenDropdown.disabled = true;
    xaDropdown.disabled = true;
  }
});

// Sự kiện khi chọn quận/huyện
huyenDropdown.addEventListener("change", function () {
  const districtCode = this.value;
  if (districtCode) {
    loadWardsByDistrict(districtCode); // Lấy xã/phường khi chọn huyện
  } else {
    xaDropdown.disabled = true;
  }
});

// Load dữ liệu tỉnh/thành phố khi trang được tải
document.addEventListener("DOMContentLoaded", loadProvincesData);

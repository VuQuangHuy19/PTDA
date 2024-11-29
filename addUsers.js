const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const User = require('./src/app/models/User'); // Import model User
const { connect } = require('./src/config/db'); // Import hàm kết nối DB

// Kết nối MongoDB
connect();

// Danh sách tên người Việt (80 tên khác nhau)
const vietnameseNames = [
    "Nguyễn Văn Toàn", "Trần Thị Hoa", "Phạm Minh Hải", "Lê Quang Huy", "Hoàng Thị Vân",
    "Nguyễn Thị Mai", "Trần Minh Tuấn", "Phạm Thị Lan", "Lê Minh Thảo", "Hoàng Thị Bích",
    "Nguyễn Tiến Dũng", "Trần Thi Lan", "Phạm Ngọc Mai", "Lê Thị Lan", "Hoàng Minh Thịnh",
    "Nguyễn Quang Duy", "Trần Thế Anh", "Phạm Minh Tuấn", "Lê Thị Hương", "Hoàng Thị Phương",
    "Nguyễn Minh Nhật", "Trần Nhật Hào", "Phạm Hồng Ngọc", "Lê Thái Sơn", "Hoàng Duy Anh",
    "Nguyễn Tuấn Anh", "Trần Hoàng Nam", "Phạm Thị Vân", "Lê Thanh Bình", "Hoàng Minh Tuấn",
    "Nguyễn Hoàng Hải", "Trần Quang Tùng", "Phạm Minh Tân", "Lê Thi Thanh", "Hoàng Quang Minh",
    "Nguyễn Thị Cẩm", "Trần Thị Bích", "Phạm Tuấn Anh", "Lê Hoàng Cường", "Hoàng Thi Minh",
    "Nguyễn Minh Cảnh", "Trần Minh Hảo", "Phạm Thị Hiền", "Lê Thị Thủy", "Hoàng Minh Khôi",
    "Nguyễn Đỗ Thanh", "Trần Quang Lê", "Phạm Duy Quân", "Lê Thanh Lan", "Hoàng Hải Phong",
    "Nguyễn Kim Hoàng", "Trần Hồng Vân", "Phạm Đình Bảo", "Lê Hoàng Sơn", "Hoàng Khánh Chi",
    "Nguyễn Quang Thành", "Trần Tiến Thịnh", "Phạm Tuấn Thành", "Lê Hoàng Giang", "Hoàng Minh Quân",
    "Nguyễn Đạt Minh", "Trần Thị Quỳnh", "Phạm Tiến Nam", "Lê Ngọc Quân", "Hoàng Quang Ngọc",
    "Nguyễn Duy Trí", "Trần Kim Huy", "Phạm Thi Lan", "Lê Thu Hòa", "Hoàng Minh Trí",
    "Nguyễn Thanh Hà", "Trần Minh Hoài", "Phạm Hoàng Quang", "Lê Quang Nhật", "Hoàng Hồng Sơn",
    "Nguyễn Thi Mai", "Trần Minh Thành", "Phạm Thanh Hương", "Lê Thái Bảo", "Hoàng Hữu Tài",
    "Nguyễn Văn Hiếu", "Trần Thị Nhung", "Phạm Minh Triết", "Lê Quốc Phong", "Hoàng Gia Bảo",
    "Nguyễn Hải Nam", "Trần Hữu Lộc", "Phạm Thị Ngọc", "Lê Văn Dũng", "Hoàng Tấn Phát",
    "Nguyễn Huy Hoàng", "Trần Thị Hồng", "Phạm Đức Anh", "Lê Minh Khôi", "Hoàng Thị Hiền",
    "Nguyễn Đình Quang", "Trần Ngọc Bích", "Phạm Huy Cường", "Lê Văn Tài", "Hoàng Thái Hòa"
];


// Danh sách thành phố Việt Nam (20 thành phố khác nhau)
const vietnamGeoData = {
    "Hà Nội": {
        districts: ["Ba Đình", "Hoàn Kiếm", "Tây Hồ", "Long Biên", "Cầu Giấy"],
        streets: {
            "Ba Đình": ["Kim Mã", "Ngọc Hà", "Liễu Giai"],
            "Hoàn Kiếm": ["Hàng Đào", "Hàng Ngang", "Lý Thái Tổ"],
            "Tây Hồ": ["Xuân Diệu", "Âu Cơ", "Lạc Long Quân"],
            "Long Biên": ["Ngọc Thụy", "Ngọc Lâm", "Thạch Bàn"],
            "Cầu Giấy": ["Cầu Giấy", "Xuân Thủy", "Trần Đăng Ninh"]
        }
    },
    "Hồ Chí Minh": {
        districts: ["Quận 1", "Quận 3", "Quận 5", "Quận 7", "Quận 10"],
        streets: {
            "Quận 1": ["Nguyễn Huệ", "Lê Lợi", "Đồng Khởi"],
            "Quận 3": ["Nam Kỳ Khởi Nghĩa", "Lý Chính Thắng", "Nguyễn Đình Chiểu"],
            "Quận 5": ["Trần Hưng Đạo", "Châu Văn Liêm", "Nguyễn Trãi"],
            "Quận 7": ["Huỳnh Tấn Phát", "Nguyễn Thị Thập", "Lâm Văn Bền"],
            "Quận 10": ["3/2", "Sư Vạn Hạnh", "Ngô Gia Tự"]
        }
    },
    "Đà Nẵng": {
        districts: ["Hải Châu", "Thanh Khê", "Ngũ Hành Sơn", "Sơn Trà", "Cẩm Lệ"],
        streets: {
            "Hải Châu": ["Trần Phú", "Phan Chu Trinh", "Lê Duẩn"],
            "Thanh Khê": ["Điện Biên Phủ", "Nguyễn Văn Linh", "Hàm Nghi"],
            "Ngũ Hành Sơn": ["Nguyễn Văn Thoại", "Lê Văn Hiến", "Trường Sa"],
            "Sơn Trà": ["Hoàng Sa", "Phạm Văn Đồng", "Nguyễn Tất Thành"],
            "Cẩm Lệ": ["Trần Văn Trà", "Nguyễn Hữu Thọ", "Lê Đại Hành"]
        }
    },
    "Cần Thơ": {
        districts: ["Ninh Kiều", "Bình Thủy", "Cái Răng", "Ô Môn", "Thốt Nốt"],
        streets: {
            "Ninh Kiều": ["Đại lộ Hòa Bình", "Nguyễn Trãi", "Trần Văn Hoài"],
            "Bình Thủy": ["Bùi Hữu Nghĩa", "Nguyễn Việt Hồng", "Cách Mạng Tháng Tám"],
            "Cái Răng": ["Lê Hồng Phong", "Phan Đăng Lưu", "Nguyễn Văn Linh"],
            "Ô Môn": ["Trần Hưng Đạo", "Ngô Quyền", "Lý Tự Trọng"],
            "Thốt Nốt": ["Hùng Vương", "Nguyễn Thái Học", "Phan Văn Hòa"]
        }
    },
    "Hải Phòng": {
        districts: ["Hồng Bàng", "Lê Chân", "Ngô Quyền", "Kiến An", "Dương Kinh"],
        streets: {
            "Hồng Bàng": ["Trần Hưng Đạo", "Nguyễn Tri Phương", "Minh Khai"],
            "Lê Chân": ["Chợ Hàng", "Tô Hiệu", "Lạch Tray"],
            "Ngô Quyền": ["Hoàng Diệu", "Trần Nguyên Hãn", "Đà Nẵng"],
            "Kiến An": ["Nguyễn Lương Bằng", "Đồng Hòa", "Lê Duẩn"],
            "Dương Kinh": ["Nguyễn Văn Trỗi", "Phạm Văn Đồng", "Lê Văn Tám"]
        }
    },
    "Quảng Ninh": {
        districts: ["Hạ Long", "Cẩm Phả", "Uông Bí", "Móng Cái", "Quảng Yên"],
        streets: {
            "Hạ Long": ["Bãi Cháy", "Hồng Hải", "Trần Hưng Đạo"],
            "Cẩm Phả": ["Cẩm Đông", "Cẩm Tây", "Quang Trung"],
            "Uông Bí": ["Phương Đông", "Trần Nhân Tông", "Yên Thanh"],
            "Móng Cái": ["Trần Phú", "Ngô Quyền", "Hải Yên"],
            "Quảng Yên": ["Bình Minh", "Yên Giang", "Nam Hòa"]
        }
    },
    "Thừa Thiên Huế": {
        districts: ["Huế", "Phú Vang", "Hương Thủy", "Hương Trà", "Phong Điền"],
        streets: {
            "Huế": ["Lê Lợi", "Nguyễn Huệ", "Trần Hưng Đạo"],
            "Phú Vang": ["Phú Xuân", "Lê Thanh Nghị", "Nguyễn Tất Thành"],
            "Hương Thủy": ["Duy Tân", "Phan Bội Châu", "Lê Đại Hành"],
            "Hương Trà": ["Quốc Lộ 1A", "Hương Vân", "Đông Ba"],
            "Phong Điền": ["Lý Thái Tổ", "Nguyễn Văn Trỗi", "Hoàng Hoa Thám"]
        }
    },
    "Khánh Hòa": {
        districts: ["Nha Trang", "Cam Ranh", "Diên Khánh", "Vạn Ninh", "Ninh Hòa"],
        streets: {
            "Nha Trang": ["Trần Phú", "Nguyễn Thiện Thuật", "Phạm Văn Đồng"],
            "Cam Ranh": ["Nguyễn Chí Thanh", "Hùng Vương", "Lê Duẩn"],
            "Diên Khánh": ["Quốc lộ 27", "Trần Nhật Duật", "Ngô Gia Tự"],
            "Vạn Ninh": ["Đinh Tiên Hoàng", "Nguyễn Thái Học", "Lý Thường Kiệt"],
            "Ninh Hòa": ["Hòa Bình", "Phạm Ngũ Lão", "Lê Thánh Tôn"]
        }
    },
    "Lâm Đồng": {
        districts: ["Đà Lạt", "Bảo Lộc", "Di Linh", "Đơn Dương", "Lạc Dương"],
        streets: {
            "Đà Lạt": ["Nguyễn Chí Thanh", "Hồ Tùng Mậu", "Trần Phú"],
            "Bảo Lộc": ["Lý Tự Trọng", "Ngô Quyền", "Trần Hưng Đạo"],
            "Di Linh": ["Nguyễn Du", "Phạm Ngọc Thạch", "Lê Lợi"],
            "Đơn Dương": ["Thống Nhất", "Hùng Vương", "Lê Lai"],
            "Lạc Dương": ["Hoàng Văn Thụ", "Lê Thánh Tôn", "Nguyễn Tri Phương"]
        }
    },
    "Nghệ An": {
        districts: ["Vinh", "Cửa Lò", "Quỳnh Lưu", "Nam Đàn", "Đô Lương"],
        streets: {
            "Vinh": ["Lê Hồng Phong", "Nguyễn Văn Cừ", "Quang Trung"],
            "Cửa Lò": ["Bình Minh", "Mai Thúc Loan", "Nguyễn Huệ"],
            "Quỳnh Lưu": ["Hồ Xuân Hương", "Phạm Hồng Thái", "Lê Văn Tám"],
            "Nam Đàn": ["Nguyễn Sinh Sắc", "Lê Hồng Sơn", "Quốc Lộ 46"],
            "Đô Lương": ["Nguyễn Thị Minh Khai", "Quốc Lộ 15", "Phan Bội Châu"]
        }
    },
    "Thanh Hóa": {
        districts: ["Thanh Hóa", "Sầm Sơn", "Bỉm Sơn", "Tĩnh Gia", "Hậu Lộc"],
        streets: {
            "Thanh Hóa": ["Hạc Thành", "Trường Thi", "Lê Hoàn"],
            "Sầm Sơn": ["Hồ Xuân Hương", "Trần Hưng Đạo", "Nguyễn Du"],
            "Bỉm Sơn": ["Nguyễn Huệ", "Lý Thường Kiệt", "Hùng Vương"],
            "Tĩnh Gia": ["Quang Trung", "Phan Đình Phùng", "Trần Phú"],
            "Hậu Lộc": ["Đinh Tiên Hoàng", "Nguyễn Văn Trỗi", "Nguyễn Văn Linh"]
        }
    },
    "Phú Yên": {
        districts: ["Tuy Hòa", "Sông Cầu", "Đồng Xuân", "Tây Hòa", "Phú Hòa"],
        streets: {
            "Tuy Hòa": ["Nguyễn Huệ", "Lê Lợi", "Trần Hưng Đạo"],
            "Sông Cầu": ["Đinh Tiên Hoàng", "Ngô Quyền", "Quang Trung"],
            "Đồng Xuân": ["Trường Chinh", "Lê Văn Tám", "Phạm Văn Đồng"],
            "Tây Hòa": ["Hùng Vương", "Nguyễn Thị Minh Khai", "Bùi Thị Xuân"],
            "Phú Hòa": ["Nguyễn Tất Thành", "Lê Quý Đôn", "Phan Bội Châu"]
        }
    },
    "Bình Định": {
        districts: ["Quy Nhơn", "Hoài Nhơn", "Phù Mỹ", "Tuy Phước", "An Nhơn"],
        streets: {
            "Quy Nhơn": ["An Dương Vương", "Lê Hồng Phong", "Nguyễn Huệ"],
            "Hoài Nhơn": ["Trần Phú", "Lý Thái Tổ", "Nguyễn Chánh"],
            "Phù Mỹ": ["Lê Duẩn", "Phạm Hùng", "Ngô Gia Tự"],
            "Tuy Phước": ["Lê Văn Lương", "Nguyễn Công Trứ", "Hùng Vương"],
            "An Nhơn": ["Trần Quốc Toản", "Lý Tự Trọng", "Phan Đăng Lưu"]
        }
    },
    "Kiên Giang": {
        districts: ["Rạch Giá", "Hà Tiên", "Phú Quốc", "Châu Thành", "Tân Hiệp"],
        streets: {
            "Rạch Giá": ["Nguyễn Trung Trực", "Lạc Hồng", "Ngô Gia Tự"],
            "Hà Tiên": ["Mạc Cửu", "Phạm Hồng Thái", "Nguyễn Thái Học"],
            "Phú Quốc": ["Trần Hưng Đạo", "Nguyễn Chí Thanh", "Lê Thánh Tôn"],
            "Châu Thành": ["Quang Trung", "Lê Văn Tám", "Nguyễn Du"],
            "Tân Hiệp": ["Nguyễn Tất Thành", "Lê Lợi", "Phạm Văn Đồng"]
        }
    },
    "Bà Rịa - Vũng Tàu": {
        districts: ["Vũng Tàu", "Bà Rịa", "Phú Mỹ", "Long Điền", "Đất Đỏ"],
        streets: {
            "Vũng Tàu": ["Thùy Vân", "Hoàng Hoa Thám", "Trần Phú"],
            "Bà Rịa": ["Hùng Vương", "Lê Lợi", "Nguyễn Hữu Thọ"],
            "Phú Mỹ": ["Trường Chinh", "Nguyễn Văn Linh", "Đinh Tiên Hoàng"],
            "Long Điền": ["Nguyễn Du", "Ngô Quyền", "Phạm Văn Đồng"],
            "Đất Đỏ": ["Lý Thái Tổ", "Trần Hưng Đạo", "Lê Văn Tám"]
        }
    },
    "Bắc Giang": {
        districts: ["Bắc Giang", "Hiệp Hòa", "Lục Ngạn", "Tân Yên", "Yên Dũng"],
        streets: {
            "Bắc Giang": ["Hoàng Hoa Thám", "Lê Lợi", "Nguyễn Văn Cừ"],
            "Hiệp Hòa": ["Quang Trung", "Trần Nhật Duật", "Ngô Gia Tự"],
            "Lục Ngạn": ["Nguyễn Du", "Lê Hồng Phong", "Trần Hưng Đạo"],
            "Tân Yên": ["Nguyễn Văn Trỗi", "Lý Thường Kiệt", "Nguyễn Tất Thành"],
            "Yên Dũng": ["Ngô Quyền", "Phạm Văn Đồng", "Lê Đại Hành"]
        }
    },
    "Tiền Giang": {
        districts: ["Mỹ Tho", "Cai Lậy", "Cái Bè", "Chợ Gạo", "Tân Phước"],
        streets: {
            "Mỹ Tho": ["Trần Hưng Đạo", "Lê Lợi", "Nguyễn Văn Cừ"],
            "Cai Lậy": ["Nguyễn Thị Minh Khai", "Ngô Quyền", "Quang Trung"],
            "Cái Bè": ["Trần Phú", "Nguyễn Trãi", "Hùng Vương"],
            "Chợ Gạo": ["Nguyễn Huệ", "Lý Tự Trọng", "Phan Đình Phùng"],
            "Tân Phước": ["Nguyễn Văn Trỗi", "Ngô Gia Tự", "Phạm Ngọc Thạch"]
        }
    },
    "Quảng Bình": {
        districts: ["Đồng Hới", "Quảng Trạch", "Bố Trạch", "Lệ Thủy", "Tuyên Hóa"],
        streets: {
            "Đồng Hới": ["Trần Hưng Đạo", "Lý Thường Kiệt", "Quang Trung"],
            "Quảng Trạch": ["Nguyễn Văn Cừ", "Hùng Vương", "Ngô Quyền"],
            "Bố Trạch": ["Quốc Lộ 1A", "Lê Duẩn", "Nguyễn Công Trứ"],
            "Lệ Thủy": ["Đinh Tiên Hoàng", "Nguyễn Thị Minh Khai", "Phạm Văn Đồng"],
            "Tuyên Hóa": ["Nguyễn Văn Trỗi", "Trần Phú", "Phan Đình Phùng"]
        }
    },

    "Vĩnh Phúc": {
        districts: ["Vĩnh Yên", "Phúc Yên", "Tam Đảo", "Yên Lạc", "Bình Xuyên"],
        streets: {
            "Vĩnh Yên": ["Nguyễn Tất Thành", "Ngô Quyền", "Lê Quý Đôn"],
            "Phúc Yên": ["Trần Phú", "Nguyễn Văn Linh", "Hùng Vương"],
            "Tam Đảo": ["Quốc Lộ 2B", "Xuân Hòa", "Tam Đảo Thị Trấn"],
            "Yên Lạc": ["Trần Hưng Đạo", "Lý Thường Kiệt", "Phạm Văn Đồng"],
            "Bình Xuyên": ["Hồ Tùng Mậu", "Nguyễn Huệ", "Nguyễn Văn Cừ"]
        }
    },
    "Tuyên Quang": {
        districts: ["Thành phố Tuyên Quang", "Yên Sơn", "Sơn Dương", "Chiêm Hóa", "Na Hang"],
        streets: {
            "Thành phố Tuyên Quang": ["Tân Trào", "Phạm Ngũ Lão", "Lê Lợi"],
            "Yên Sơn": ["Nguyễn Công Trứ", "Nguyễn Du", "Quốc Lộ 2"],
            "Sơn Dương": ["Trần Hưng Đạo", "Hùng Vương", "Nguyễn Văn Cừ"],
            "Chiêm Hóa": ["Đinh Tiên Hoàng", "Lê Đại Hành", "Nguyễn Thị Minh Khai"],
            "Na Hang": ["Lý Thường Kiệt", "Quang Trung", "Trần Phú"]
        }
    }      
};
const passportList = [
    "A1234567", "B2345678", "C3456789", "D4567890", "E5678901",
    "F6789012", "G7890123", "H8901234", "I9012345", "J0123456",
    "K1234567", "L2345678", "M3456789", "N4567890", "O5678901",
    "P6789012", "Q7890123", "R8901234", "S9012345", "T0123456",
    "U1234567", "V2345678", "W3456789", "X4567890", "Y5678901",
    "Z6789012", "A7890123", "B8901234", "C9012345", "D0123456",
    "E1234567", "F2345678", "G3456789", "H4567890", "I5678901",
    "J6789012", "K7890123", "L8901234", "M9012345", "N0123456",
    "O1234567", "P2345678", "Q3456789", "R4567890", "S5678901",
    "T6789012", "U7890123", "V8901234", "W9012345", "X0123456",
    "A2345678", "B3456789", "C4567890", "D5678901", "E6789012",
    "F7890123", "G8901234", "H9012345", "I0123456", "J1234567",
    "K2345678", "L3456789", "M4567890", "N5678901", "O6789012",
    "P7890123", "Q8901234", "R9012345", "S0123456", "T1234567",
    "U2345678", "V3456789", "W4567890", "X5678901", "Y6789012",
    "Z7890123", "A8901234", "B9012345", "C0123456", "D1234567",
    "E2345678", "F3456789", "G4567890", "H5678901", "I6789012",
    "J7890123", "K8901234", "L9012345", "M0123456", "N1234567",
    "O2345678", "P3456789", "Q4567890", "R5678901", "S6789012",
    "T7890123", "U8901234", "V9012345", "W0123456", "X1234567",
];


// Hàm tạo một user giả lập
const generateUser = () => {  
    const nameList = vietnameseNames;  // Dùng luôn danh sách tên người Việt

    // Sinh thông tin địa chỉ ngẫu nhiên từ vietnamGeoData
    const randomCity = Object.keys(vietnamGeoData)[Math.floor(Math.random() * Object.keys(vietnamGeoData).length)];
    const randomDistrict = vietnamGeoData[randomCity].districts[Math.floor(Math.random() * vietnamGeoData[randomCity].districts.length)];
    const randomStreet = vietnamGeoData[randomCity].streets[randomDistrict][Math.floor(Math.random() * vietnamGeoData[randomCity].streets[randomDistrict].length)];

    const address = `${randomStreet}, ${randomDistrict}, ${randomCity}`;
    const emailPrefix = faker.internet.userName(); // Sinh phần tên người dùng của email
    const email = `${emailPrefix}@gmail.com`;
    return {
        fullName: nameList[Math.floor(Math.random() * nameList.length)], // Họ tên
        dateOfBirth: faker.date.past(30, new Date(2000, 0, 1)), // Sinh nhật ngẫu nhiên, từ 30 năm trước
        citizenID: faker.number.int({ min: 100000000, max: 999999999 }), // CCCD ngẫu nhiên
        passport: passportList[Math.floor(Math.random() * passportList.length)], 
        dateOfIssue: faker.date.past(10), // Ngày cấp CCCD ngẫu nhiên
        country: "Việt Nam", // Quốc gia cố định
        province: randomCity, // Tỉnh từ vietnamGeoData
        district: randomDistrict, // Quận từ vietnamGeoData
        address: address, // Địa chỉ sinh ra từ randomStreet, randomDistrict, randomCity
        referralCode: faker.datatype.boolean() ? faker.string.alphanumeric(6) : null, // Mã giới thiệu ngẫu nhiên
        password: '123456', // Mật khẩu mặc định
        email:email, // Email vẫn giữ nguyên
    };
};

const addUsers = async () => {
    try {
        const users = [];
        const usedVietnameseNames = new Set();
        const usedEmails = new Set(); // Kiểm tra email đã tồn tại
        const usedCitizenIDs = new Set(); // Kiểm tra citizenID đã tồn tại
        const usedPassports = new Set(); // Kiểm tra passport đã tồn tại

        // Thêm 100 người Việt Nam
        for (let i = 0; i < 100; i++) {
            let newUser;
            do {
                newUser = generateUser(); // Tạo một user Việt Nam
            } while (
                usedVietnameseNames.has(newUser.fullName) || // Kiểm tra tên đã tồn tại
                usedEmails.has(newUser.email) || // Kiểm tra email đã tồn tại
                usedCitizenIDs.has(newUser.citizenID) || // Kiểm tra citizenID đã tồn tại
                (newUser.passport && usedPassports.has(newUser.passport)) || // Kiểm tra passport đã tồn tại
                await User.exists({ email: newUser.email }) || // Kiểm tra email trong cơ sở dữ liệu
                await User.exists({ citizenID: newUser.citizenID }) || // Kiểm tra citizenID trong cơ sở dữ liệu
                (newUser.passport && await User.exists({ passport: newUser.passport })) // Kiểm tra passport trong cơ sở dữ liệu
            );

            usedVietnameseNames.add(newUser.fullName); // Thêm tên vào danh sách đã sử dụng
            usedEmails.add(newUser.email); // Thêm email vào danh sách đã sử dụng
            usedCitizenIDs.add(newUser.citizenID); // Thêm citizenID vào danh sách đã sử dụng
            if (newUser.passport) {
                usedPassports.add(newUser.passport); // Thêm passport vào danh sách đã sử dụng
            }
            users.push(newUser);
        }

        // Thêm tất cả users vào cơ sở dữ liệu
        await User.insertMany(users);
        console.log('Thêm dữ liệu thành công!');
    } catch (error) {
        console.error('Lỗi khi thêm dữ liệu:', error);
    }
};

// Thực thi hàm
addUsers();

